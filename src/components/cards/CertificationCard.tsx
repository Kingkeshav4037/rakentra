import React from "react";
import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";

export interface CertificationCardProps {
  title: string;
  issuedBy: string;
  description: string;
  image?: string;
  valid?: boolean;
  className?: string;
}

const CertificationCard: React.FC<CertificationCardProps> = ({
  title,
  issuedBy,
  description,
  image,
  valid = true,
  className,
}) => {
  function clsx(arg0: string, arg1: string): string | undefined {
    if (arg0 && arg1) {
      return `${arg0} ${arg1}`;
    }
    if (arg0) {
      return arg0;
    }
    if (arg1) {
      return arg1;
    }
    return undefined;
  }

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className={`group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-xl ${className ?? ""}`}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          {image ? (
            <img
              src={image}
              alt={title}
              className="h-16 w-16 rounded-lg object-contain"
            />
          ) : (
            <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-green-50">
              <BadgeCheck className="h-8 w-8 text-green-600" />
            </div>
          )}

          <div>
            <h3 className="text-lg font-bold text-slate-900">
              {title}
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              {issuedBy}
            </p>
          </div>
        </div>

        <span
          className={clsx(
            "rounded-full px-3 py-1 text-xs font-semibold",
            valid
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          )}
        >
          {valid ? "Valid" : "Expired"}
        </span>
      </div>

      <p className="mt-6 leading-7 text-slate-600">
        {description}
      </p>
    </motion.article>
  );
};

export default CertificationCard;