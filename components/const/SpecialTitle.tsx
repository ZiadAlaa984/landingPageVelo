"use client";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

interface SpecialTitleProps {
  title: string;
  par: string;
  rate: string;
  titleClassName?: string;
  parClassName?: string;
  containerClassName?: string;
}

export default function SpecialTitle({
  title,
  par,
  rate,
  titleClassName = "",
  parClassName = "",
  containerClassName = "",
}: SpecialTitleProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ y: -100, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.5, ease: "easeIn" }}
      className={`flex flex-col mx-auto px-[15px] justify-center items-center relative ${containerClassName}`}
    >
      <div className="relative gap-4 flex flex-col mx-auto justify-center items-center">
        <h2
          className={`lg:text-[32px] text-[20px] flex gap-2 items-center   relative text-center  z-10 font-extrabold ${titleClassName}`}
        >
          <span className="relative z-10">{title}</span>
          <div className="w-[50px] h-[50px] relative -translate-y-1/4 lg:hidden ">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="#DDDDDD"
                className="w-full h-full"
                strokeWidth="1"
                fill="none"
                strokeDasharray="282.7"
              />
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="#F05B10"
                className="w-full h-full"
                strokeWidth="4"
                fill="none"
                strokeDasharray="282.7"
                strokeDashoffset={rate}
              />
            </svg>
          </div>
          <div className="rounded-full hidden lg:block absolute -right-[2px] translate-x-1/2 -translate-y-1/4 w-[74px] h-[74px]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="#DDDDDD"
                className="w-full h-full"
                strokeWidth="1"
                fill="none"
                strokeDasharray="282.7"
              />
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="#F05B10"
                className="w-full h-full"
                strokeWidth="4"
                fill="none"
                strokeDasharray="282.7"
                strokeDashoffset={rate}
              />
            </svg>
          </div>
        </h2>
        <p
          className={`lg:text-[16px] text-[12px]  max-w-xl text-[#6B6B6B] text-center ${parClassName}`}
        >
          {par}
        </p>
      </div>
    </motion.div>
  );
}
