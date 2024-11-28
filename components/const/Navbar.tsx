"use client";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import logo from "../../app/img/logo.png";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";
export default function Navbar() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.nav
      ref={ref}
      initial={{ y: "-100%", opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.3, ease: "easeIn" }}
      className="bg-[#434343] shadow-custom  w-full  "
    >
      <div className="  px-[24px]  lg:py-8 py-[12px] max-w-[1200px]  mx-auto flex justify-between items-center">
        <div className="flex gap-4">
          <Button
            variant="ghost"
            className="rounded-xl hidden lg:block text-white border border-white"
          >
            {" "}
            انشاء الحساب
          </Button>
          <Button className="rounded-xl"> تسجيل الدخول</Button>
        </div>
        <div>
          <Link className="text-3xl" href="#">
            <Image src={logo} alt="logo" className="" />
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
