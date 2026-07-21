import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-900">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/assets/images/hero/construction-hero.jpg')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-900/70" />

      {/* Decorative Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/70 to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-24 lg:px-8">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex rounded-full bg-blue-600/20 px-4 py-2 text-sm font-semibold text-blue-300"
          >
            Building Excellence Since 2008
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-8 text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl"
          >
            Constructing the
            <span className="block text-blue-400">
              Future with Confidence
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 max-w-2xl text-lg leading-8 text-slate-300"
          >
            Rakentra Works delivers world-class commercial,
            residential, industrial, and infrastructure projects
            through engineering excellence, innovation, and
            sustainable construction practices.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="mt-10 flex flex-wrap gap-5"
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white transition hover:bg-blue-700"
            >
              Get a Free Quote

              <ArrowRight size={18} />
            </Link>

            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-7 py-4 font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              <PlayCircle size={20} />

              View Projects
            </Link>
          </motion.div>

          {/* Statistics */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4"
          >
            <div>
              <h3 className="text-4xl font-bold text-white">
                650+
              </h3>

              <p className="mt-2 text-slate-300">
                Projects Delivered
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-white">
                18+
              </h3>

              <p className="mt-2 text-slate-300">
                Years Experience
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-white">
                350+
              </h3>

              <p className="mt-2 text-slate-300">
                Engineers
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-white">
                99%
              </h3>

              <p className="mt-2 text-slate-300">
                Client Satisfaction
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          y: [0, 10, 0],
        }}
        transition={{
          delay: 1,
          repeat: Infinity,
          duration: 2,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-12 w-7 justify-center rounded-full border border-white/40">
          <div className="mt-2 h-3 w-1 rounded-full bg-white" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;