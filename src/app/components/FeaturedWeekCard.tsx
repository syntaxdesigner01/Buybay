import React from "react";
import StarCount from "./StarCount";
// import Image from "next/image";
import Button from "./Button";

export default function FeaturedWeekCard() {
  return (
    <section className="mt-20">
      <section className="flex w-[40%] bg-white p-4 items-center">
        <aside className="flex flex-col gap-4">
          <h1 className="text-2xl font-semibold">
            Vera Bradly Straw Tote Bags
          </h1>
          <div className="flex gap-4">
            <p> $65.00</p>
            <del> $89.00</del>
          </div>

          <StarCount Count={5} />

          <Button Width="60%" Link="" Text="Shop now" Pointer />
        </aside>

        <aside className="w-[70%]">
          <img
            src={"/Products/prodcut-9.png"}
            alt=""
            className="w-[200px]"
          />
        </aside>
      </section>
    </section>
  );
}
