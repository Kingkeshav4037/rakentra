import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Calendar,
  Clock,
  User,
  ArrowRight,
  Tag,
} from "lucide-react";

export interface BlogCardProps {
  slug: string;

  title: string;

  excerpt: string;

  coverImage: string;

  category: string;

  author: string;

  publishedAt: string;

  readingTime: string;

  featured?: boolean;

  tags?: string[];

  className?: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  slug,
  title,
  excerpt,
  coverImage,
  category,
  author,
  publishedAt,
  readingTime,
  featured = false,
  tags = [],
  className,
}) => {
  function clsx(arg0: string, className: string | undefined): string {
    return className ? `${arg0} ${className}`.trim() : arg0;
  }

  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className={clsx(
        "group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-xl",
        className
      )}
    >
      {/* Cover */}

      <div className="relative overflow-hidden">
        <img
          src={coverImage}
          alt={title}
          className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        <span className="absolute left-5 top-5 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
          {category}
        </span>

        {featured && (
          <span className="absolute right-5 top-5 rounded-full bg-amber-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-slate-900">
            Featured
          </span>
        )}
      </div>

      {/* Content */}

      <div className="p-6">
        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
          <span className="inline-flex items-center gap-1">
            <User size={15} />
            {author}
          </span>

          <span className="inline-flex items-center gap-1">
            <Calendar size={15} />
            {publishedAt}
          </span>

          <span className="inline-flex items-center gap-1">
            <Clock size={15} />
            {readingTime}
          </span>
        </div>

        <Link to={`/blog/${slug}`}>
          <h3 className="mt-5 text-2xl font-bold leading-tight text-slate-900 transition-colors group-hover:text-blue-700">
            {title}
          </h3>
        </Link>

        <p className="mt-4 line-clamp-3 leading-7 text-slate-600">
          {excerpt}
        </p>

        {tags.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
              >
                <Tag size={12} />
                {tag}
              </span>
            ))}
          </div>
        )}

        <Link
          to={`/blog/${slug}`}
          className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-700 transition hover:text-blue-900"
        >
          Read Article

          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </div>
    </motion.article>
  );
};

export default BlogCard;