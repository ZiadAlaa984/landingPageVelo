"use client";
import Image from "next/image";
import SpecialTitle from "../const/SpecialTitle";
import { images } from "@/app/data/data";
import bg_left from "../../app/img/supplay/bg_left.png";
import bg_right from "../../app/img/supplay/bg_right.png";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Suppliers() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="flex overflow-hidden min-h-screen SliderSuppliers relative  flex-col mx-auto  gap-10">
      <Image
        src={bg_right}
        alt="bg_right"
        className="w-full h-full absolute right-0 bottom-0"
      />
      <Image
        src={bg_left}
        alt="bg_left"
        className="w-full h-full absolute left-0 top-0"
      />
      <div>
        <SpecialTitle
          rate={"80"}
          title=" ..أهم الموردين"
          par="نعمل مع نخبة من الموردين الموثوقين لضمان توفير منتجات عالية الجودة بأسعار تنافسية. شركاؤنا من الموردين يتم اختيارهم بعناية لضمان تنوع المنتجات وتلبية جميع احتياجاتك."
        />
      </div>
      <motion.div
        ref={ref}
        initial={{ x: "100%", opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 1.5, ease: "easeIn" }}
        className=" grid lg:grid-cols-7  grid-cols-6 px-[15px] overflow-hidden"
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="flex lg:col-span-1 col-span-2 justify-center items-center"
          >
            <div className="p-2  cursor-grab border-white w-full text-white">
              <Image
                src={image.src}
                className="rounded-3xl object-contain"
                alt={`Supplier ${index}`}
              />
              <h1 className="mt-2 text-center font-[700] text-[14px] text-black">
                {image.data}
              </h1>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
