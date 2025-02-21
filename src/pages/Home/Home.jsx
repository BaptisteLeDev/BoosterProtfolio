import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt='hero banner' className='banner-img' />
        <div className="hero-caption">
          <img src={hero_title} alt='hero title' className='caption-img' />
          <p>Une capitaine de l'armée et son bataillon historique exclusivement composé d'Afro-Américaines défient les obstacles pour apporter de l'espoir au front pendant la Seconde Guerre mondiale. Confrontées à la discrimination, au sexisme et à leurs conditions de travail éprouvantes, elles se battent pour la liberté et la justice.</p>
          <div className="hero-btns">
            <button className='btn'><img src={play_icon} alt='play'/>Play</button>
            <button className='btn dark-btn'><img src={info_icon} alt='info'/>More Info</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home