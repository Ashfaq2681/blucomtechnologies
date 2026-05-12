const SIGN_OUT_EVENT = "dashboard:before-signout";
const SIGN_OUT_SYNC_TIMEOUT_MS = 5000;

type SignOutListener = () => Promise<unknown> | unknown;

declare global {
  interface WindowEventMap {
    "dashboard:before-signout": CustomEvent<{
      addTask: (task: Promise<unknown>) => void;
    }>;
  }
}

const withTimeout = async <T>(promise: Promise<T>, timeoutMs: number) =>
  Promise.race<T | undefined>([
    promise,
    new Promise<undefined>((resolve) => {
      window.setTimeout(() => resolve(undefined), timeoutMs);
    }),
  ]);

export const registerBeforeSignOut = (listener: SignOutListener) => {
  if (typeof window === "undefined") {
    return () => undefined;
  }

  const handleBeforeSignOut = (
    event: CustomEvent<{ addTask: (task: Promise<unknown>) => void }>
  ) => {
    try {
      event.detail.addTask(Promise.resolve(listener()));
    } catch (error) {
      event.detail.addTask(Promise.reject(error));
    }
  };

  window.addEventListener(
    SIGN_OUT_EVENT,
    handleBeforeSignOut as EventListener
  );

  return () => {
    window.removeEventListener(
      SIGN_OUT_EVENT,
      handleBeforeSignOut as EventListener
    );
  };
};

export const syncBeforeSignOut = async () => {
  if (typeof window === "undefined") {
    return;
  }

  const tasks: Promise<unknown>[] = [];

  window.dispatchEvent(
    new CustomEvent(SIGN_OUT_EVENT, {
      detail: {
        addTask: (task: Promise<unknown>) => {
          tasks.push(task);
        },
      },
    })
  );

  if (tasks.length === 0) {
    return;
  }

  await withTimeout(
    Promise.allSettled(tasks).then(() => undefined),
    SIGN_OUT_SYNC_TIMEOUT_MS
  );
};
