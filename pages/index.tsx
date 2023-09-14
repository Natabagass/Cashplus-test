import Hero from '@/section/landing/hero'
import Keuntungan from '@/section/landing/keuntungan'
import VisiMisi from '@/section/landing/visiMisi'
import JoinUs from '@/section/landing/joinUs'


const Landing = () => {
  return (
    <div>
      {/* Section Hero */}
      <section id='heroSection'>
        <Hero />
      </section>

      {/* Section Keuntungan */ }
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
  )
}

export default Landing;