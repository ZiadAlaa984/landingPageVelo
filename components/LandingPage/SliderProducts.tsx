"use client";
import "swiper/css";
import "swiper/css/navigation";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import frame1 from "../../app/img/SliderProducts/frame1.png";
import frame2 from "../../app/img/SliderProducts/frame2.png";
import ArrowLeft from "../../app/img/SliderProducts/arrowLeft.png";
import ArrowRight from "../../app/img/SliderProducts/arrowRight.png";
import Frame from "../../app/img/icons/Frame18366(1).png";
import bus from "../../app/img/icons/bus.png";
import BgRes from "../../app/img/SliderProducts/bgRes.png";
import bgRes2 from "../../app/img/SliderProducts/bgRes2.png";
import cart from "../../app/img/icons/cart-4.png";
import Group6 from "../../app/img/Group6.png";
import SpecialTitle from "../const/SpecialTitle";
import { products } from "@/app/data/data";
import { Button } from "../ui/button";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

SwiperCore.use([Navigation]);

export default function SliderProducts() {
  const frame1Ref = useRef(null);
  const frame2Ref = useRef(null);
  const sliderRef = useRef(null);

  const isFrame1InView = useInView(frame1Ref, { once: true });
  const isFrame2InView = useInView(frame2Ref, { once: true });
  const isSliderInView = useInView(sliderRef, { once: true });

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [swiperInstance, setSwiperInstance] = useState<any>(null);

  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (
    <section className="flex SliderProducts bg-[#FFFFFF]  px-[15px] gap-14  relative flex-col overflow-hidden mx-auto">
      <motion.div
        ref={frame1Ref}
        initial={{ x: "-100%", opacity: 0 }}
        animate={isFrame1InView ? { x: "0%", opacity: 1 } : {}}
        transition={{ duration: 0.5, ease: "easeIn" }}
        className="absolute  lg:hidden block top-1/3  w-[100px] h-[100px] right-0"
      >
        <Image alt="bgRes2" src={bgRes2} />
      </motion.div>
      <motion.div
        ref={frame2Ref}
        initial={{ opacity: 0 }}
        animate={isFrame2InView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, ease: "easeIn" }}
        className="absolute  lg:hidden block left-0 w-[100px] h-[100px] bottom-0"
      >
        <Image alt="BgRes" className="w-full" src={BgRes} />
      </motion.div>
      <motion.div
        ref={frame1Ref}
        initial={{ x: "-100%", opacity: 0 }}
        animate={isFrame1InView ? { x: "0%", opacity: 1 } : {}}
        transition={{ duration: 0.5, ease: "easeIn" }}
        className="absolute  lg:block hidden right-2  translate-x-1/2"
      >
        <Image alt="frame1" src={frame1} />
      </motion.div>
      <motion.div
        ref={frame2Ref}
        initial={{ opacity: 0 }}
        animate={isFrame2InView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, ease: "easeIn" }}
        className="absolute hidden lg:block left-0 bottom-0  -translate-y-16"
      >
        <Image alt="frame2" src={frame2} />
      </motion.div>

      <SpecialTitle
        rate={"150"}
        title=" استكشف أفضل المنتجات"
        par={`نوفر لك كل ما تحتاجه لتسوق ناجح وآمن. استمتع بتجربة تسوق استثنائية مع خدماتنا المصممة خصيصًا لتلبية احتياجاتك`}
      />

      <div className="flex flex-col gap-4">
        <motion.div
          ref={sliderRef}
          initial={{ y: 100, opacity: 0 }}
          animate={isSliderInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className=" relative z-20 product lg:w-full  w-[310px] mx-auto"
        >
          <Swiper
            onInit={(swiper) => setSwiperInstance(swiper)}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            slidesPerView={4}
            spaceBetween={10}
            breakpoints={{
              300: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
            modules={[Navigation]}
            className="mySwiper  max-w-[1200px] lg:h-[70vh] relative  z-40 min-h-[260px]"
          >
            {products.map((product, index) => (
              <SwiperSlide key={index}>
                <div className="flex bg-white  relative z-50  flex-col justify-center  items-center">
                  <div className="  last shadow-md rounded-lg flex flex-col">
                    <div>
                      <Image
                        src={product.image}
                        alt={product.title}
                        className=" object-contain"
                      />
                    </div>
                    <div className="flex  p-1 flex-col relative z-40  gap-2 lg:py-3 lg:px-6 lg:gap-3">
                      <div className="flex justify-between items-center">
                        <p className="flex  justify-center items-center font-bold lg:text-[14px] text-[10px] gap-2">
                          <span> {product.originalPrice}</span>
                          <Image
                            className=" w-6 mb-1 object-contain"
                            src={Group6}
                            alt="frame"
                          />
                        </p>
                        <p className="flex gap-2 items-center">
                          <span className="text-[9.6px]">
                            ({product.reviews})
                          </span>{" "}
                          <Image
                            className=" w-[32px] h-[14px] object-contain"
                            src={Frame}
                            alt="frame"
                          />
                        </p>
                      </div>
                      <p className="lg:text-sm text-[8.2px]  text-right font-[400]">
                        ماكينة القهوة الاحترافية Barista Pro – لتحضير قهوة بجودة
                        المقاهي
                      </p>
                      <p className="lg:text-xs text-[6.83px] text-right text-[#FF691F]">
                        {product.discount}
                      </p>
                      <div className="flex justify-between gap-2 items-center">
                        <Button className="rounded-xl lg:text-[12px] flex text-[6.83px]   gap-2 ">
                          <Image
                            src={cart}
                            alt="cart"
                            className="w-[14px] h-[14px]"
                          />
                          إضافه
                        </Button>
                        <Button
                          variant="ghost"
                          className="rounded-xl lg:text-[10px] text-[6.83px]"
                        >
                          توصيل مجاني{" "}
                          <Image
                            src={bus}
                            alt="bus"
                            className="w-[16px] h-[16px]"
                          />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        <div className="relative z-10 flex gap-6 justify-center items-center">
          <div
            ref={prevRef}
            className="border-[#BCBCBC] border transform rounded-full p-3 cursor-pointer"
          >
            <Image src={ArrowLeft} alt="Prev" width={24} height={24} />
          </div>
          <div
            ref={nextRef}
            className="border-[#BCBCBC] border transform rounded-full p-3 cursor-pointer"
          >
            <Image src={ArrowRight} alt="Next" width={24} height={24} />
          </div>
        </div>
      </div>
    </section>
  );
}
