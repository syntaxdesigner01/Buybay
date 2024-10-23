import React from "react";
import StarCount from "./StarCount";
import Button from "./Button";

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
    <section className="mt-20 flex justify-between w-full gap-4">
      <section className="flex w-[40%] bg-white p-4 items-center shadow-md rounded-sm">
        <aside className="flex flex-col gap-4">
          <h1 className="text-2xl font-semibold">
            {Text}
          </h1>
          <div className="flex gap-4">
            <p>{Price}</p>
            <del> {Old_Price}</del>
          </div>

          <StarCount Count={starCount} />

          <Button Width="60%" Link="" Text="Shop now" Pointer={true} />
        </aside>

        <aside className="w-[70%]">
          <img
            src={`${baseUrl}/${image}`}
            alt=""
            className="w-[200px]"
          />
        </aside>
      </section>
 
    </section>
  );
}
