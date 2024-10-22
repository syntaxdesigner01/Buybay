import React from "react";
import Button from "./Button";
// import GeneralCategoryCard from './GeneralCategoryCard'

export default function GeneralCategoryDisplay() {
  return (
    <section className="mb-20 flex gap-8 ">
      <section className="w-[30vw] ">
        <section className="flex items-center bg-background w-full px-4 justify-evenly">
          <aside className="capitalize font-semibold text-xl w-[50%] flex flex-col gap-y-4">
            <section>
              <h1>t-shirt tunic</h1>
              <h1>tops blouse</h1>
            </section>

            <Button Text="Shop now" Pointer={true} Link="" />
          </aside>

          <aside className="flex items-center w-[50%] relative left-[-3vw]">
            <img
              src="/category1/susan-wilkinson.png"
              alt=""
              className="w-[80px]"
            />
            <img
              src="/category1/category-2-8.png"
              alt=""
              className="w-[130px] "
            />
          </aside>
        </section>
      </section>

      <section className="w-[30vw]">
        <section className="flex items-center bg-background w-full px-4 justify-evenly">
          <aside className="capitalize font-semibold text-xl w-[50%] flex flex-col gap-y-4">
            <section>
              <h1>Satchel Tole</h1>
              <h1>Crossbody Bags</h1>
            </section>

            <Button Text="Shop now" Pointer={true} Link="" />
          </aside>

          <aside className="flex items-center w-[50%] relative left-[3vw] ">
            <img
              src="/category1/category-2-6.png"
              alt=""
              className="w-[130px]"
            />
          </aside>
        </section>
      </section>

      <section className="w-[30vw] ">
        <section className="flex items-center bg-background w-full px-4 justify-evenly">
          <aside className="capitalize font-semibold text-xl w-[50%] flex flex-col gap-y-4">
            <section>
              <h1>Men’s Tennis</h1>
              <h1>Walking Shoes</h1>
            </section>

            <Button Text="Shop now" Pointer={true} Link="" />
          </aside>

          <aside className="flex items-center w-[50%] relative left-[1vw] ">
            <img
              src="/category1/category-2-7.png"
              alt=""
              className="w-[200px] pt-10"
            />
          </aside>
        </section>
      </section>
    </section>
  );
}
