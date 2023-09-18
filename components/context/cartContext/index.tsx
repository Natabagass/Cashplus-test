import { reducer } from "@/features/cart/data/reducer";
import { getCookie, setCookie } from "cookies-next";
import { ReactNode, createContext, useEffect, useReducer } from "react";

export const CartContext = createContext({} as any);

interface Props {
    children: ReactNode
}

const CartProvider = ({ children }: Props) => {
    const [cartDatas, dispatch] = useReducer(reducer, JSON.parse(getCookie("cart") ?? "[]"));

    useEffect(() => {
        setCookie("cart", JSON.stringify(cartDatas))
    }, [cartDatas])

    return (
        <CartContext.Provider value={{ cartDatas, dispatch }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;