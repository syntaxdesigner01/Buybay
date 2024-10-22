import HomeTopBar from '../components/HomeTopBar'
import Navbar from '../components/Navbar'
import HomeHeader from '../components/HomeHeader'
import GeneralCategoryDisplay from '../components/GeneralCategoryDisplay'
import PopularCategoryDisplay from '../components/PopularCategoryDisplay'


export default function HomePage() {
  return (
    <section className='px-10 '>
      <HomeTopBar/>
      <Navbar/>
      <HomeHeader/>
      <GeneralCategoryDisplay/>
      <PopularCategoryDisplay/>
    </section>
  )
}
 