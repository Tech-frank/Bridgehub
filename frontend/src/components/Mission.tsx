

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Mission() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    // Parallax effect for the image (moves slower as you scroll)
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 0.8]);

    return (
        <section ref={ref} className="py-26 mt-[100px] bg-white text-gray-600 overflow-hidden">
            <div className="container flex flex-col lg:flex-row items-center justify-between gap-8 w-full h-auto lg:h-[120vh]">
                
                {/* Parallax Image Section */}
                <motion.div
                    style={{ y, opacity }}
                    className="w-full lg:w-[60%] h-[60vh] lg:h-[170vh] bg-[url('/sni-12.jpg')] bg-cover bg-center"
                ></motion.div>

                {/* Text Section */}
                <motion.div
                    className="w-full lg:w-[40%] h-auto lg:h-[100vh] flex items-center justify-center px-6 lg:ml-8"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.3 }} // triggers each time it comes into view
                >
                    <div className="max-w-md text-center lg:text-left">
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-thin mb-2 text-gray-800">
                            Our Mission
                        </h3>
                        <h2 className="text-3xl sm:text-5xl lg:text-7xl font-normal mb-4 leading-tight">
                            More Than Just A Service. A Way Of Life
                        </h2>
                        <p className="text-gray-600 text-base sm:text-2xl leading-relaxed">
                            At Bridgehub, our mission is to empower individuals with special needs by providing them with access to technology, resources, and a supportive community. We strive to create an inclusive world where everyone has the opportunity to thrive, regardless of their abilities.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
