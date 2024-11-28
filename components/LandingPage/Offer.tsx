"use client";
import Image from "next/image";
import img1 from "../../app/img/offer/img1.png";
import offer1 from "../../app/img/offer/offer1.png";
import offer2 from "../../app/img/offer/offer2.png";
import Subtract from "../../app/img/offer/Subtract.png";
import offerBG from "../../app/img/offer/offerBG.png";
import offerBGR from "../../app/img/offer/offerBGR.png";
import { Button } from "../ui/button";
import SpecialTitle from "../const/SpecialTitle";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
export default function Offer() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="flex flex-col  min-h-screen  overflow-hidden  mx-auto gap-10 lg:gap-20">
      <SpecialTitle
        rate={"110"}
        title=" ..عروض من أجلك "
        par="استمتع بتخفيضات حصرية ومميزة تم اختيارها بعناية لتناسب احتياجاتك. نوفر لك أفضل العروض على منتجاتك المفضلة بأسعار لا تُقاوم"
      />

      <div className="relative px-[15px]   z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.3, delay: 1.5, ease: "easeIn" }}
          className=" right-0 hidden lg:absolute left-0   w-full "
        >
          <Image alt="offerBG " className="w-full" src={offerBG} />
        </motion.div>
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.3, delay: 1.5, ease: "easeIn" }}
          className=" right-0 lg:hidden absolute  bottom-0   w-full "
        >
          <Image alt="offerBGR " className="w-full" src={offerBGR} />
        </motion.div>

        <div className=" grid bg-[#FFFFFF] gap-2 lg:gap-6 relative z-20 max-w-[1200px]  mx-auto grid-cols-2">
          <motion.div
            ref={ref}
            initial={{ x: "100%", opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 1.5, ease: "easeIn" }}
            className="lg:col-span-1 order-2 col-span-2 flex flex-col     justify-between "
          >
            <div className="relative      rounded-3xl  gap-3 flex ">
              <Image
                src={offer1}
                alt="img1"
                className="w-full  object-cover  absolute"
              />
              <div className="lg:py-12 lg:px-20  px-12 py-[8px]  overlay relative flex justify-between flex-col w-full h-full">
                <div className="flex flex-col justify-center h-full items-end gap-2 lg:gap-3">
                  <h3 className="lg:text-[40px] text-[22.68px] text-white font-bold">
                    <span className="number  font-medium">%30</span> خصم
                  </h3>
                  <p className="text-opacity-80 text-[9.94px]  max-w-[340px] text-right font-bold text-white uppercase leading-snug lg:text-[14px]">
                    استمتع بألذ النكهات الصحية والطبيعية بأسعار لا تُقاوم اطلب
                    الآن ووفّر في كل وجبة
                  </p>
                  <div>
                    <Button className="font-bold rounded-2xl text-[8px] lg:text-[12px] p-4 lg:p-6 button_shadow">
                      احصل علي العرض
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="  offer_1 lg:pt-0 grid grid-cols-2 lg:gap-6 gap-2  ">
              <div className="  col-span-1  relative   overflow-hidden  rounded-3xl   flex ">
                <Image
                  src={img1}
                  alt="img1"
                  className="w-full h-full  object-cover  absolute"
                />
                <div className=" p-6 lg:p-12    overlay relative flex justify-between flex-col w-full h-full">
                  <div className="flex flex-col justify-center h-full items-center  ">
                    <h3 className=" text-white number  font-medium lg:text-[80px] text-[45.36px]">
                      {" "}
                      %50
                    </h3>
                    <div>
                      <Button className="font-bold rounded-2xl text-[8px] lg:text-[12px] p-4 lg:p-6 button_shadow">
                        احصل علي العرض
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="  col-span-1  relative   overflow-hidden   rounded-3xl  flex ">
                <Image
                  src={img1}
                  alt="img1"
                  className="w-full h-full  object-cover  absolute"
                />
                <div className="p-6 lg:p-12    overlay relative flex justify-between flex-col w-full h-full">
                  <div className="flex flex-col justify-center h-full items-center  gap-3">
                    <h3 className=" lg:text-[80px] text-[45.36px] text-white number  font-medium ">
                      {" "}
                      %50
                    </h3>
                    <div>
                      <Button className="font-bold rounded-2xl text-[8px] lg:text-[12px] p-4 lg:p-6 button_shadow">
                        احصل علي العرض
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ x: "-100%", opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 1.5, ease: "easeIn" }}
            className="lg:col-span-1   col-span-2  relative       rounded-3xl  gap-3 flex "
          >
            <Image
              src={Subtract}
              alt="Subtract"
              className=" -top-2 -right-2 hidden lg:absolute -left-2 -bottom-4 min-w-[604px] min-h-[583px]  "
            />
            <Image
              src={offer2}
              alt="offer2"
              className="w-full h-full absolute"
            />
            <div className="lg:p-12 p-6  overlay relative flex justify-between  flex-col w-full lg:h-full h-[308.7px]">
              <div className="flex flex-col justify-end h-full items-end  gap-3">
                <h3 className="lg:text-[40px] text-[23.66px] text-white font-bold">
                  <span className="number   font-medium">%30</span> خصم
                </h3>
                <p className="text-opacity-80 text-[12px] text-right text-white uppercase leading-tight lg:text-[14px]">
                  استمتع بألذ النكهات الصحية والطبيعية بأسعار لا تُقاوم اطلب
                  الآن ووفّر في كل وجبة!
                </p>
                <div>
                  <Button className="font-bold rounded-2xl text-[8px] lg:text-[12px] p-4 lg:p-6 button_shadow">
                    احصل علي العرض
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
