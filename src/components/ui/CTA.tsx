import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import clsx from "clsx";

export interface CTAProps {
  title: string;

  description: string;

  primaryText?: string;
  primaryLink?: string;

  secondaryText?: string;
  secondaryLink?: string;

  background?: "primary" | "dark" | "light";

  centered?: boolean;

  className?: string;

  children?: React.ReactNode;
}

const backgroundVariants = {
  primary:
    "bg-gradient-to-r from-blue-700 via-blue-600 to-sky-600 text-white",

  dark:
    "bg-slate-900 text-white",

  light:
    "bg-slate-100 text-slate-900",
};

const CTA: React.FC<CTAProps> = ({
  title,
  description,

  primaryText = "Get Started",
  primaryLink = "/contact",

  secondaryText,
  secondaryLink,

  background = "primary",

  centered = true,

  className,

  children,
}) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={clsx(
        "overflow-hidden rounded-3xl px-8 py-16 lg:px-16",
        backgroundVariants[background],
        className
      )}
    >
      <div
        className={clsx(
          "mx-auto max-w-5xl",
          centered && "text-center"
        )}
      >
        <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
          {title}
        </h2>

        <p
          className={clsx(
            "mt-6 text-lg leading-8",
            background === "light"
              ? "text-slate-600"
              : "text-white/90"
          )}
        >
          {description}
        </p>

        {children && (
          <div className="mt-8">
            {children}
          </div>
        )}

        <div
          className={clsx(
            "mt-10 flex flex-wrap gap-4",
            centered
              ? "justify-center"
              : "justify-start"
          )}
        >
          <Link
            to={primaryLink}
            className={clsx(
              "inline-flex items-center gap-2 rounded-xl px-6 py-4 font-semibold transition-all duration-300",
              background === "light"
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-white text-slate-900 hover:bg-slate-100"
            )}
          >
            {primaryText}

            <ArrowRight size={18} />
          </Link>

          {secondaryText && secondaryLink && (
            <Link
              to={secondaryLink}
              className={clsx(
                "inline-flex items-center gap-2 rounded-xl border px-6 py-4 font-semibold transition-all duration-300",
                background === "light"
                  ? "border-slate-300 hover:bg-slate-200"
                  : "border-white/30 text-white hover:bg-white/10"
              )}
            >
              <Phone size={18} />

              {secondaryText}
            </Link>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default CTA;