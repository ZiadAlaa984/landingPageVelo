"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Glass1 from "../../app/img/Service/Glass1.png";
import Glass2 from "../../app/img/Service/Glass2.png";
import Glass3 from "../../app/img/Service/Glass3.png";
import Glass4 from "../../app/img/Service/Glass4.png";
import vector1 from "../../app/img/Service/vec1.png";
import vector2 from "../../app/img/Service/vec2.png";
import SpecialTitle from "../const/SpecialTitle";
import { motion, useInView } from "framer-motion";

export default function Service() {
  const refLeft = useRef<HTMLDivElement>(null);
  const refMiddle1 = useRef<HTMLDivElement>(null);
  const refMiddle2 = useRef<HTMLDivElement>(null);
  const refRight = useRef<HTMLDivElement>(null);
  const refVector1 = useRef<HTMLDivElement>(null);

  const isInViewLeft = useInView(refLeft, { once: true });
  const isInViewMiddle1 = useInView(refMiddle1, { once: true });
  const isInViewMiddle2 = useInView(refMiddle2, { once: true });
  const isInViewRight = useInView(refRight, { once: true });
  const isInViewVector1 = useInView(refVector1, { once: true });

  return (
    <section className="flex flex-col  min-h-screen max-w-[1200px] mx-auto overflow-hidden relative gap-20">
      <motion.div
        ref={refVector1}
        initial={{ y: "100%", opacity: 0 }}
        animate={isInViewVector1 ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 1.5, ease: "easeIn" }}
        className="absolute bottom-1/2 lg:top-0 left-0 w-full"
      >
        <Image alt="vector1" src={vector1} className="object-cover" />
      </motion.div>
      <motion.div
        ref={refVector1}
        initial={{ y: "100%", opacity: 0 }}
        animate={isInViewVector1 ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 1.5, ease: "easeIn" }}
        className="absolute bottom-0 lg:top-0 left-0 w-full"
      >
        <Image alt="vector2" src={vector2} className="object-cover" />
      </motion.div>

      <SpecialTitle
        rate={"200"}
        title=" تعرف علي أهم الخدمات التي نقدمها "
        par={`اكتشف خدماتنا المميزة التي تجعل تجربة التسوق أكثر سهولة وراحة. من
الشحن السريع، إلى دعم العملاء المتاح على مدار الساعة، والتعامل الآمن
في الدفع `}
      />
      <div className="max-w-screen-[1200px] px-8  relative mx-auto">
        <div className="grid z-10 lg:gap-20 gap-10 grid-cols-4">
          <motion.div
            ref={refLeft}
            initial={{ x: "-100%", opacity: 0 }}
            animate={isInViewLeft ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 1, ease: "easeIn" }}
            className="lg:col-span-1 order-2 p-3 col-span-4 bor bg-white gap-2 border-[#434343] flex flex-col justify-between items-center"
          >
            <Image
              alt="Glass1"
              src={Glass4}
              className="object-contain  w-[100px] h-[100px]"
            />
            <div className="flex flex-col flex-1 justify-center items-center gap-2">
              <h4 className="text-[18px] font-bold">خصومات خاصة بالتجار</h4>
              <p className="text-[12px] font-light  opacity-40  text-center">
                نقدم خصومات وعروض خاصة للتجار والشركات الكبيرة، مع إمكانية
                التفاوض على الأسعار بناءً على حجم الطلبات، للحصول على أفضل قيمة
                ممكنة
              </p>
            </div>
          </motion.div>

          <motion.div
            ref={refMiddle1}
            initial={{ y: "100%", opacity: 0 }}
            animate={isInViewMiddle1 ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1, ease: "easeIn" }}
            className=" p-3 bor order-2 lg:col-span-1  col-span-4 bg-white gap-2 border-[#434343] flex flex-col justify-between items-center"
          >
            <Image
              alt="Glass2"
              src={Glass1}
              className="object-contain w-[100px] h-[100px]"
            />
            <div className="flex flex-col flex-1 justify-center items-center gap-2">
              <h4 className="text-[18px] font-bold">دعم العملاء المتخصص</h4>
              <p className="text-[12px] font-light  opacity-40  text-center">
                فريق دعم العملاء لدينا متواجد على مدار الساعة لتقديم المساعدة
                والإجابة عن أي استفسارات، بهدف جعل تجربتك في التسوق معنا سهلة
              </p>
            </div>
          </motion.div>
          <motion.div
            ref={refMiddle2}
            initial={{ y: "100%", opacity: 0 }}
            animate={isInViewMiddle2 ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1, ease: "easeIn" }}
            className="lg:col-span-1 order-2 col-span-4 p-3 bor bg-white gap-2 border-[#434343] flex flex-col justify-between items-center"
          >
            <Image
              alt="Glass3"
              src={Glass3}
              className="object-contain  w-[100px] h-[100px]"
            />
            <div className="flex flex-col flex-1 justify-center items-center gap-2">
              <h4 className="text-[18px] font-bold">الشحن السريع والآمن</h4>
              <p className="text-[12px]  opacity-40  font-light text-center">
                نوفر خدمات شحن موثوقة وسريعة إلى مختلف أنحاء العالم، مع ضمان
                وصول المنتجات في الوقت المحدد وبأعلى مستوى من الحماية.
              </p>
            </div>
          </motion.div>
          <motion.div
            ref={refRight}
            initial={{ x: "100%", opacity: 0 }}
            animate={isInViewRight ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 1, ease: "easeIn" }}
            className="lg:col-span-1 lg:order-2 order-1 col-span-4 p-3 bg-white gap-4   box_shadow rounded-lg flex flex-col justify-between items-center"
          >
            <Image
              alt="Glass4"
              src={Glass2}
              className="object-contain   w-[100px] h-[100px]"
            />
            <div className="flex flex-col  justify-center items-center gap-2">
              <h4 className="text-[18px] font-bold">اسعار تنافسية</h4>
              <p className="text-[12px]  font-light opacity-40 text-center">
                نقدم مجموعة واسعة من المنتجات عالية الجودة بأسعار خاصة لتجار
                الجملة، مما يساعدك في زيادة أرباحك وتقليل التكاليف.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
