import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  MapPin,
  Briefcase,
  Clock3,
  DollarSign,
  ArrowRight,
  Star,
} from "lucide-react";

export interface JobCardProps {
  slug: string;

  title: string;

  department: string;

  location: string;

  employmentType: string;

  workMode: string;

  experience: string;

  salary?: string;

  deadline?: string;

  featured?: boolean;

  summary: string;

  className?: string;
}

const JobCard: React.FC<JobCardProps> = ({
  slug,
  title,
  department,
  location,
  employmentType,
  workMode,
  experience,
  salary,
  deadline,
  featured = false,
  summary,
  className,
}) => {
  function clsx(arg0: string, className: string | undefined): string {
    return [arg0, className].filter(Boolean).join(" ");
  }

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className={clsx(
        "group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-xl",
        className
      )}
    >
      {/* Header */}

      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
            {department}
          </span>

          <h3 className="mt-4 text-2xl font-bold text-slate-900 transition-colors group-hover:text-blue-700">
            {title}
          </h3>
        </div>

        {featured && (
          <div className="rounded-full bg-amber-100 p-2 text-amber-600">
            <Star size={18} fill="currentColor" />
          </div>
        )}
      </div>

      {/* Description */}

      <p className="mt-5 flex-1 leading-7 text-slate-600">
        {summary}
      </p>

      {/* Job Info */}

      <div className="mt-6 space-y-3 border-t border-slate-100 pt-6 text-sm text-slate-600">
        <div className="flex items-center gap-2">
          <MapPin size={17} />
          <span>{location}</span>
        </div>

        <div className="flex items-center gap-2">
          <Briefcase size={17} />
          <span>
            {employmentType} • {workMode}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Clock3 size={17} />
          <span>{experience}</span>
        </div>

        {salary && (
          <div className="flex items-center gap-2">
            <DollarSign size={17} />
            <span>{salary}</span>
          </div>
        )}

        {deadline && (
          <div className="text-sm font-medium text-red-600">
            Apply before {deadline}
          </div>
        )}
      </div>

      {/* CTA */}

      <Link
        to={`/careers/${slug}`}
        className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-700 transition hover:text-blue-900"
      >
        Apply Now

        <ArrowRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </Link>
    </motion.article>
  );
};

export default JobCard;