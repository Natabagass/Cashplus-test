import getBuah from "@/features/service/data/getBuah";
import dynamic from "next/dynamic";
import { useQuery } from "react-query";
const CartList = dynamic(() => import('@/section/cart/item'), { ssr: false })

const Cart = () => {
    return (
        <div>
            <section>
                <CartList />
            </section>
        </div>
    );
}

export default Cart;