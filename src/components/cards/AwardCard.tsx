import React from "react";
import { motion } from "framer-motion";
import { Award, ArrowRight } from "lucide-react";

export interface AwardCardProps {
  title: string;
  organization: string;
  year: string | number;
  description: string;
  image?: string;
  className?: string;
}

const AwardCard: React.FC<AwardCardProps> = ({
  title,
  organization,
  year,
  description,
  image,
  className,
}) => {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className={`group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-xl ${className ?? ""}`}
    >
      {image ? (
        <img
          src={image}
          alt={title}
          className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div className="flex h-56 items-center justify-center bg-amber-50">
          <Award className="h-20 w-20 text-amber-500" />
        </div>
      )}

      <div className="p-6">
        <span className="inline-flex rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
          {year}
        </span>

        <h3 className="mt-4 text-xl font-bold text-slate-900">
          {title}
        </h3>

        <p className="mt-2 font-medium text-blue-700">
          {organization}
        </p>

        <p className="mt-4 leading-7 text-slate-600">
          {description}
        </p>

        <div className="mt-6 flex items-center gap-2 font-semibold text-blue-700">
          Learn More

          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </div>
      </div>
    </motion.article>
  );
};

export default AwardCard;