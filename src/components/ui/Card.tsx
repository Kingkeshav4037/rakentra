import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;

  variant?: "default" | "outlined" | "elevated" | "glass";

  padding?: "none" | "sm" | "md" | "lg" | "xl";

  hover?: boolean;

  animated?: boolean;
}

const paddingVariants = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
  xl: "p-10",
};

const styleVariants = {
  default:
    "bg-white border border-slate-200 shadow-sm",

  outlined:
    "bg-white border-2 border-slate-300",

  elevated:
    "bg-white shadow-xl border border-slate-100",

  glass:
    "backdrop-blur-xl bg-white/70 border border-white/30 shadow-lg",
};

const Card: React.FC<CardProps> = ({
  children,
  className,
  id,

  variant = "default",

  padding = "md",

  hover = true,

  animated = true,

  ...props
}) => {
  const classes = clsx(
    "rounded-2xl transition-all duration-300",

    styleVariants[variant],

    paddingVariants[padding],

    hover &&
      "hover:-translate-y-1 hover:shadow-2xl hover:border-blue-200",

    className
  );

  if (!animated) {
    return (
      <div
        id={id}
        className={classes}
        {...props}
      >
        {children}
      </div>
    );
  }

  return (
    <motion.div
      id={id}
      whileHover={
        hover
          ? {
              y: -6,
              transition: {
                duration: 0.25,
              },
            }
          : undefined
      }
      className={classes}
    >
      {children}
    </motion.div>
  );
};

export default Card;