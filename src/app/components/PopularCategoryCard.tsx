import React from 'react'

export default function PopularCategoryCard({image}:{image:string}) {
const baseUrl = `/category1`

  return (
    <section className="bg-imageCardBg w-[18vw] h-[35vh] flex justify-center items-center">
      <img src={`${baseUrl}/${image}`} alt="" />
    </section>
  );
}
