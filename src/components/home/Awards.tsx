import { motion } from "framer-motion";
import { Award, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import awards from "@/data/awards";

const Awards = () => {
  return (
    <section className="bg-slate-50 py-24">
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
            Awards & Recognition
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
            Excellence Recognized
            <span className="text-blue-600"> Across the Industry</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Our commitment to quality, innovation, safety, and sustainability
            has earned recognition from industry organizations, clients, and
            professional institutions.
          </p>
        </motion.div>

        {/* Awards Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {awards.map((award, index) => (
            <motion.article
              key={award.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: index * 0.1,
              }}
              className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                <Award size={30} />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                {award.title}
              </h3>

              <p className="mt-2 text-sm font-semibold text-blue-600">
                {award.year}
              </p>

              <p className="mt-5 leading-7 text-slate-600">
                {award.description}
              </p>

              {"organization" in award && award.organization && (
                <div className="mt-6 rounded-xl bg-slate-50 px-4 py-3">
                  <p className="text-sm text-slate-500">
                    Presented By
                  </p>

                  <p className="font-semibold text-slate-900">
                    {award.organization}
                  </p>
                </div>
              )}
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center"
        >
          <Link
            to="/about"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
          >
            View All Achievements

            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Awards;