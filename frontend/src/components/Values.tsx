

"use client";
import { motion } from "framer-motion";

export default function Values() {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeSide = {
    hidden: { opacity: 0, x: 80 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section className="py-20 mt-[80px] bg-gray-100 text-gray-600 overflow-hidden">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row justify-between items-center gap-12 px-6">
        {/* Text Section */}
        <motion.div
          className="w-full lg:w-[50%]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1, ease: "easeOut" }}
          variants={fadeUp}
        >
          <h2 className="text-3xl lg:text-4xl font-thin mb-4 leading-tight">
            Our Core Values
          </h2>
          <p className="text-gray-500 font-normal text-lg lg:text-xl leading-relaxed mb-6">
            At Bridgehub, our core values guide everything we do.
          </p>
          <hr className="border-gray-300 w-[70%] mb-8" />

          <ul className="list-inside space-y-8 text-gray-700 text-base sm:text-lg font-light">
            {[
              {
                title: "Inclusivity",
                desc: "We believe in creating a world where everyone belongs, regardless of their abilities.",
              },
              {
                title: "Empowerment",
                desc: "We are dedicated to empowering individuals with special needs through technology and support.",
              },
             
              {
                title: "Community",
                desc: "We foster a supportive community that connects individuals, families, and caregivers.",
              },
              {
                title: "Compassion",
                desc: "We approach our work with empathy and understanding, prioritizing the needs of those we serve.",
              },
            ].map((value, index) => (
              <motion.li
                key={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                transition={{
                  duration: 1.2,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
              >
                <h3 className="font-medium text-xl mb-2">{value.title}</h3>
                <p>{value.desc}</p>
                {index < 4 && (
                  <hr className="border-gray-300 w-[70%] mt-4 opacity-70" />
                )}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="w-full lg:w-[50%] flex justify-center"
          variants={fadeSide}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <img
            src="/sni-2.png"
            alt="Values illustration"
            className="w-full h-auto rounded-2xl object-cover object-center shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}
