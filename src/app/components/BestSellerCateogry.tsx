import React from 'react'
import SectionTitleCard from './SectionTitleCard'
import ProductCard from './ProductCard';
import Button from './Button';

export default function BestSellerCateogry() {
  return (
    <section className="mt-10 mb-20">
      <SectionTitleCard
        HeaderText="This Week’s Featured "
        Position="start"
        Text="Best Seller This Week’s"
      />

      <section className="flex gap-4 mt-10">
        <ProductCard
          description="Fit Wild Jeans"
          id={1}
          image="Cotton_Stretch__Denim_Smart_Elastic_Jeans_Straight_Regular_Trousers_Men_s_Jeans__Size_28-40_-_6015_black___38__1_-removebg-preview 2.png"
          name="Mickason Men's Ripped Slim "
          stars={5}
          price=" $50.00"
        />
        <ProductCard
          description="Wrangler Authentics Essentials Men's Slim-Fit Stretch Jean"
          id={2}
          image="Cotton_Stretch__Denim_Smart_Elastic_Jeans_Straight_Regular_Trousers_Men_s_Jeans__Size_28-40_-_6015_black___38-removebg-preview 2.png"
          name=""
          stars={5}
          price=" $75.00"
          oldPrice="$79.00"
        />

        <ProductCard
          description="Vince Women's Tapestry Floral Popover Blouse"
          id={3}
          image="Cotton_Stretch__Denim_Smart_Elastic_Jeans_Straight_Regular_Trousers_Men_s_Jeans__Size_28-40_-_6015_black___38__1_-removebg-preview 2-1.png"
          name=" "
          stars={5}
          price=" $38.00"
        />

        <ProductCard
          description="Vince Women's Pleated Cuff Crew Nk Blouse"
          id={4}
          image="Cotton_Stretch__Denim_Smart_Elastic_Jeans_Straight_Regular_Trousers_Men_s_Jeans__Size_28-40_-_6015_black___38-removebg-preview 2-1.png"
          name=" "
          stars={5}
          price=" $105.00"
          oldPrice="$120.00"
        />
      </section>

      <section
        className="my-20 flex justify-center items-center"
        
      >
        <Button
          Link=""
          Pointer={false}
          Text="Shop All Products"
          Style={{ padding: "10px 10px", fontSize: "16px" }}
          Width="30%"
        />
      </section>
    </section>
  );
}
