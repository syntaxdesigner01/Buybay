import React from "react";
import SectionTitleCard from "./SectionTitleCard";
import ProductCard from "./ProductCard";
import Image from "next/image";
import Button from "./Button";

export default function TrendingArrivalsCategory() {
  return (
    <section className="mb-20 flex justify-between w-full items-center relative ">
      <section className="">
        <SectionTitleCard
          HeaderText="Trending Arrivals "
          Position="start"
          Text="More To Discover "
        />

        <section className="flex gap-10 pt-20 w-[60%]">
          <ProductCard
            description="Whitetails Women’s Open Sky"
            id={1}
            image="Setwell_Groom_Suits_for_Wedding_2023_Mens_Slim_Fit_Fashion_Tuxedo_Dress_Suit_for_Party_ST-XZ009__1_-removebg-preview 1.png"
            price=" $340.00"
            stars={5}
            oldPrice="$475.00"
            name="Whitetails store"
            Width="250px"
            BoxWidth="25vw"
            BoxHeight="50vh"
          />
          <ProductCard
            description="Whitetails Women’s Open Sky"
            id={1}
            image="Setwell_Groom_Suits_for_Wedding_2023_Mens_Slim_Fit_Fashion_Tuxedo_Dress_Suit_for_Party_ST-XZ009__1_-removebg-preview 2.png"
            price=" $340.00"
            stars={5}
            oldPrice="$475.00"
            name="Whitetails store"
            Width="250px"
            BoxWidth="25vw"
            BoxHeight="50vh"
          />
        </section>
      </section>

      <section className="w-[40%] h-[50vh] relative top-[-9.5vw] ">
        <Image
          src={`/It's Man Crush Monday, and Philly Model Zaire Is Our Gift To You (You're Welcome!)  _ Essence 1.png`}
          alt=""
          className=" w-[40vw]"
          width={400}
          height={400}
        />

        <section className="relative top-[-15vw] left-10 text-white flex flex-col gap-4">
          <h1 className="text-4xl w-2/3 font-semibold ">
            Cole Haan Men's Slim Fit Suit
          </h1>
          <Button
            Link=""
            Pointer
            Text="Shop now"
            Style={{ border: "white 1px solid", fontSize: "14px",padding:'4px 0' }}
            Width="40%"
          />
        </section>
      </section>
    </section>
  );
}
