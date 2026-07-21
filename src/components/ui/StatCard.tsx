import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import clsx from "clsx";

export interface StatCardProps {
  value: number;
  suffix?: string;
  prefix?: string;

  title: string;

  description?: string;

  icon?: React.ReactNode;

  duration?: number;

  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({
  value,
  suffix = "",
  prefix = "",
  title,
  description,
  icon,
  duration = 2.5,
  className,
}) => {
  return (
    <motion.div
      whileHover={{
        y: -6,
      }}
      transition={{
        duration: 0.25,
      }}
      className={clsx(
        "group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-xl",
        className
      )}
    >
      {icon && (
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
          {icon}
        </div>
      )}

      <h3 className="text-4xl font-bold text-slate-900">
        {prefix}

        <CountUp
          end={value}
          duration={duration}
          enableScrollSpy
          scrollSpyOnce
        />

        {suffix}
      </h3>

      <p className="mt-3 text-lg font-semibold text-slate-700">
        {title}
      </p>

      {description && (
        <p className="mt-3 leading-7 text-slate-600">
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default StatCard;