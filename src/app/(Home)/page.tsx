
import React from 'react'
import HomeTopBar from '../components/HomeTopBar'
import Navbar from '../components/Navbar'
import HomeHeader from '../components/HomeHeader'


export default function HomePage() {
  return (
    <section className='px-10 '>
      <HomeTopBar/>
      <Navbar/>
      <HomeHeader/>
    </section>
  )
}
