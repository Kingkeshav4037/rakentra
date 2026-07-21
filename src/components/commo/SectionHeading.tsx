import React from "react";
import { motion } from "framer-motion";
import Badge from "./Badge";

const clsx = (...classes: (string | boolean | undefined)[]): string => {
  return classes.filter(Boolean).join(" ");
};

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;

  align?: "left" | "center";

  maxWidth?: "sm" | "md" | "lg" | "xl" | "full";

  light?: boolean;

  className?: string;
}

const maxWidths = {
  sm: "max-w-xl",
  md: "max-w-2xl",
  lg: "max-w-3xl",
  xl: "max-w-4xl",
  full: "max-w-full",
};

const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  align = "center",
  maxWidth = "lg",
  light = false,
  className,
}) => {
  const centered = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55 }}
      className={clsx(
        maxWidths[maxWidth],
        centered ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <div className={centered ? "flex justify-center mb-4" : "mb-4"}>
          <Badge>{eyebrow}</Badge>
        </div>
      )}

      <h2
        className={clsx(
          "font-bold tracking-tight leading-tight",
          "text-3xl md:text-4xl lg:text-5xl",
          light ? "text-white" : "text-slate-900"
        )}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={clsx(
            "mt-6 text-lg leading-8",
            light ? "text-slate-300" : "text-slate-600"
          )}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;