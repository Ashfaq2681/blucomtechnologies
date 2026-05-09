type BadgeVariant = "light" | "solid";
type BadgeSize = "sm" | "md";
type BadgeColor =
  | "primary"
  | "success"
  | "error"
  | "warning"
  | "info"
  | "light"
  | "dark";

interface BadgeProps {
  variant?: BadgeVariant; // Light or solid variant
  size?: BadgeSize; // Badge size
  color?: BadgeColor; // Badge color
  startIcon?: React.ReactNode; // Icon at the start
  endIcon?: React.ReactNode; // Icon at the end
  children: React.ReactNode; // Badge content
}

const Badge: React.FC<BadgeProps> = ({
  variant = "light",
  color = "primary",
  size = "md",
  startIcon,
  endIcon,
  children,
}) => {
  const baseStyles =
    "inline-flex items-center px-2.5 py-0.5 justify-center gap-1 rounded-full font-medium";

  // Define size styles
  const sizeStyles = {
    sm: "text-theme-xs", // Smaller padding and font size
    md: "text-sm", // Default padding and font size
  };

  // Define color styles for variants
  const variants = {
    light: {
      primary: "bg-blue-50 text-blue-600",
      success: "bg-emerald-50 text-emerald-600",
      error: "bg-rose-50 text-rose-600",
      warning: "bg-amber-50 text-amber-600",
      info: "bg-sky-50 text-sky-600",
      light: "bg-slate-100 text-slate-700",
      dark: "bg-slate-700 text-white",
    },
    solid: {
      primary: "bg-brand-500 text-white",
      success: "bg-emerald-500 text-white",
      error: "bg-rose-500 text-white",
      warning: "bg-amber-500 text-white",
      info: "bg-sky-500 text-white",
      light: "bg-slate-400 text-white",
      dark: "bg-slate-700 text-white",
    },
  };

  // Get styles based on size and color variant
  const sizeClass = sizeStyles[size];
  const colorStyles = variants[variant][color];

  return (
    <span className={`${baseStyles} ${sizeClass} ${colorStyles}`}>
      {startIcon && <span className="mr-1">{startIcon}</span>}
      {children}
      {endIcon && <span className="ml-1">{endIcon}</span>}
    </span>
  );
};

export default Badge;
