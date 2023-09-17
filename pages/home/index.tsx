import { useQuery } from "react-query"
import ListBuah from "@/section/home/buah";
import HeroHome from "@/section/home/hero"
import Spesial from "@/section/home/spesial";
import getBuah from "@/features/service/data/getBuah";
import { NextPage } from "next";
import HeadSeo from "@/utils/head";

const Home: NextPage = () => {
    const { data, error } = useQuery('products', getBuah);

    return (
        <>
            <HeadSeo
                siteTitle="Home"
                title='Infruit'
                description="Mari kurangi food waste"
                imags={''}
                canonical={'/home'}
            />
            <section id="HeroHome">
                <HeroHome />
            </section>

            <section id="specialHome">
                <Spesial />
            </section>

            <section>
                <ListBuah {...data} />
            </section>
        </>
    )
}

export default Home;