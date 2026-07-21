import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";

export interface PartnerCardProps {
  name: string;
  logo: string;

  description: string;

  category: string;

  website?: string;

  className?: string;
}

const PartnerCard: React.FC<PartnerCardProps> = ({
  name,
  logo,
  description,
  category,
  website,
  className,
}) => {
    function clsx(arg0: string, className: string | undefined): string {
      return [arg0, className].filter(Boolean).join(" ");
    }

  return (
    <motion.article
      whileHover={{
        y: -6,
      }}
      transition={{
        duration: 0.25,
      }}
      className={clsx(
        "group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-xl",
        className
      )}
    >
      {/* Logo */}

      <div className="flex h-48 items-center justify-center border-b border-slate-100 bg-slate-50 p-8">
        <img
          src={logo}
          alt={`${name} logo`}
          className="max-h-24 max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}

      <div className="flex flex-1 flex-col p-6">
        <span className="inline-flex w-fit rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
          {category}
        </span>

        <h3 className="mt-4 text-xl font-bold text-slate-900">
          {name}
        </h3>

        <p className="mt-4 flex-1 leading-7 text-slate-600">
          {description}
        </p>

        <div className="mt-8 flex items-center justify-between">
          {website ? (
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-semibold text-blue-700 transition-colors hover:text-blue-900"
              aria-label={`Visit ${name} website`}
            >
              Visit Website

              <ExternalLink size={17} />
            </a>
          ) : (
            <span className="text-sm text-slate-400">
              Strategic Partner
            </span>
          )}

          <ArrowRight
            size={18}
            className="text-slate-400 transition-transform duration-300 group-hover:translate-x-1"
          />
        </div>
      </div>
    </motion.article>
  );
};

export default PartnerCard;