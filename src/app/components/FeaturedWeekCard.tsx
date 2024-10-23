import React from "react";
import StarCount from "./StarCount";
import Button from "./Button";
import Image from "next/image";

interface DataType{
    image: string;
    Text: string;
    Price: string;
    Old_Price: string;
    starCount: number;
}

export default function FeaturedWeekCard({image,Text,Price,Old_Price,starCount}:DataType) {
    const baseUrl = `/Products`;
  return (
    <section className="mt-20 w-[40%] h-[35vh]">
      <section className="flex w-full bg-white p-4 items-center shadow-md rounded-sm">
        <aside className="flex flex-col gap-4">
          <h1 className="text-2xl font-semibold">{Text}</h1>
          <div className="flex gap-4">
            <p>{Price}</p>
            <del> {Old_Price}</del>
          </div>

          <StarCount Count={starCount} />

          <Button Width="70%" Link="" Text="Shop now" Pointer={true} />
        </aside>

        <aside className="w-[70%]    h-[35vh] ">
          <Image
            src={`${baseUrl}/${image}`}
            alt=""
            width={100}
            height={100}
            className="w-[200px]"
          />
        </aside>
      </section>
    </section>
  );
}
