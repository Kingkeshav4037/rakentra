import { motion } from "framer-motion";
import { partners } from "@/data/partners";

const LogoCarousel = () => {
  // Duplicate the list for seamless looping
  const logos = [...partners, ...partners];

  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto mb-10 max-w-7xl px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
          Trusted by Industry Leaders
        </p>

        <h2 className="mt-3 text-3xl font-bold text-slate-900">
          Our Clients & Strategic Partners
        </h2>

        <p className="mt-4 text-slate-600">
          Collaborating with leading organizations to deliver
          innovative and sustainable construction solutions.
        </p>
      </div>

      <div className="relative overflow-hidden">
        {/* Left Fade */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-slate-50 to-transparent" />

        {/* Right Fade */}
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-slate-50 to-transparent" />

        <motion.div
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 28,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex w-max gap-10"
        >
          {logos.map((partner, index) => (
            <div
              key={`${partner.id}-${index}`}
              className="flex h-28 w-56 flex-shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {partner.logo ? (
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-16 w-auto object-contain grayscale transition duration-300 hover:grayscale-0"
                />
              ) : (
                <span className="text-center text-lg font-semibold text-slate-700">
                  {partner.name}
                </span>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LogoCarousel;