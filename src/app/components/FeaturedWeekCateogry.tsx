import React from 'react'
import SectionTitleCard from './SectionTitleCard'
import FeaturedWeekCard from './FeaturedWeekCard';
import Image from 'next/image';

export default function FeaturedWeekCateogry() {
  return (
    <section className="bg-background pt-20 pb-28 px-10 mb-20 w-full">
      <SectionTitleCard
        HeaderText="This Week’s Featured "
        Position="start"
        Text="Shop By Category "
      />

      <section className="flex w-full gap-5 justify-center items-center ">
        <FeaturedWeekCard
          Text="Vera Bradly Straw Tote Bags"
          Price="$65.00"
          Old_Price="$89.00"
          image="prodcut-9.png"
          starCount={5}
        />
        <FeaturedWeekCard
          Text="Gucci Women’s Red Bag"
          Price=" $75.00"
          Old_Price="$90.00"
          image="prodcut-10.png"
          starCount={5}
        />
        <FeaturedWeekCard
          Text="Men’s Jacket Premium Cotton "
          Price="$65.00"
          Old_Price="$79.00"
          image="prodcut-8.png"
          starCount={5}
        />
      </section>

      <section className='relative top-[12vh]'>
        <Image src={"/icons/featuredweekFooter.png"} alt='logo' width={70} height={70} />
      </section>
    </section>
  );
}
