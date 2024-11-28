"use client";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import product1 from "../../app/img/products/frame1.png";
import product2 from "../../app/img/products/frame2.png";
import product3 from "../../app/img/products/frame3.png";
import product4 from "../../app/img/products/frame4.png";
import product5 from "../../app/img/products/frame5.png";
import product6 from "../../app/img/products/frame6.png";
import product7 from "../../app/img/products/frame7.png";
import product8 from "../../app/img/products/frame8.png";
import product9 from "../../app/img/products/frame9.png";
import product10 from "../../app/img/products/frame10.png";
import Component from "../../app/img/hero/Component.png";
import img1 from "../../app/img/hero/046.png";
import img2 from "../../app/img/hero/078.png";
import img3 from "../../app/img/hero/087.png";
import img4 from "../../app/img/hero/101.png";
import bg from "../../app/img/hero/bg.png";
import arrow from "../../app/img/icons/shape.png";
import { motion } from "framer-motion";
export default function Hero() {
  return (
    <div className="    overflow-hidden   relative     flex flex-col gap-10">
      <div className="absolute flex   w-full justify-center items-center ">
        <Image alt="bg" src={bg} className="  object-contain    " />
      </div>
      <div className="flex relative lg:pt-[140px] px-7  pt-[80px] z-10 justify-center  gap-10 items-center flex-col">
        <div className="relative">
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeIn" }}
            className="absolute h-[19.52px] w-[19.89px]  lg:-left-24 -translate-y-1/2 lg:w-[59.09px] lg:h-[58px]"
          >
            <Image alt="img1" src={img1} className="w-full" />
          </motion.div>

          <motion.div
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeIn" }}
            className="absolute   -right-2 lg:-right-24 -translate-y-1/4 w-[24.03px] lg:w-[71.38px] h-[33.66px] lg:h-[100px]"
          >
            <Image alt="img2" src={img2} className="w-full" />
          </motion.div>
          <motion.div
            initial={{ x: -100, y: 128, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeIn" }}
            className="absolute lg:-left-8 translate-y-32 w-[30px] lg:w-[100px] h-[33.66px] lg:h-[43.69px]"
          >
            <Image alt="img4" src={img4} className="w-full" />
          </motion.div>

          <motion.div
            initial={{ x: 100, y: 110, opacity: 0 }}
            animate={{ x: 20, y: 110, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeIn" }}
            className="absolute right-0 lg:right-12 lg:w-[60px] w-[30px] h-[33.66px] translate-y-32 lg:h-[100px]"
          >
            <Image alt="img3" src={img3} className="w-full" />
          </motion.div>
          <motion.div
            initial={{ scale: 0.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeIn" }}
            className="justify-center flex   lg:gap-8 gap-4   items-center flex-col"
          >
            <h1 className="font-black text-center relative text-[32px] lg:text-[40px]">
              أفضل المنتجات بأسعار الجملة مباشرة من الموردين
            </h1>
            <p className="text-[16px] opacity-75 max-w-2xl text-center">
              اكتشف مجموعة واسعة من المنتجات عالية الجودة بأسعار تنافسية.سواء
              كنت تدير متجرًا أو تبحث عن صفقات مذهلة، لدينا كل ما تحتاجه لتلبية
              احتياجات
            </p>
            <Button className="flex py-6 px-9 text-[14px] rounded-xl font-bold gap-2">
              <Image
                src={arrow}
                className="h-[10px] w-[5px] object-contain"
                alt="arrow"
              />
              استكشف الان
            </Button>
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ y: 300, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeIn" }}
        className="grid-cols-5 bg-custom-gradient   relative mx-auto z-10  gap-x-6 hidden lg:grid   "
      >
        <div className="col-span-1 flex flex-col gap-y-6">
          <div className="bg-[#ECECEC]     flex justify-center items-center  rounded-[36px]">
            <Image alt="img1" className="w-full " src={product1} />
          </div>
          <div className="bg-[#ECECEC]    flex justify-center items-center  rounded-[36px]">
            <Image
              alt="img2"
              className="w-full object-contain"
              src={product2}
            />
          </div>
        </div>
        <div className="col-span-1 pt-[72px] flex gap-y-6 flex-col ">
          <div className="bg-[#ECECEC]    flex justify-center items-center  rounded-[36px]">
            <Image alt="img3" className="w-full" src={product3} />
          </div>
          <div className="bg-[#ECECEC]    relative flex justify-center items-center  rounded-[36px]">
            <Image alt="img7" className="w-full " src={product7} />
          </div>
        </div>
        <div className="col-span-1 flex gap-y-6 flex-col ">
          <div className="bg-[#ECECEC]    flex justify-center items-center  rounded-[36px]">
            <Image alt="img5" className="w-full" src={product5} />
          </div>
          <div className="bg-[#ECECEC]    flex justify-center items-center  rounded-[36px]">
            <Image alt="img10" className="w-full" src={product10} />
          </div>
        </div>
        <div className="col-span-1  pt-[72px] flex gap-y-6 flex-col ">
          <div className="bg-[#ECECEC]    flex justify-center items-center  rounded-[36px]">
            <Image alt="img6" className="w-full" src={product6} />
          </div>
          <div className="bg-[#ECECEC]    relative flex justify-center items-center  rounded-[36px]">
            <Image alt="img8" className="w-full " src={product8} />
          </div>
        </div>
        <div className="col-span-1 flex gap-y-6 flex-col ">
          <div className="bg-[#ECECEC]    flex justify-center items-center  rounded-[36px]">
            <Image alt="img9" className="w-full" src={product9} />
          </div>
          <div className="bg-[#ECECEC]    flex justify-center items-center  rounded-[36px]">
            <Image alt="img4" className="w-full" src={product4} />
          </div>
        </div>
      </motion.div>
      <div className=" lg:hidden bg-custom-gradient">
        <Image src={Component} className="w-full" alt="bg-products" />
      </div>
    </div>
  );
}
