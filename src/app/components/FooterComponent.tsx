import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
    FaEnvelope,
    FaMapMarkerAlt,
} from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

export default function FooterComponent() {
    return (
      <section className="bg-background w-full pb-20 py-10 px-20 flex items-center gap-40">
        <section>
          <section>
            <Image src={"/logo.png"} alt="logo" width={150} height={150} />
          </section>

          <section className="flex  gap-4 mt-4">
            <Image
              src={"/icons/twitter.png"}
              alt="logo"
              width={25}
              height={25}
            />
            <Image
              src={"/icons/instagram.png"}
              alt="logo"
              width={25}
              height={25}
            />
            <Image
              src={"/icons/facebook.png"}
              alt="logo"
              width={25}
              height={25}
            />
            <Image
              src={"/icons/youtube.png"}
              alt="logo"
              width={25}
              height={25}
            />
            <Image
              src={"/icons/tik-tok.png"}
              alt="logo"
              width={25}
              height={25}
            />
          </section>

          <section className="flex flex-col gap-4 pt-6">
            <section className="flex flex-col gap-2">
              <h1 className="font-bold">Talk To Us </h1>
              <p>Got Questions? Call Us</p>
              <p className="font-bold">+670 227 52 445</p>
            </section>

            <section className="flex flex-col gap-2">
              <section className="flex gap-4 items-center">
                <FaEnvelope />
                <aside>buybay@support.com</aside>
              </section>
              <section className="flex gap-4 ">
                <FaMapMarkerAlt />
                <aside>
                  34 Manchester <br /> Roadsouthwest London
                </aside>
              </section>
            </section>

            <section className="capitalize">
              <p>copyright &copy; 2023. All rights reserved</p>
            </section>
          </section>
        </section>

        <section className="flex justify-between w-[45%]">
          <aside>
            <h1 className="font-bold text-xl">My Account </h1>

            <section className="flex flex-col gap-5 pt-10">
              <Link href={"/"} className="flex  items-center">
                <GoDotFill />
                <span>Track orders</span>
              </Link>

              <Link href={"/"} className="flex  items-center">
                <GoDotFill />
                <span>Shipping</span>
              </Link>

              <Link href={"/"} className="flex  items-center">
                <GoDotFill />
                <span>Wishlist</span>
              </Link>

              <Link href={"/"} className="flex  items-center">
                <GoDotFill />
                <span>My Account</span>
              </Link>

              <Link href={"/"} className="flex  items-center">
                <GoDotFill />
                <span>Order History</span>
              </Link>

              <Link href={"/"} className="flex  items-center">
                <GoDotFill />
                <span>Returns</span>
              </Link>
            </section>
          </aside>

          <aside>
            {" "}
            <section>
              <h1 className="font-bold text-xl">Information </h1>

              <section className="flex flex-col gap-5 pt-10">
                <Link href={"/"} className="flex  items-center">
                  <GoDotFill />
                  <span>Privacy Policy </span>
                </Link>

                <Link href={"/"} className="flex  items-center">
                  <GoDotFill />
                  <span>Terms & Conditions</span>
                </Link>

                <Link href={"/"} className="flex  items-center">
                  <GoDotFill />
                  <span>Contact Us</span>
                </Link>
              </section>
            </section>
          </aside>
        </section>
      </section>
    );
}
