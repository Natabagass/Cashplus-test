import React, { createContext, useContext, useReducer, ReactNode } from 'react';

interface Product {
    id: number;
    name: string;
    price: number;
}

interface CartState {
    items: Product[];
}

interface CartContextType {
    state: CartState;
    dispatch: React.Dispatch<CartAction>;
}

type CartAction =
    | { type: 'ADD_TO_CART'; payload: Product }
    | { type: 'REMOVE_FROM_CART'; payload: Product };

const initialState: CartState = {
    items: [],
};

const CartContext = createContext<CartContextType | undefined>(undefined);

const cartReducer = (state: CartState, action: CartAction): CartState => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                items: [...state.items, action.payload],
            };
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                items: state.items.filter((item) => item.id !== action.payload.id),
            };
        default:
            return state;
    }
};

export function CartProvider({ children }: { children: ReactNode }) {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
}
