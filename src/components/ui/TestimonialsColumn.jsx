"use client";
import React from "react";
import { motion } from "motion/react";

export const TestimonialsColumn = ({ className = "", testimonials, duration = 10 }) => {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[0, 1].map((setIndex) => (
          <React.Fragment key={setIndex}>
            {testimonials.map(({ text, image, name, role }, i) => (
              <div
                key={`${setIndex}-${i}`}
                className="w-full max-w-xs rounded-3xl border border-black/10 bg-white/70 p-8 shadow-xl shadow-black/5 backdrop-blur"
              >
                <p className="text-sm leading-6 text-black/70">"{text}"</p>
                <div className="mt-5 flex items-center gap-3">
                  <img
                    src={image}
                    alt={name}
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold leading-5 tracking-tight text-black">
                      {name}
                    </span>
                    <span className="text-xs leading-5 tracking-tight text-black/50">
                      {role}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};