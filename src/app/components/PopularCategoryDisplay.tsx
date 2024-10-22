import React from 'react'
import SectionTitleCard from './SectionTitleCard'
import PopularCategoryCard from './PopularCategoryCard';

export default function PopularCategoryDisplay() {
  return (
    <section className="mb-20">
      <SectionTitleCard
        Text="Shop By Category"
        Position="center"
        HeaderText="Popular On The Buybay Store."
      />

      <section className="flex w-full justify-between items-center mt-10">
        <PopularCategoryCard image='category-2-2.png' />
        <PopularCategoryCard image='category-2-1.png' />
        <PopularCategoryCard image='category-2-3.png' />
        <PopularCategoryCard image='category-2-4.png' />
        <PopularCategoryCard image='category-2-5.png' />
      </section>
    </section>
  );
}
