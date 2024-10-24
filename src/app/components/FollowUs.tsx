import Image from 'next/image'
import React from 'react'

export default function FollowUs() {
  return (
    <section className="mb-20 pt-10 w-full">
      <section className="flex items-center w-full justify-evenly">
        <Image src={"/Group 34479.png"} alt="user" width={230} height={140} />
        <Image src={"/Group 34480.png"} alt="user" width={230} height={140} />
        <Image src={"/Group 34952.png"} alt="user" width={230} height={140} />
        <Image src={"/Group 34482.png"} alt="user" width={230} height={140} />
        <Image src={"/Group 34483.png"} alt="user" width={230} height={140} />
      </section>
    </section>
  );
}
