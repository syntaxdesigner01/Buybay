import React from 'react'
import { AllProductCategoryCardImage } from './PopularCategoryCard';
import StarCount from './StarCount';
import { DataType } from '@/utils/products';



export default function ProductCard({image,name,description,stars,price,oldPrice}:DataType) {
  return (
    <section>
      <AllProductCategoryCardImage image={image} />
      <section>
        <p className="text-[13px]">{name} </p>
        <h1 className="font-semibold text-md">{description}</h1>
        <StarCount Count={stars} />
        <section className="flex gap-6">
          <aside>{price}</aside>
          <aside>{oldPrice && <del>{oldPrice}</del>}</aside>
        </section>
      </section>
    </section>
  );
}
