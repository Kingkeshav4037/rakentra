import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

export interface SectionWrapperProps {
  children: React.ReactNode;

  id?: string;

  className?: string;

  containerClassName?: string;

  background?: "white" | "light" | "dark" | "primary" | "transparent";

  spacing?: "none" | "sm" | "md" | "lg" | "xl";

  animate?: boolean;

  fullWidth?: boolean;

  as?: React.ElementType;
}

const spacingClasses = {
  none: "",
  sm: "py-10",
  md: "py-16",
  lg: "py-24",
  xl: "py-32",
};

const backgroundClasses = {
  white: "bg-white",
  light: "bg-slate-50",
  dark: "bg-slate-900 text-white",
  primary: "bg-blue-600 text-white",
  transparent: "bg-transparent",
};

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  children,

  id,

  className,

  containerClassName,

  background = "white",

  spacing = "lg",

  animate = true,

  fullWidth = false,

  as = "section",
}) => {
  const Component = animate ? (motion[as as keyof typeof motion] as React.ElementType) : (as as React.ElementType);

  const content = (
    <div
      className={clsx(
        !fullWidth && "mx-auto max-w-7xl px-6 lg:px-8",
        containerClassName
      )}
    >
      {children}
    </div>
  );

  if (!animate) {
    const HTMLTag = as as React.ElementType;

    return React.createElement(
      HTMLTag,
      {
        id,
        className: clsx(
          spacingClasses[spacing],
          backgroundClasses[background],
          className
        ),
      },
      content
    );
  }

  return (
    <Component
      id={id}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.5,
      }}
      className={clsx(
        spacingClasses[spacing],
        backgroundClasses[background],
        className
      )}
    >
      {content}
    </Component>
  );
};

export default SectionWrapper;