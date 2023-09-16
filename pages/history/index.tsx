import getHistory from "@/features/service/data/getHistory";
import TemplateHistory from "@/section/history/template";
import HeadSeo from "@/utils/head";
import { useQuery } from "react-query";

const History = () => {
    const { data, error } = useQuery('products', getHistory);

    return (
        <>
            <HeadSeo
                siteTitle="InFruit"
                title='History'
                description="Mari kurangi food waste"
                imags={''}
                canonical={'/history'}
            />
            <section id="history">
                <TemplateHistory {...data} />
            </section>
        </>
    );
}

export default History;