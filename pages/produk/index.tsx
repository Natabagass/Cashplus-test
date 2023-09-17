import { useQuery } from "react-query"
import getBuah from "@/features/service/data/getBuah";
import Filter from "@/section/produk/filter";
import PaginateBuah from "@/section/produk/paginateBuah";
import { NextPage } from "next";
import HeadSeo from "@/utils/head";

const Produk: NextPage = () => {
    const { data, error } = useQuery('products', getBuah);

    return (
        <>
            <HeadSeo
                siteTitle="Produk"
                title="Infruit"
                description="Mari kurangi food waste"
                canonical={'/produk'} 
                imags={""} 
            />
            <div>
                <section>
                    <PaginateBuah {...data} />
                </section>
            </div>
        </>
    )
}

export default Produk;