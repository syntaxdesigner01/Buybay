import Image from 'next/image';
import React from 'react'

export default function Adsection() {
  return (
    <section className="mt-[4%] mb-20 flex justify-center items-center w-full">
      <Image src={'/Ads.png'} alt='' width={700} height={700} />
    </section>
  );
}
