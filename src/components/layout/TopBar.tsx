import React from "react";
import { motion } from "framer-motion";

import {
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";

import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";
const socialLinks = [
  {
    icon: FaFacebook,
    href: "https://facebook.com",
    label: "Facebook",
  },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com",
    label: "LinkedIn",
  },
  {
    icon: FaXTwitter,
    href: "https://twitter.com",
    label: "Twitter",
  },
  {
    icon: FaInstagram,
    href: "https://instagram.com",
    label: "Instagram",
  },
];

const TopBar: React.FC = () => {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="hidden lg:block bg-slate-900 text-slate-300"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        {/* Left */}

        <div className="flex items-center gap-6 text-sm">
          <a
            href="tel:+358123456789"
            className="flex items-center gap-2 transition hover:text-white"
          >
            <Phone size={15} />
            +358 123 456 789
          </a>

          <a
            href="mailto:info@rakentraworks.com"
            className="flex items-center gap-2 transition hover:text-white"
          >
            <Mail size={15} />
            info@rakentraworks.com
          </a>

          <div className="flex items-center gap-2">
            <MapPin size={15} />
            Helsinki, Finland
          </div>
        </div>

        {/* Right */}

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-sm">
            <Clock size={15} />
            Mon – Fri : 08:00 – 18:00
          </div>

          <div className="flex items-center gap-3">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="rounded-full p-1.5 transition hover:bg-white/10 hover:text-white"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TopBar;