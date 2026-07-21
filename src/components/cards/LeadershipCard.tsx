import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

export interface LeadershipCardProps {
  name: string;
  role: string;
  image: string;

  biography: string;

  experience: string;

  specialization: string[];

  linkedin?: string;

  className?: string;
}

const LeadershipCard: React.FC<LeadershipCardProps> = ({
  name,
  role,
  image,
  biography,
  experience,
  specialization,
  linkedin,
  className,
}) => {
    function clsx(arg0: string, className: string | undefined): string | undefined {
      return className ? `${arg0} ${className}` : arg0;
    }

  return (
    <motion.article
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: 0.25,
      }}
      className={clsx(
        "group overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300",
        className
      )}
    >
      {/* Profile Image */}

      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-80 w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${name} LinkedIn`}
            className="absolute top-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-800 shadow-lg transition hover:bg-blue-700 hover:text-white"
          >
            <Linkedin size={18} />
          </a>
        )}
      </div>

      {/* Content */}

      <div className="p-7">
        <h3 className="text-2xl font-bold text-slate-900">
          {name}
        </h3>

        <p className="mt-2 font-medium text-blue-700">
          {role}
        </p>

        <p className="mt-5 line-clamp-4 leading-7 text-slate-600">
          {biography}
        </p>

        <div className="mt-6">
          <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Experience
          </h4>

          <p className="mt-1 text-slate-700">
            {experience}
          </p>
        </div>

        {specialization.length > 0 && (
          <div className="mt-6">
            <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Expertise
            </h4>

            <div className="mt-3 flex flex-wrap gap-2">
              {specialization.slice(0, 4).map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}

        <Link
          to="/about"
          className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-700 transition hover:text-blue-900"
        >
          Meet Our Team

          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </div>
    </motion.article>
  );
};

export default LeadershipCard;