import Image from 'next/image'
import React from 'react'

export default function LiveSupportComponent() {
  return (
    <section className="w-full flex justify-center mb-20">
      <section className=" flex w-[90%] justify-evenly items-center  shadow-md py-4 border">
        <section className="flex items-center gap-4 w-[20%] border-r-2 border-black">
          <aside>
            <Image src={"/icons/shipped 4.png"} alt="" width={50} height={50} />
          </aside>
          <aside className="flex flex-col gap-1">
            <h1 className="text-[15px] font-semibold">Free Delivery</h1>
            <p className=" text-[13px]">Money back guarantee </p>
          </aside>
        </section>

        <section className="flex items-center gap-4 w-[20%] border-r-2 border-black">
          <aside>
            <Image
              src={"/icons/dollar-sign 4.png"}
              alt=""
              width={30}
              height={30}
            />
          </aside>
          <aside className="flex flex-col gap-1">
            <h1 className="text-[15px] font-semibold">Return & Refund</h1>
            <p className=" text-[13px]">Orders from all items</p>
          </aside>
        </section>

        <section className="flex items-center gap-4 w-[20%] border-r-2 border-black">
          <aside>
            <Image
              src={"/icons/headphones 4.png"}
              alt=""
              width={40}
              height={40}
            />
          </aside>
          <aside className="flex flex-col gap-1">
            <h1 className="text-[15px] font-semibold">Support 24/7</h1>
            <p className=" text-[13px]">Contact us 24 hours a day</p>
          </aside>
        </section>

        <section className="flex items-center gap-4 w-[20%] ">
          <aside>
            <Image src={"/icons/link 4.png"} alt="" width={40} height={40} />
          </aside>
          <aside className="flex flex-col gap-1">
            <h1 className="text-[15px] font-semibold">Membership Discount </h1>
            <p className=" text-[13px]">Onevery order over $140.00</p>
          </aside>
        </section>
      </section>
    </section>
  );
}
