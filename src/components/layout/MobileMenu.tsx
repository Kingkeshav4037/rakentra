import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronRight } from "lucide-react";
import clsx from "clsx";

export interface MobileMenuItem {
  label: string;
  href: string;
}

export interface MobileMenuProps {
  open: boolean;

  onClose: () => void;

  items: MobileMenuItem[];

  logo?: React.ReactNode;
}

const backdropVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const drawerVariants = {
  hidden: {
    x: "100%",
  },
  visible: {
    x: 0,
  },
};

const MobileMenu: React.FC<MobileMenuProps> = ({
  open,
  onClose,
  items,
  logo,
}) => {
  // Prevent body scrolling
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (open) {
      window.addEventListener("keydown", handler);
    }

    return () => {
      window.removeEventListener("keydown", handler);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-black/50"
            onClick={onClose}
          />

          <motion.aside
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className="fixed right-0 top-0 z-50 flex h-screen w-80 max-w-[90vw] flex-col bg-white shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
              {logo ? (
                logo
              ) : (
                <Link
                  to="/"
                  onClick={onClose}
                  className="text-xl font-bold text-slate-900"
                >
                  Rakentra Works
                </Link>
              )}

              <button
                onClick={onClose}
                aria-label="Close menu"
                className="rounded-lg p-2 transition hover:bg-slate-100"
              >
                <X size={24} />
              </button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 overflow-y-auto px-6 py-6">
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item.href}>
                    <NavLink
                      to={item.href}
                      onClick={onClose}
                      className={({ isActive }) =>
                        clsx(
                          "flex items-center justify-between rounded-xl px-4 py-3 font-medium transition-all duration-200",
                          isActive
                            ? "bg-blue-600 text-white"
                            : "text-slate-700 hover:bg-slate-100"
                        )
                      }
                    >
                      <span>{item.label}</span>

                      <ChevronRight size={18} />
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Footer */}
            <div className="border-t border-slate-200 p-6">
              <Link
                to="/contact"
                onClick={onClose}
                className="block rounded-xl bg-blue-600 px-6 py-4 text-center font-semibold text-white transition hover:bg-blue-700"
              >
                Get a Quote
              </Link>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;