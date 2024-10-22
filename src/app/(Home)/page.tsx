
import React from 'react'
import HomeTopBar from '../components/HomeTopBar'
import Navbar from '../components/Navbar'
import HomeHeader from '../components/HomeHeader'
import GeneralCategoryDisplay from '../components/GeneralCategoryDisplay'


export default function HomePage() {
  return (
    <section className='px-10 '>
      <HomeTopBar/>
      <Navbar/>
      <HomeHeader/>
      <GeneralCategoryDisplay/>
    </section>
  )
}
