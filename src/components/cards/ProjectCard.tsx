import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

export interface ProjectCardProps {
  slug: string;

  title: string;

  overview: string;

  heroImage: string;

  location: string;

  completionDate: string;

  category: string;

  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  slug,
  title,
  overview,
  heroImage,
  location,
  completionDate,
  category,
  className,
}) => {
    function clsx(base: string, className?: string): string {
      return className ? `${base} ${className}` : base;
    }

  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className={clsx(
        "group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-xl transition-all",
        className
      )}
    >
      <div className="relative overflow-hidden h-72">
        <img
          src={heroImage}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        <span className="absolute top-5 left-5 rounded-full bg-white/90 px-4 py-1 text-sm font-semibold text-slate-900 backdrop-blur">
          {category}
        </span>
      </div>

      <div className="p-7">
        <h3 className="text-2xl font-bold text-slate-900">
          {title}
        </h3>

        <div className="mt-4 flex flex-wrap gap-5 text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <MapPin size={16} />
            {location}
          </div>

          <div className="flex items-center gap-2">
            <Calendar size={16} />
            {completionDate}
          </div>
        </div>

        <p className="mt-5 leading-7 text-slate-600">
          {overview}
        </p>

        <Link
          to={`/projects/${slug}`}
          className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-700 transition hover:text-blue-900"
        >
          View Project

          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </div>
    </motion.article>
  );
};

export default ProjectCard;