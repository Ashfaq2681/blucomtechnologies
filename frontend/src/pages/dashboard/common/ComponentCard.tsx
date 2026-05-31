interface ComponentCardProps {
  title: string;
  children: React.ReactNode;
  className?: string; // Additional custom classes for styling
  desc?: string; // Description text
  eyebrow?: string;
  headerMeta?: React.ReactNode;
}

const ComponentCard: React.FC<ComponentCardProps> = ({
  title,
  children,
  className = "",
  desc = "",
  eyebrow = "",
  headerMeta = null,
}) => {
  return (
    <div
      className={`overflow-hidden rounded-[28px] border border-slate-200 bg-white ${className}`}
    >
      <div className="border-b border-slate-100 bg-white px-5 py-5 sm:px-7">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0">
            {eyebrow && (
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
                {eyebrow}
              </p>
            )}
            <h3 className="text-xl font-semibold tracking-tight text-slate-950">
              {title}
            </h3>
            {desc && (
              <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-500">
                {desc}
              </p>
            )}
          </div>
          {headerMeta && <div className="shrink-0">{headerMeta}</div>}
        </div>
      </div>

      <div className="bg-slate-50/35 p-5 sm:p-7">
        <div className="space-y-6">{children}</div>
      </div>
    </div>
  );
};

export default ComponentCard;
