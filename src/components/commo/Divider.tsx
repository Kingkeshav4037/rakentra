import React from "react";
// avoid external dependency on `clsx`
const join = (...parts: Array<string | undefined>) => parts.filter(Boolean).join(" ");

export interface DividerProps {
  className?: string;
  orientation?: "horizontal" | "vertical";
  label?: string;
}

const Divider: React.FC<DividerProps> = ({
  className,
  orientation = "horizontal",
  label,
}) => {
  if (orientation === "vertical") {
    return (
      <div
        aria-hidden="true"
        className={join("w-px self-stretch bg-slate-200", className)}
      />
    );
  }

  if (label) {
    return (
      <div className={join("flex items-center gap-4", className)}>
        <div className="h-px flex-1 bg-slate-200" />

        <span className="text-sm text-slate-500 whitespace-nowrap">
          {label}
        </span>

        <div className="h-px flex-1 bg-slate-200" />
      </div>
    );
  }

  return (
    <hr className={join("border-0 h-px bg-slate-200", className)} />
  );
};

export default Divider;