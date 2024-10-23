import HomeTopBar from "../components/HomeTopBar";
import Navbar from "../components/Navbar";
import HomeHeader from "../components/HomeHeader";
import GeneralCategoryDisplay from "../components/GeneralCategoryDisplay";
import PopularCategoryDisplay from "../components/PopularCategoryDisplay";
import AllProductCategoryDisplay from "../components/AllProductCategoryDisplay";
import FeaturedWeekCateogry from "../components/FeaturedWeekCateogry";
import TrendingArrivals from "../components/TrendingArrivals";

export default function HomePage() {
  return (
    <>
      <section className="px-10 ">
        <HomeTopBar />
        <Navbar />
        <HomeHeader />
        <GeneralCategoryDisplay />
        <PopularCategoryDisplay />
        <AllProductCategoryDisplay />
      </section>

      <FeaturedWeekCateogry />

      <section className="px-10  py-20">
        <TrendingArrivals/>
      </section>
    </>
  );
}
