// StackingSection.tsx
// import React, { useRef } from "react";
// import {
//   motion,
//   useScroll,
//   useTransform,
//   useSpring,
//   MotionValue,
// } from "framer-motion";

// const FEATURES = [
//   {
//     title: "Opportunity",
//     subtitle: "CORE",
//     description:
//       "We build with care. That means local materials, fair partnerships, and designs that honor local environments and traditions.",
//   },
//   {
//     title: "Responsibility",
//     subtitle: "CORE",
//     description:
//       "Every choice is made for the long-term. We design with empathy to foster sustainable, inclusive communities.",
//   },
//   {
//     title: "Sustainability",
//     subtitle: "CORE",
//     description:
//       "Our materials and decisions reflect our commitment to minimizing environmental impact and promoting balance.",
//   },
// ];

// export default function StackingSection(): React.ReactElement {
//   const ref = useRef<HTMLElement | null>(null);

//   // Track scroll progress for the section relative to viewport
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start start", "end end"],
//   });

//   // smooth the global progress
//   const progress = useSpring(scrollYProgress, { damping: 30, stiffness: 120 });

//   // helper to build per-card motion values
//   function useCardMotion(i: number, total: number) {
//     const step = 1 / total;
//     const start = Math.max(0, i * step - step * 0.3); // slightly earlier
//     const end = Math.min(1, (i + 1) * step + step * 0.3); // slightly later

//     // local progress mapped to [0..1]
//     const local: MotionValue<number> = useTransform(progress, [start, end], [0, 1], {
//       clamp: true,
//     });

//     // visual transforms
//     const rawY = useTransform(local, [0, 0.3, 1], [120, 40, -18]);
//     const y = useSpring(rawY, { damping: 30, stiffness: 200 });

//     const rawScale = useTransform(local, [0, 1], [0.96, 1]);
//     const scale = useSpring(rawScale, { damping: 30, stiffness: 200 });

//     const rawOpacity = useTransform(local, [0, 1, 0.6, 1], [0, 1, 1, 1]);
//     const opacity = useSpring(rawOpacity, { damping: 10, stiffness: 100 });

//     // compute numeric z-index so later cards appear above earlier ones
//     // +100 to avoid negative or low stacking conflicts
//     const computedZ = 100 + i;

//     return { y, scale, opacity, computedZ, local };
//   }

//   return (
//     <section
//       ref={ref}
//       className="relative w-full bg-white text-gray-900"
//       aria-labelledby="stacking-heading"
//       style={{ minHeight: "260vh" }} // enough scroll distance for quick multi-card stacking
//     >
//       <div className="sticky top-0 h-screen flex flex-col lg:flex-row items-stretch">
//         {/* LEFT: cards area */}
//         <div className="flex-1 flex items-center justify-center px-6 lg:px-12">
//           <div className="relative w-full max-w-2xl h-[80vh]">
//             {FEATURES.map((f, i) => {
//               const { y, scale, opacity, computedZ } = useCardMotion(i, FEATURES.length);

//               return (
//                 <motion.article
//                   key={f.title}
//                   // we set transform origin so scale feels natural
//                   style={{
//                     y,
//                     scale,
//                     opacity,
//                     zIndex: computedZ,
//                   }}
//                   className="absolute left-0 right-0 mx-auto p-8 bg-white/95 border h-[300px] border-gray-100 rounded-2xl shadow-lg max-w-2xl"
//                   role="group"
//                   aria-roledescription="feature card"
//                 >
//                   <div className="text-xs font-semibold text-gray-500 tracking-widest">
//                     {f.subtitle}
//                   </div>
//                   <h3 className="mt-3 text-2xl lg:text-3xl font-semibold text-gray-900">
//                     {f.title}
//                   </h3>
//                   <p className="mt-4 text-gray-600 leading-relaxed">{f.description}</p>
//                 </motion.article>
//               );
//             })}
//           </div>
//         </div>

//         {/* RIGHT: sticky image + overlay text */}
//         <div className="flex-1 relative h-screen">
//           <div className="sticky top-0 h-screen">
//             {/* background image */}
//             <div
//               className="absolute inset-0 bg-center bg-cover"
//               style={{
//                 backgroundImage: "url('/images/sample-right.jpg')", // replace path
//               }}
//               aria-hidden="true"
//             />

//             {/* gradient to ensure text contrast */}
//             <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

//             {/* overlay text always visible */}
//             <div className="absolute bottom-12 left-8 lg:left-12 z-50 max-w-md text-white">
//               <h2 id="stacking-heading" className="text-5xl lg:text-6xl font-light">
//                 CORE
//               </h2>
//               <p className="mt-4 text-lg leading-relaxed">
//                 We honour local culture, support everyday life with intelligent design, and foster
//                 inclusive communities that feel modern, safe, and connected.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* small accessibility hint */}
//       <div className="sr-only" aria-hidden={false}>
//         Scrolling through this section highlights features on the left while the image on the
//         right remains fixed.
//       </div>

//       <style>{`
//         /* respect reduced motion */
//         @media (prefers-reduced-motion: reduce) {
//           * { animation: none !important; transition: none !important; }
//         }
//       `}</style>
//     </section>
//   );
// }
