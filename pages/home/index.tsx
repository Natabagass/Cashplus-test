import HeroHome from "@/section/home/hero"
import Spesial from "@/section/home/spesial";

const Home = () => {
    return (
        <div>
            <section id="HeroHome">
                <HeroHome />
            </section>

            <section id="specialHome">
                <Spesial />
            </section>
        </div>
    )
}

export default Home;