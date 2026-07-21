import React from "react";

export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  fluid?: boolean;
}

const cx = (...classes: (string | false | undefined)[]) =>
  classes.filter(Boolean).join(" ");

const Container: React.FC<ContainerProps> = ({
  children,
  className,
  as: Component = "div",
  fluid = false,
}) => {
  return (
    <Component
      className={cx(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        !fluid && "max-w-7xl",
        className
      )}
    >
      {children}
    </Component>
  );
};

export default Container;