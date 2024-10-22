import Image from 'next/image'
import React from 'react'

export default function SectionTitleCard({
  Text,
  Position,
}: {
  Text: string;
  Position: string;
}) {
  return (
    <section className={`flex flex-col justify-center items-${Position} w-full`}>
      <p className="text-textTitle font-semibold text-xl">{Text} </p>
      <div className="relative top-[-2.8vh] left-3">
        <Image src={"/icons/lineTittle.svg"} alt="" width={100} height={100} />
      </div>
    </section>
  );
}
