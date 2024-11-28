"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import Left_comment from "../../app/img/customers/left_comment.png";
import Right_comment from "../../app/img/customers/right_comment.png";
import icon1 from "../../app/img/customers/098.png";
import icon2 from "../../app/img/customers/99.png";
import stars from "../../app/img/icons/stars.png";
import bg from "../../app/img/customers/bg.png";
import SpecialTitle from "../const/SpecialTitle";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { customerData } from "@/app/data/data";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
export default function Customers() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="flex Customers   overflow-hidden   relative min-h-screen flex-col  bg-[#FFFFFF] mx-auto gap-20">
      <Image
        src={bg}
        alt="bg"
        className="w-full h-full absolute left-0 top-0"
      />
      <SpecialTitle
        rate={"60"}
        title=" ...تعرف علي آراء العملاء "
        par={`اطلع على تجارب عملائنا واستمع إلى آرائهم حول جودة منتجاتنا وخدماتنا. نلتزم بتقديم تجربة تسوق استثنائية، وهذا ما يعكسه رضا عملائنا.`}
      />

      <motion.div
        ref={ref}
        initial={{ y: "100%", opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 1.5, ease: "easeIn" }}
        className="absolute  lg:right-20 right-4 top-44 "
      >
        <Image
          alt="icon2"
          src={icon2}
          className="w-2/3 lg:w-[64.68px] lg:h-[56px]"
        />
      </motion.div>
      <motion.div
        ref={ref}
        initial={{ y: "-100%", opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 1.5, ease: "easeIn" }}
        className="absolute lg:left-20  left-4 bottom-6 -translate-y-1/2"
      >
        <Image
          alt="icon1"
          src={icon1}
          className="w-2/3 lg:w-[64.68px] lg:h-[56px]"
        />
      </motion.div>

      <Image
        alt="Left_comment"
        src={Left_comment}
        className="lg:absolute hidden -left-16 translate-y-52    bottom-1/2 object-contain   w-[369.2px] h-[250px]"
      />
      <Image
        alt="Right_comment"
        src={Right_comment}
        className="lg:absolute hidden  -right-16 bottom-1/2 object-contain translate-y-52 w-[369.2px] h-[250px]"
      />
      <motion.div
        ref={ref}
        initial={{ scale: 0.2, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 1.5, ease: "easeIn" }}
      >
        <Carousel>
          <CarouselContent>
            {customerData.map((customer, index) => (
              <CarouselItem>
                <div
                  key={index}
                  className="lg:w-[854px] w-[300px] relative flex flex-col items-end p-3 my-element bg-white border-[#DDDDDD] mx-auto  h-[234.64px] lg:h-[420px] border-4 border-dashed rounded-tl-[50px] rounded-br-[50px]"
                >
                  <div className="bg-[#F05B10] p-1  lg:p-6 w-[154.63px] h-[141.38px] lg:w-[385px] lg:h-[352px] rounded-tl-3xl rounded-br-3xl">
                    <div className="flex justify-center lg:gap-3 gap-2 items-center">
                      <div className="flex flex-col gap-1 justify-center items-end">
                        <h4 className="font-bold text-[8.23px] lg:text-base text-white">
                          {customer.name}
                        </h4>
                        <ul className="flex gap-1 justify-end items-center">
                          <Image
                            src={stars}
                            alt="stars"
                            className="lg:w-[136px] w-[54.62px] h-[8px] lg:h-[16px]"
                          />
                        </ul>
                      </div>
                      <Avatar className="w-6 h-6 lg:w-10 lg:h-10">
                        <AvatarImage src={customer.img} alt={customer.name} />
                      </Avatar>
                    </div>
                  </div>
                  <div className="flex w-full pt-8  lg:px-6 items-center gap-3">
                    <CarouselPrevious />
                    <Avatar className="blur-[2px] lg:w-8 lg:h-8 w-6 h-6">
                      <AvatarImage src={customer.img} alt={customer.name} />
                    </Avatar>
                    <Avatar className="w-8 h-8 lg:w-10 lg:h-10">
                      <AvatarImage src={customer.img} alt={customer.name} />
                    </Avatar>
                    <Avatar className="blur-[2px] lg:w-8 lg:h-8 w-6 h-6">
                      <AvatarImage src={customer.img} alt={customer.name} />
                    </Avatar>

                    <CarouselNext />
                  </div>
                  <CarouselItem className="absolute box_shadow lg:w-[782px] h-[130px] w-[260px] p-2 lg:p-12 translate-x-1/2 right-1/2 top-1/2 -translate-y-1/2 lg:h-[220px] bg-white rounded-3xl">
                    <div>
                      <p className="text-[#666666] text-[10px] lg:text-[16px] text-right">
                        {customer.review}
                      </p>
                    </div>
                  </CarouselItem>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </motion.div>
    </section>
  );
}
