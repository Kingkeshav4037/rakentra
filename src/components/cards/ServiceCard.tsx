import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
// Avoid external dependency on `clsx` to fix missing module error.
// Simple helper: merge base class string with optional className prop.

export interface ServiceCardProps {
  title: string;
  overview: string;
  icon?: React.ReactNode;
  image?: string;
  slug: string;

  features?: string[];

  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  overview,
  icon,
  image,
  slug,
  features = [],
  className,
}) => {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className={
        "group overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-sm transition-all hover:shadow-xl" +
        (className ? ` ${className}` : "")
      }
    >
      {/* Image */}

      {image && (
        <div className="relative h-56 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

          {icon && (
            <div className="absolute left-6 bottom-6 flex h-14 w-14 items-center justify-center rounded-xl bg-white shadow-lg">
              {icon}
            </div>
          )}
        </div>
      )}

      {!image && icon && (
        <div className="p-8 pb-0">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
            {icon}
          </div>
        </div>
      )}

      {/* Content */}

      <div className="p-8">
        <h3 className="text-2xl font-bold text-slate-900">
          {title}
        </h3>

        <p className="mt-4 leading-7 text-slate-600">
          {overview}
        </p>

        {features.length > 0 && (
          <ul className="mt-6 space-y-2">
            {features.slice(0, 3).map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2 text-sm text-slate-600"
              >
                <span className="mt-2 h-2 w-2 rounded-full bg-blue-700" />

                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}

        <Link
          to={`/services/${slug}`}
          className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-700 transition-colors hover:text-blue-900"
        >
          Learn More

          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </div>
    </motion.article>
  );
};

export default ServiceCard;