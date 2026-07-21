import { motion } from "framer-motion";
import {
  ArrowRight,
  Leaf,
  Recycle,
  Trees,
  Building2,
} from "lucide-react";
import { Link } from "react-router-dom";

const initiatives = [
  {
    icon: <Leaf className="h-6 w-6" />,
    title: "Green Building",
    description:
      "Designing environmentally responsible and resource-efficient buildings.",
  },
  {
    icon: <Recycle className="h-6 w-6" />,
    title: "Waste Reduction",
    description:
      "Reducing construction waste through recycling and efficient material management.",
  },
  {
    icon: <Trees className="h-6 w-6" />,
    title: "Carbon Reduction",
    description:
      "Lowering emissions using sustainable construction methods and energy-efficient technologies.",
  },
  {
    icon: <Building2 className="h-6 w-6" />,
    title: "Smart Infrastructure",
    description:
      "Building future-ready infrastructure that balances performance with environmental responsibility.",
  },
];

const Sustainability = () => {
  return (
    <section className="bg-slate-900 py-24 text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="rounded-full bg-green-500/20 px-4 py-2 text-sm font-semibold text-green-300">
            Sustainability
          </span>

          <h2 className="mt-6 text-4xl font-bold leading-tight lg:text-5xl">
            Building a Better Future Through
            <span className="text-green-400">
              {" "}
              Sustainable Construction
            </span>
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-300">
            Sustainability is embedded in every project we undertake.
            From responsible sourcing of materials to energy-efficient
            engineering, Rakentra Works strives to create lasting value
            for clients, communities, and the environment.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {initiatives.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-700 bg-slate-800 p-5 transition hover:border-green-500"
              >
                <div className="mb-4 inline-flex rounded-xl bg-green-500/10 p-3 text-green-400">
                  {item.icon}
                </div>

                <h3 className="text-lg font-semibold">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <Link
            to="/sustainability"
            className="mt-10 inline-flex items-center gap-2 rounded-xl bg-green-500 px-7 py-4 font-semibold text-slate-900 transition hover:bg-green-400"
          >
            Learn More

            <ArrowRight size={18} />
          </Link>
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
            src="/assets/images/sustainability/green-building.jpg"
            alt="Sustainable Construction"
            className="w-full rounded-3xl shadow-2xl"
          />

          {/* Floating Statistics */}
          <div className="absolute -bottom-8 left-8 rounded-2xl bg-white p-6 text-slate-900 shadow-xl">
            <h3 className="text-3xl font-bold text-green-600">
              40%
            </h3>

            <p className="mt-2 font-medium">
              Reduction in Material Waste
            </p>
          </div>

          <div className="absolute -right-6 top-10 rounded-2xl bg-green-500 p-6 text-slate-900 shadow-xl">
            <h3 className="text-3xl font-bold">
              100%
            </h3>

            <p className="mt-2 font-medium">
              Eco-Conscious Projects
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Sustainability;