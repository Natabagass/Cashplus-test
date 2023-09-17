import Hero from '@/section/landing/hero'
import Keuntungan from '@/section/landing/keuntungan'
import VisiMisi from '@/section/landing/visiMisi'
import JoinUs from '@/section/landing/joinUs'
import logo from '@/img/logoInfruit.png'
import { NextPage } from 'next'
import HeadSeo from '@/utils/head'

const Landing: NextPage = () => {
  return (
    <>
      <HeadSeo
        siteTitle="Infruit"
        title="Mari kurangi food waste"
        description="test" 
        imags={''} 
        canonical={''}    
        />

      <div>
        {/* Section Hero */}
        <section id='heroSection'>
          <Hero />
        </section>

        {/* Section Keuntungan */}
        <section id='keuntunganSection'>
          <Keuntungan />
        </section>

        {/* Section Visi Misi */}
        <section id='visiMisiSection'>
          <VisiMisi />
        </section>

        {/* Section Join Us */}
        <section id='joinUsSection'>
          <JoinUs />
        </section>
      </div>
    </>
  )
}

export default Landing;