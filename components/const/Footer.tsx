"use client";
import { Button } from "../ui/button";
import logo from "../../app/img/logo.png";
import Link from "next/link";
import Image from "next/image";
import arrow_left from "../../app/img/icons/arrow-left.png";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";

export default function Footer() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  return (
    <footer className="bg-[#434343] overflow-hidden py-10 lg:py-32  text-white  shadow-md">
      <div className="  py-6 max-w-[1200px] px-[15px] gap-16  mx-auto grid-cols-2 grid lg:grid-cols-5">
        <motion.div
          ref={ref}
          initial={{ x: "100%", opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1, ease: "easeIn" }}
          className="col-span-2 lg:order-4     items-end gap-6 flex flex-col"
        >
          <Link className="text-3xl" href="#">
            <Image src={logo} alt="logo" />
          </Link>
          <p>اسواق الجملة كلها في منصة واحدة</p>

          <div className="flex  w-full flex-col gap-4">
            <form className="w-full ">
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div className="relative">
                <input
                  type="search"
                  id="default-search"
                  className="block placeholder:text-end placeholder:text-[12px] placeholder:text-[#798785] w-full outline-none p-4 px-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#FF691F] focus:border-[#FF691F] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#FF691F] dark:focus:border-[#FF691F]"
                  placeholder="البريد الالكتروني"
                  required
                />
                <button
                  type="submit"
                  className="text-white hidden lg:flex gap-2 items-center absolute  start-1.5 bottom-1 bg-[#FF691F] hover:bg-[#FF691F] focus:ring-4 focus:outline-none focus:ring-[#FF691F] font-medium rounded-lg text-sm px-4 py-2.5  dark:hover:bg-[#FF691F] dark:focus:ring-[#FF691F]"
                >
                  <Image
                    src={arrow_left}
                    className="h-[24px] w-[24px]  object-contain"
                    alt="arrow_left"
                  />{" "}
                  انضم الان
                </button>
              </div>
            </form>
            <Button className=" gap-2 rounded-lg flex lg:hidden">
              <Image
                src={arrow_left}
                className="h-[24px] w-[24px]  object-contain"
                alt="arrow_left"
              />{" "}
              انضم الان
            </Button>
          </div>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ x: "-100%", opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1, ease: "easeIn" }}
          className=" col-span-1 flex pe-8 order-2 flex-col gap-6"
        >
          <h4 className="font-semibold  text-end  text-[18px]">حسابي</h4>
          <ul className="flex flex-col items-end  gap-3">
            <li className="text-[12px]">الطلبات</li>
            <li className="text-[12px]">قائمة المفضلة</li>
            <li className="text-[12px]">الخروج</li>
          </ul>
        </motion.div>
        <motion.div
          ref={ref}
          initial={{ x: "100%", opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1, ease: "easeIn" }}
          className="col-span-1 0 flex order-2 flex-col gap-6"
        >
          <h4 className="font-semibold text-end text-[18px]">بيانات التواصل</h4>
          <ul className="flex flex-col items-end gap-3">
            <li className="text-[12px]">العنوان : الرياض</li>
            <li className="text-[12px]">
              <span>:</span>رقم الهاتف{" "}
            </li>

            <li className="text-nowrap text-[12px] ">
              <span> info@ghith.sa </span> : البريد الإلكتروني{" "}
            </li>
          </ul>
        </motion.div>
        <motion.div
          ref={ref}
          initial={{ x: "-100%", opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1, ease: "easeIn" }}
          className="lg:col-span-1 w-full lg:order-1 flex items-end  col-span-2    flex-col gap-6"
        >
          <h4 className="font-semibold  text-[18px]">كن تاجر معانا</h4>
          <div>
            <Button className="flex rounded-xl gap-2">
              <Image
                src={arrow_left}
                className="h-[24px] w-[24px]  object-contain"
                alt="arrow_left"
              />
              انضم الان
            </Button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
