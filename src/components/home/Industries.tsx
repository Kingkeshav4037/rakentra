import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import industries from "@/data/industries";

const Industries = () => {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Industries We Serve
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
            Construction Solutions Across
            <span className="text-blue-600"> Every Sector</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            From residential developments to large-scale infrastructure,
            Rakentra Works delivers reliable engineering and construction
            services tailored to every industry.
          </p>
        </motion.div>

        {/* Industry Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {industries.map((industry, index) => (
            <motion.article
              key={industry.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: index * 0.1,
              }}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />

                <div className="absolute bottom-4 left-4">
                  <span className="rounded-lg bg-blue-600 px-3 py-2 text-sm font-semibold text-white">
                    {industry.title}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="leading-7 text-slate-600">
                  {industry.shortDescription}
                </p>

                {/* Statistics */}
                <div className="mt-6 grid grid-cols-3 gap-3 rounded-xl bg-slate-50 p-4">
                  <div className="text-center">
                    <h4 className="font-bold text-blue-600">
                      {industry.statistics.projects}
                    </h4>

                    <p className="mt-1 text-xs text-slate-500">
                      Projects
                    </p>
                  </div>

                  <div className="text-center">
                    <h4 className="font-bold text-blue-600">
                      {industry.statistics.experience}
                    </h4>

                    <p className="mt-1 text-xs text-slate-500">
                      Experience
                    </p>
                  </div>

                  <div className="text-center">
                    <h4 className="font-bold text-blue-600">
                      {industry.statistics.satisfaction}
                    </h4>

                    <p className="mt-1 text-xs text-slate-500">
                      Satisfaction
                    </p>
                  </div>
                </div>

                {/* Highlights */}
                <ul className="mt-6 space-y-2">
                  {industry.highlights.slice(0, 3).map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-center gap-2 text-sm text-slate-600"
                    >
                      <span className="h-2 w-2 rounded-full bg-blue-600" />

                      {highlight}
                    </li>
                  ))}
                </ul>

                <Link
                  to={`/industries/${industry.slug}`}
                  className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-600 transition hover:gap-3"
                >
                  Learn More

                  <ArrowRight size={18} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;