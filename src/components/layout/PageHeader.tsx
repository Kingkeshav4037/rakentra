import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import clsx from "clsx";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface PageHeaderProps {
  title: string;

  subtitle?: string;

  backgroundImage?: string;

  breadcrumbs?: BreadcrumbItem[];

  height?: "sm" | "md" | "lg";

  overlay?: boolean;

  centered?: boolean;

  children?: React.ReactNode;

  className?: string;
}

const heightVariants = {
  sm: "min-h-[300px]",
  md: "min-h-[420px]",
  lg: "min-h-[560px]",
};

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  backgroundImage,
  breadcrumbs = [],

  height = "md",

  overlay = true,

  centered = true,

  children,

  className,
}) => {
  return (
    <header
      className={clsx(
        "relative flex items-center overflow-hidden",
        heightVariants[height],
        className
      )}
      style={
        backgroundImage
          ? {
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : undefined
      }
    >
      {backgroundImage && overlay && (
        <div className="absolute inset-0 bg-slate-900/65" />
      )}

      {!backgroundImage && (
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-700 to-sky-600" />
      )}

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
        {breadcrumbs.length > 0 && (
          <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className={clsx(
              "mb-6 flex flex-wrap items-center gap-2 text-sm",
              centered ? "justify-center" : "justify-start"
            )}
          >
            {breadcrumbs.map((item, index) => (
              <React.Fragment key={`${item.label}-${index}`}>
                {item.href ? (
                  <Link
                    to={item.href}
                    className="text-white/80 transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="font-medium text-white">
                    {item.label}
                  </span>
                )}

                {index < breadcrumbs.length - 1 && (
                  <ChevronRight
                    size={16}
                    className="text-white/60"
                  />
                )}
              </React.Fragment>
            ))}
          </motion.nav>
        )}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className={clsx(
            centered ? "text-center" : "text-left"
          )}
        >
          <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            {title}
          </h1>

          {subtitle && (
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/90">
              {subtitle}
            </p>
          )}

          {children && (
            <div className="mt-8">
              {children}
            </div>
          )}
        </motion.div>
      </div>
    </header>
  );
};

export default PageHeader;