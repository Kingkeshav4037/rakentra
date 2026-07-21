import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

export interface StatisticCardProps {
  value: number;
  suffix?: string;
  prefix?: string;

  title: string;
  description?: string;

  icon?: React.ReactNode;

  duration?: number;

  className?: string;
}

const StatisticCard: React.FC<StatisticCardProps> = ({
  value,
  suffix = "",
  prefix = "",
  title,
  description,
  icon,
  duration = 2,
  className,
}) => {
  function clsx(arg0: string, className: string | undefined): string {
    return [arg0, className].filter(Boolean).join(" ");
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{
        y: -6,
        transition: {
          duration: 0.2,
        },
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
      }}
      className={clsx(
        "group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl",
        className
      )}
    >
      {icon && (
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-blue-700 transition-colors group-hover:bg-blue-700 group-hover:text-white">
          {icon}
        </div>
      )}

      <div className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
        {prefix}

        <CountUp
          end={value}
          duration={duration}
          enableScrollSpy
          scrollSpyOnce
        />

        {suffix}
      </div>

      <h3 className="mt-4 text-lg font-semibold text-slate-900">
        {title}
      </h3>

      {description && (
        <p className="mt-3 leading-7 text-slate-600">
          {description}
        </p>
      )}
    </motion.article>
  );
};

export default StatisticCard;