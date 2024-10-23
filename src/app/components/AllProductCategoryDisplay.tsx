import React from "react";
import SectionTitleCard from "./SectionTitleCard";
import { GoDotFill } from "react-icons/go";
import { FaStar } from "react-icons/fa";
import { allProducts } from "@/utils/products";
import { AllProductCategoryCard } from "./PopularCategoryCard";
interface DataType {
  id: number;
  name: string;
  description: string; // Fixed the typo here ('desciption' to 'description')
  stars: number;
  price: string;
  oldPrice?: string;
  image: string;
}


export default function AllProductCategoryDisplay() {
  return (
    <section className="mb-20">
      <SectionTitleCard
        Text="All Product shop"
        HeaderText="Customer Favourite Style Product "
        Position="center"
      />

      <section className="flex items-center justify-center capitalize gap-4 text-Gray mt-10">
        <div className="text-textTitle">
          <p>all collections</p>
        </div>
        <div className="flex items-center">
          <GoDotFill />
          <span>shoes</span>
        </div>

        <div className="flex items-center">
          <GoDotFill />
          <span>clothing</span>
        </div>

        <div className="flex items-center">
          <GoDotFill />
          <span>bags</span>
        </div>
      </section>

      <section className="mt-10 grid grid-cols-4 justify-center items-center gap-y-10 gap-x-12 ml-4  w-full">
        {allProducts.map((data: DataType) => {
          return (
            <section
              className="w-[18vw] flex flex-col gap-2 justify-center items-start"
              key={data.id}
            >
              <AllProductCategoryCard image={data?.image} />
              <section>
                <p className="text-[13px]">{data.name} </p>
                <h1 className="font-semibold text-md">{data.description}</h1>
                <div className="flex gap-4 text-Yellow">
                  <span>
                    <FaStar />
                  </span>
                  <span>
                    <FaStar />
                  </span>
                  <span>
                    <FaStar />
                  </span>
                  <span>
                    <FaStar />
                  </span>
                  <span>
                    <FaStar />
                  </span>
                </div>

                <section className="flex gap-6">
                  <aside>{data.price}</aside>
                  <aside>
                    {data.oldPrice && <del>{data?.oldPrice}</del>}
                  </aside>
                </section>
              </section>
            </section>
          );
        })}
      </section>
    </section>
  );
}
