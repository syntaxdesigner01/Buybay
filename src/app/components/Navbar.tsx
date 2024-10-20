"use client";
import Link from "next/link";
import { HiMenuAlt1, HiOutlineHeart } from "react-icons/hi";
import { BsCart4 } from "react-icons/bs";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";

export default function Navbar() {
  const [likeCount, setLikeCount] = useState<number>(0);
  const [cartItemCount, setCartItemCount] = useState<number>(0);
  const path = usePathname();

  useEffect(() => {
    setCartItemCount(1);
    setLikeCount(4);
  }, []);

  return (
    <section className="pt-4">
      {path === "/" ? (
        <section className=" flex justify-between items-center border-t">
          <section>
            <button className="bg-primary text-white px-4 font-[500] flex p-2 items-center  gap-4">
              <HiMenuAlt1 className="text-white" />
              <select name="" id="" className="outline-none bg-primary">
                <option value="">All Categories </option>
                <option value="">Electronics</option>
                <option value="">Clothing</option>
                <option value="">Books</option>
                <option value="">Home & Garden</option>
                <option value="">Sports & Outdoors</option>
                <option value="">Other</option>
              </select>
            </button>
          </section>

          <nav className="flex gap-10 font-semibold">
            <Link href={"/"}>Home</Link>
            <Link href={"/"}>Products</Link>
            <Link href={"/"}>Contact</Link>
            <Link href={"/"}>Categories</Link>
            <Link href={"/"} className="text-primary">
              Sign up
            </Link>
          </nav>

          <section className="flex gap-10">
            <div className="relative">
              <HiOutlineHeart className="text-3xl" />
              <div className="bg-[#FFBD27] h-4 w-4 p-1 rounded-full flex justify-center items-center absolute top-[-0.1em] left-4  right-0">
                <span>{likeCount}</span>
              </div>
            </div>

            <div className="relative">
              <BsCart4 className="text-2xl" />
              <div className="bg-[#FFBD27] h-4 w-4 p-1 rounded-full flex justify-center items-center absolute top-[-0.1em] left-4  right-0">
                <span>{cartItemCount}</span>
              </div>
            </div>
          </section>
        </section>
      ) : (
        <section className="flex justify-between items-center">
          <section>
            <Image src={"/logo.png"} alt="" width={150} height={150} />
          </section>

          <nav className="flex gap-8 font-semibold">
            <Link href={"/"}>Home</Link>
            <Link href={"/"}>Products</Link>
            <Link href={"/"}>Contact</Link>
            <Link href={"/"}>Categories</Link>
            <Link href={"/"} className="text-primary">
              Sign up
            </Link>
          </nav>

          <section className="border-2 flex justify-between  border-primary w-[25%] ">
            <div className="w-full">
              <input
                type="text"
                placeholder="Search For Product..."
                className="w-full h-full outline-none px-4"
              />
            </div>

            <div className="h-10 w-[12%] text-white bg-primary flex justify-center items-center">
              <button className="  ">
                <CiSearch className="h-6 w-6 font-extrabold" />
              </button>
            </div>
          </section>

          <section className="flex gap-10">
            <div className="relative">
              <HiOutlineHeart className="text-3xl" />
              <div className="bg-[#FFBD27] h-4 w-4 p-1 rounded-full flex justify-center items-center absolute top-[-0.1em] left-4  right-0">
                <span>{likeCount}</span>
              </div>
            </div>

            <div className="relative">
              <BsCart4 className="text-2xl" />
              <div className="bg-[#FFBD27] h-4 w-4 p-1 rounded-full flex justify-center items-center absolute top-[-0.1em] left-4  right-0">
                <span>{cartItemCount}</span>
              </div>
            </div>
          </section>
        </section>
      )}
    </section>
  );
}
