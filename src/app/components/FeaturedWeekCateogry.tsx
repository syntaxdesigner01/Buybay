import React from 'react'
import SectionTitleCard from './SectionTitleCard'
import FeaturedWeekCard from './FeaturedWeekCard';

export default function FeaturedWeekCateogry() {
  return (
    <section className='bg-background py-20 px-10 mb-20'>
      <SectionTitleCard
        HeaderText="This Week’s Featured "
        Position="start"
        Text="Shop By Category "
      />

      <FeaturedWeekCard />
    </section>
  );
}
