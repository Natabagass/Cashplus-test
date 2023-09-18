import { CartContext } from "@/context/cartContext";
import { Cart, Fruit, PropsKategori } from "@/interface/data/fruit";
import { rupiahFormatter } from "@/utils/rupiahFormatter";
import Image from "next/image";
import { useContext } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";


const CartCard = (props: Cart) => {
    const { dispatch } = useContext(CartContext)

    const addToCart = () => {
        dispatch({
            type: 'add_to_cart',
            value: props.data
        })
    }

    const removeFromCart = () => {
        dispatch({
            type: 'remove_from_cart',
            id: props.data.id
        })
    }

    return (
        <div className="w-full my-10 font-jakarta-sans">
            <div className="w-full flex flex-row justify-between">
                <div className="flex flex-row">
                    <div className="relative w-[150px] h-[100px] lg:w-[250px] lg:h-[150px]">
                        <Image
                            className="rounded-xl"
                            fill
                            style={{ objectFit: 'cover', objectPosition: 'center' }}
                            src={props.data.img}
                            alt="Gambar Produk" />
                    </div>
                    <div className="flex ml-3 flex-col w-full justify-between">
                        <h1 className="font-bold text-xl">{props.data.name}</h1>
                        <h3 className="font-medium">{rupiahFormatter(props.data.price)}</h3>
                    </div>
                </div>
                <div className="flex flex-row items-center">
                    <div className="bg-whiteButton rounded-full items-center text-dark-green">
                        <button onClick={removeFromCart} className="p-1">
                            <AiOutlineMinus className="text-lg" />
                        </button>
                    </div>
                    <h1 className="mx-5">{props.data.count}</h1>
                    <div className="bg-whiteButton rounded-full items-center text-dark-green">
                        <button onClick={addToCart} className="p-1">
                            <AiOutlinePlus className="text-lg" />
                        </button>
                    </div>
                </div>
            </div>
            <hr className="w-full my-5" />
        </div>
    );
}

export default CartCard;