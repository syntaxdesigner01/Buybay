import Image from 'next/image'
import React from 'react'

/**
 * @param Text - The tittle of the section
 * @param HeaderText - The header title text
 * @param Position - section display position [center, start , end]
 * @description This component handle the title of all the section
 * @returns 
 */

export default function SectionTitleCard({
  Text,
  Position,
  HeaderText,
}: {
  Text: string;
  Position: string;
  HeaderText: string;
}) {
  return (
    <section
      className={`flex flex-col justify-center items-${Position} w-full`}
    >
      <p className="text-textTitle font-semibold text-xl">{Text} </p>
      <div className="relative top-[-2.8vh] left-3">
        <Image src={"/icons/lineTittle.svg"} alt="" width={100} height={100} />
      </div>

      <section>
        <h1>{HeaderText}</h1>
      </section>
    </section>
  );
}
