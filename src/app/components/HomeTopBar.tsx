import Image from "next/image";
import React from "react";
import { CiSearch } from "react-icons/ci";

export default function HomeTopBar() {
  return (
    <section className="flex justify-between w-full items-center pt-6 ">
      <section>
        <Image src={"/logo.png"} alt="" width={150} height={150} />
      </section>

      <section className="border-2 flex justify-between  border-primary w-[50%] ">
        <div className="w-[50%]">
          <input
            type="text"
            placeholder="Search For Product..."
            className="w-full h-full outline-none px-4"
          />
        </div>
        <div className="border-r border-black py-2"></div>

        <div className=" px-4 flex justify-center items-center font-[500]">
          <select name="" id="" className="outline-none">
            <option value="">Select Category </option>
            <option value="">Electronics</option>
            <option value="">Clothing</option>
            <option value="">Books</option>
            <option value="">Home & Garden</option>
            <option value="">Sports & Outdoors</option>
            <option value="">Other</option>
          </select>
        </div>

        <div className="h-10 w-[10%] text-white bg-primary flex justify-center items-center">
          <button className="  ">
            <CiSearch className="h-6 w-6 font-extrabold" />
          </button>
        </div>
      </section>

      <div className="flex gap-2">
        <div className="border-2 border-secondary h-16 w-16 rounded-full flex justify-center items-center">
          <Image src={"/icons/user.png"} alt="" height={30} width={30} />
        </div>
        <div className="text-center text-[15px]">
          <p> Hello,</p> <p className="font-semibold">Sign in </p>{" "}
          <p className="font-semibold">Your Account </p>
        </div>
      </div>
    </section>
  );
}
