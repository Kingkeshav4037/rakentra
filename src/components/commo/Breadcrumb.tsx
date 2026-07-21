import React from "react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

const ChevronRight: React.FC<{
  size?: number;
  className?: string;
}> = ({ size = 16, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  className,
}) => {
    function clsx(_className: string | undefined): string | undefined {
        throw new Error("Function not implemented.");
    }

  return (
    <nav
      aria-label="Breadcrumb"
      className={clsx(className)}
    >
      <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
        {items.map((item, index) => {
          const last = index === items.length - 1;

          return (
            <li
              key={`${item.label}-${index}`}
              className="flex items-center gap-2"
            >
              {last ? (
                <span
                  className="font-medium text-slate-900"
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                <a
                  href={item.href}
                  className="transition-colors hover:text-blue-700"
                >
                  {item.label}
                </a>
              )}

              {!last && (
                <ChevronRight
                  size={16}
                  className="text-slate-400"
                />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;