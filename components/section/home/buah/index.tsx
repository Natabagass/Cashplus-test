import CardBuah from "@/features/components/card";
import { Fruit } from "@/interface/data/fruit";

const ListBuah = (props: Fruit) => {
    return (
        <div className="mt-16 mx-content">
            <h2 className="font-semibold text-2xl">Rekomendasi Buah Buat Kamu</h2>

            <div className="grid grid-cols-5 mt-12 grid-rows-2">
                {
                    props.data?.data.data.slice(0, 10).map((data) => {
                        return (
                            <CardBuah
                                id={data.id}
                                category={data.category}
                                category_id={data.category_id}
                                key={data.id}
                                discount={data.discount}
                                rating={data.rating}
                                price={data.price}
                                img={data.img}
                                name={data.name}
                                place={data.place}
                                sold={data.sold}
                                weight={data.weight}
                                stock={data.stock}
                                condition={data.condition}
                            />
                        )
                    })
                }
            </div>
        </div>
    );
}

export default ListBuah;