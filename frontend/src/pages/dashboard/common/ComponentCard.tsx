interface ComponentCardProps {
  title: string;
  children: React.ReactNode;
  className?: string; // Additional custom classes for styling
  desc?: string; // Description text
}

const ComponentCard: React.FC<ComponentCardProps> = ({
  title,
  children,
  className = "",
  desc = "",
}) => {
  return (
    <div
      className={`overflow-hidden rounded-[28px] border border-slate-200 bg-white ${className}`}
    >
      <div className="border-b border-slate-100 px-6 py-5 sm:px-7">
        <h3 className="text-base font-semibold tracking-tight text-slate-900">
          {title}
        </h3>
        {desc && (
          <p className="mt-1 text-sm text-slate-500">
            {desc}
          </p>
        )}
      </div>

      <div className="bg-slate-50/35 p-5 sm:p-7">
        <div className="space-y-6">{children}</div>
      </div>
    </div>
  );
};

export default ComponentCard;
