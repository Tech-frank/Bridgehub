import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button"; // shadcn button import (adjust path to your project)

/**
 * ServicesSection
 *
 * - React + Tailwind + shadcn + Framer Motion
 * - Full-width stacked panels, responsive
 * - Fade + slide animations that repeat on re-entry (respects prefers-reduced-motion)
 * - Accessible: keyboard focusable, semantic headings, aria labels
 *
 * Replace placeholder background URLs with your own images.
 */

const SERVICES = [
  {
    key: "design",
    title: "General Support",
    copy:
      "We offer comprehensive support services tailored to individuals with special needs, ensuring they receive the care and assistance they deserve.",
    img: "/sni-6.jpg", // replace with your image
    alt: "Hands and plans on a table showing architectural design",
  },
  {
    key: "build",
    title: "Personal Care Assistance",
    copy:
      "We provide personalized care assistance to individuals with special needs, ensuring their comfort and dignity.",
    img: "/sni-4.jpg",
    alt: "Wood framing of a building under construction",
  },
  {
    key: "furnish",
    title: "Transportation assistance",
    copy:
      "We provide transportation assistance to individuals with special needs, ensuring they can travel safely and comfortably.",
    img: "/sni-5.jpg",
    alt: "Minimal wooden dining table and chairs in natural light",
  },
  {
    key: "manage",
    title: "Therapy Services",
    copy:
      "We offer a range of therapy services to support individuals with special needs, promoting their well-being and development.",
    img: "/sni-3.png",
    alt: "A person smoothing a blanket on a bed, gentle care",
  },
];

export default function ServicesSection() {
  const shouldReduceMotion = useReducedMotion();

  const variants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      aria-label="Services — Design, Build, Furnish, Manage"
      className="bg-[#F9FAFB] text-[#4A4A4A]"
    >
      {SERVICES.map((s, idx) => (
        <motion.div
          key={s.key}
          // animate on viewport enter — repeats (once: false)
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={shouldReduceMotion ? {} : variants}
          transition={{
            duration: 0.7,
            ease: "easeOut",
            delay: idx * 0.06,
          }}
          // full-width stacked panels
          className="relative w-full overflow-hidden"
          style={{ minHeight: "60vh" }} // small screen baseline
        >
          {/* Background image with dark gradient overlay for contrast */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(17,24,39,0.45), rgba(17,24,39,0.35)), url('${s.img}')`,
            }}
            role="img"
            aria-label={s.alt}
          />

          {/* Accessible overlay content container */}
          <div className="relative z-10 container mx-auto px-6 py-24 md:py-28 lg:py-32">
            <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
              {/* Title column (left) */}
              <div className="w-full lg:w-1/2">
                <h2
                  id={`service-${s.key}-title`}
                  tabIndex={0}
                  className="text-white font-extralight leading-tight select-none text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
                  style={{ color: "#FFFFFF", WebkitTextStroke: "0.0px transparent" }}
                >
                  {s.title}
                </h2>
                {/* small decorative underline that uses accent */}
                <div className="mt-4 h-1 w-16 rounded-sm" style={{ background: "#3BB273" }} />
              </div>

              {/* Copy column (right). On small screens this sits below title */}
              <div className="w-full lg:w-1/2">
                <p
                  id={`service-${s.key}-desc`}
                  className="text-white max-w-xl leading-relaxed text-base sm:text-lg"
                >
                  {s.copy}
                </p>

                {/* Action, optional — keeps consistent tone (button uses brand primary) */}
                <div className="mt-6 flex gap-3">
                  <Button
                    asChild
                    className="shadow-sm"
                    style={{
                      backgroundColor: "#215C8E",
                      borderColor: "#215C8E",
                      color: "#fff",
                    }}
                  >
                    <a href={`#contact`} aria-label={`Get help about ${s.title}`}>
                      Get help
                    </a>
                  </Button>

                  <a
                    href={`#learn-${s.key}`}
                    className="inline-flex items-center rounded px-4 py-2 text-sm font-medium bg-white/10 text-white ring-1 ring-white/10"
                    style={{ color: "#FFFFFF" }}
                    aria-label={`Learn more about ${s.title}`}
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* subtle bottom gradient to separate stacked sections */}
          <div
            aria-hidden
            className="absolute left-0 right-0 bottom-0 h-8 pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, rgba(17,24,39,0.0) 0%, rgba(17,24,39,0.45) 100%)",
            }}
          />
        </motion.div>
      ))}
    </section>
  );
}
