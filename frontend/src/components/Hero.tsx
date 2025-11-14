// components/Hero.tsx
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const images = [
  "sni-12.jpg",
  "sni-2.png",
  "sni-3.png",
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  // Auto-play effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[100vh] overflow-hidden flex items-center justify-center  text-white">
      {/* Image Slider */}
      <div className="absolute inset-0">
        <AnimatePresence>
          <motion.img
            key={current}
            src={images[current]}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
            className=" w-full h-full object-center object-cover "
            alt="Hero background"
          />
        </AnimatePresence>

        {/* Subtle dark overlay for readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl px-6 text-left space-y-5">
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
          Empowering Every Ability with Technology & Care
        </h1>
        <p className="text-lg text-gray-200">
          Bridgehub connects people with special needs to support,
          accessibility, and inclusive innovation — creating a world where
          everyone belongs.
        </p>

        <a href="/request-support">
          <button className="mt-4 px-6 py-3 bg-white text-black font-medium rounded-full shadow-md hover:bg-gray-200 transition">
            Get Help
          </button>
        </a>
      </div>
    </section>
  );
}
