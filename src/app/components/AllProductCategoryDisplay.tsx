import React from "react";
import SectionTitleCard from "./SectionTitleCard";
import { GoDotFill } from "react-icons/go";

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
    </section>
  );
}
