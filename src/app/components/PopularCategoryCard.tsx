import React from 'react'

export  function PopularCategoryCard({image}:{image:string}) {
const baseUrl = `/category1`

  return (
    <section className="bg-imageCardBg w-[18vw] h-[35vh] flex justify-center items-center">
      <img src={`${baseUrl}/${image}`} alt="" />
    </section>
  );
}



export  function AllProductCategoryCardImage({
  image,
  Width,
  BoxWidth,
  BoxHeight
}: {
  image: string;
  Width?: string;
  BoxWidth?: string;
  BoxHeight?: string;
}) {
  const baseUrl = `/Products`;

  return (
    <section
      className={`bg-imageCardBg h-[40vh] flex justify-center items-center`}
      style={{ width: BoxWidth, height: BoxHeight }}
    >
      <img src={`${baseUrl}/${image}`} alt="" style={{ width: Width }} />
    </section>
  );
}
