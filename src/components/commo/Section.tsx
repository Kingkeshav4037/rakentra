import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import Container from "./Container";

export interface SectionProps {
  children: React.ReactNode;

  className?: string;

  containerClassName?: string;

  background?:
    | "white"
    | "gray"
    | "dark"
    | "transparent";

  id?: string;

  fullWidth?: boolean;
}

const backgrounds = {
  white: "bg-white",

  gray: "bg-gray-50",

  dark: "bg-slate-900 text-white",

  transparent: "bg-transparent",
};

const Section: React.FC<SectionProps> = ({
  children,
  className,
  containerClassName,
  background = "white",
  id,
  fullWidth = false,
}) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
      }}
      className={clsx(
        "py-16 md:py-24",
        backgrounds[background],
        className
      )}
    >
      {fullWidth ? (
        children
      ) : (
        <Container className={containerClassName}>
          {children}
        </Container>
      )}
    </motion.section>
  );
};

export default Section;