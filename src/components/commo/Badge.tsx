import React from "react";
// Lightweight local replacement for `clsx` to avoid an external dependency
const clsx = (...args: any[]): string => {
  const classes: string[] = [];
  for (const arg of args) {
    if (!arg) continue;
    const type = typeof arg;
    if (type === "string" || type === "number") {
      classes.push(String(arg));
    } else if (Array.isArray(arg)) {
      const inner = clsx(...arg);
      if (inner) classes.push(inner);
    } else if (type === "object") {
      for (const key in arg) {
        if (Object.prototype.hasOwnProperty.call(arg, key) && (arg as any)[key]) {
          classes.push(key);
        }
      }
    }
  }
  return classes.join(" ");
};

export interface BadgeProps {
  children: React.ReactNode;

  variant?:
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | "outline";

  size?: "sm" | "md" | "lg";

  rounded?: boolean;

  className?: string;
}

const variants = {
  primary:
    "bg-blue-100 text-blue-700",

  secondary:
    "bg-slate-100 text-slate-700",

  success:
    "bg-green-100 text-green-700",

  warning:
    "bg-amber-100 text-amber-700",

  danger:
    "bg-red-100 text-red-700",

  outline:
    "border border-slate-300 text-slate-700 bg-white",
};

const sizes = {
  sm: "px-2 py-1 text-xs",

  md: "px-3 py-1.5 text-sm",

  lg: "px-4 py-2 text-base",
};

const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "primary",
  size = "md",
  rounded = true,
  className,
}) => {
  return (
    <span
      className={clsx(
        "inline-flex items-center justify-center",
        "font-semibold tracking-wide",
        "transition-colors duration-300",
        variants[variant],
        sizes[size],
        rounded ? "rounded-full" : "rounded-lg",
        className
      )}
    >
      {children}
    </span>
  );
};

export default Badge;