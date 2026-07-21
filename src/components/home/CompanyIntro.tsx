import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Building2,
  HardHat,
  ShieldCheck,
  Leaf,
} from "lucide-react";
import { Link } from "react-router-dom";

const highlights = [
  {
    icon: <Building2 className="h-6 w-6" />,
    title: "650+ Projects Delivered",
  },
  {
    icon: <HardHat className="h-6 w-6" />,
    title: "350+ Construction Experts",
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "ISO Certified Processes",
  },
  {
    icon: <Leaf className="h-6 w-6" />,
    title: "Sustainable Construction",
  },
];

const CompanyIntro = () => {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            About Rakentra Works
          </span>

          <h2 className="mt-6 text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
            Building Tomorrow with
            <span className="text-blue-600"> Innovation & Quality</span>
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-600">
            Rakentra Works is a trusted construction company delivering
            residential, commercial, industrial, and infrastructure projects
            through engineering excellence, innovative technology, and
            sustainable practices.
          </p>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Every project is executed with a strong focus on quality,
            transparency, safety, and long-term value, helping our clients turn
            ambitious ideas into lasting landmarks.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="flex items-center gap-4 rounded-xl border border-slate-200 p-4 transition hover:border-blue-200 hover:shadow-md"
              >
                <div className="rounded-lg bg-blue-50 p-3 text-blue-600">
                  {item.icon}
                </div>

                <span className="font-semibold text-slate-800">
                  {item.title}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white transition hover:bg-blue-700"
            >
              Learn More
              <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <img
            src="/assets/images/about/company.jpg"
            alt="Rakentra Works Construction"
            className="w-full rounded-3xl shadow-2xl"
          />

          {/* Floating Card */}
          <div className="absolute -bottom-8 left-8 rounded-2xl bg-white p-6 shadow-xl">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-10 w-10 text-green-500" />

              <div>
                <h3 className="text-2xl font-bold text-slate-900">99%</h3>
                <p className="text-slate-600">Client Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Experience Card */}
          <div className="absolute -right-6 top-8 rounded-2xl bg-blue-600 p-6 text-white shadow-xl">
            <h3 className="text-3xl font-bold">18+</h3>
            <p className="mt-1">Years of Experience</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyIntro;