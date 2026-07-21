import React, { forwardRef } from "react";
import { motion } from "framer-motion";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger";
  size?: "sm" | "md" | "lg" | "xl";
  loading?: boolean;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const variantClasses = {
  primary:
    "bg-blue-700 text-white hover:bg-blue-800 border border-blue-700",

  secondary:
    "bg-gray-900 text-white hover:bg-black border border-gray-900",

  outline:
    "border border-gray-300 bg-white text-gray-900 hover:bg-gray-100",

  ghost:
    "bg-transparent text-gray-800 hover:bg-gray-100",

  danger:
    "bg-red-600 text-white hover:bg-red-700 border border-red-600",
};

const sizeClasses = {
  sm: "h-9 px-3 text-sm",

  md: "h-11 px-5 text-base",

  lg: "h-12 px-6 text-lg",

  xl: "h-14 px-8 text-xl",
};

const Spinner = () => (
  <svg
    className="animate-spin h-5 w-5"
    viewBox="0 0 24 24"
    fill="none"
  >
    <circle
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="3"
      opacity=".25"
    />

    <path
      fill="currentColor"
      d="M22 12a10 10 0 00-10-10v3a7 7 0 017 7h3z"
    />
  </svg>
);

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      loading = false,
      disabled = false,
      fullWidth = false,
      leftIcon,
      rightIcon,
      className = "",
      type = "button",
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading;

    return (
      <motion.button
        ref={ref}
        whileHover={{
          scale: isDisabled ? 1 : 1.03,
        }}
        whileTap={{
          scale: isDisabled ? 1 : 0.98,
        }}
        transition={{
          duration: 0.2,
        }}
        type={type}
        disabled={isDisabled}
        className={`
          inline-flex
          items-center
          justify-center
          gap-2
          rounded-lg
          font-semibold
          transition-all
          duration-300
          focus:outline-none
          focus:ring-2
          focus:ring-blue-500
          disabled:opacity-60
          disabled:cursor-not-allowed
          ${variantClasses[variant]}
          ${sizeClasses[size]}
          ${fullWidth ? "w-full" : ""}
          ${className}
        `}
        {...(Object.fromEntries(
          Object.entries(props).filter(([key]) => !key.startsWith("onDrag"))
        ) as any)}
      >
        {loading ? (
          <>
            <Spinner />
            Loading...
          </>
        ) : (
          <>
            {leftIcon}

            <span>{children}</span>

            {rightIcon}
          </>
        )}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export default Button;