import { useQuery } from "react-query"
import getBuah from "@/features/service/data/getBuah";
import Filter from "@/section/produk/filter";
import PaginateBuah from "@/section/produk/paginateBuah";

const Produk = () => {
    const { data, error } = useQuery('products', getBuah);

    return (
        <div>
            <section>
                <PaginateBuah {...data} />
            </section>
        </div>
    )
}

export default Produk;