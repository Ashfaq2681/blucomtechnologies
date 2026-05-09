interface PageIntroProps {
  eyebrow?: string;
  title: string;
  description: string;
  actions?: React.ReactNode;
}

const PageIntro: React.FC<PageIntroProps> = ({
  eyebrow = "Dashboard",
  title,
  description,
  actions,
}) => {
  return (
    <section className="overflow-hidden rounded-[30px] border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-blue-50 px-6 py-6 sm:px-7">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-600/80">
            {eyebrow}
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
            {title}
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
            {description}
          </p>
        </div>
        {actions ? <div className="shrink-0">{actions}</div> : null}
      </div>
    </section>
  );
};

export default PageIntro;
