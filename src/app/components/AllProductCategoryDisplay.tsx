import React from "react";
import SectionTitleCard from "./SectionTitleCard";
import { GoDotFill } from "react-icons/go";
import { allProducts, DataType } from "@/utils/products";
import { AllProductCategoryCardImage } from "./PopularCategoryCard";
import StarCount from "./StarCount";
import ProductCard from "./ProductCard";

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

      <section className="mt-10 grid grid-cols-4 justify-center items-center gap-y-10 gap-x-12   w-full">
        {allProducts.map((data: DataType) => {
          return (
            <section
              className="w-[22vw] flex flex-col gap-2 justify-center items-start"
              key={data.id}
            >
              <ProductCard
                id={data.id}
                image={data?.image}
                name={data.name}
                description={data.description}
                stars={data.stars}
                price={data.price}
                oldPrice={data.oldPrice}
              />
            </section>
          );
        })}
      </section>
    </section>
  );
}
