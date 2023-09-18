export interface Fruit {
    data: {
        data: {
            data: [
                {
                    name: string,
                    id: number,
                    weight: number,
                    stock: number,
                    condition: string,
                    img: string,
                    price: number,
                    place: string,
                    sold: number,
                    rating: 5,
                    category_id: number,
                    discount: number,
                    category: {
                        id: number,
                        name: string,
                    }
                }
            ]
        }
    }
}

export interface Props {
    name: string,
    id: number,
    weight: number,
    stock: number,
    condition: string,
    img: string,
    price: number,
    place: string,
    sold: number,
    rating: 5,
    category_id: number,
    discount: number,
    category: {
        id: number,
        name: string,
    }
}

export interface PropsKategori {
    data: {
        name: string,
        id: number,
        weight: number,
        stock: number,
        condition: string,
        img: string,
        price: number,
        place: string,
        sold: number,
        rating: 5,
        category_id: number,
        discount: number,
        category: {
            id: number,
            name: string,
        }
    }
}

export interface Cart {
    data: {
        name: string,
        count: number,
        id: number,
        weight: number,
        stock: number,
        condition: string,
        img: string,
        price: number,
        place: string,
        sold: number,
        rating: 5,
        category_id: number,
        discount: number,
        category: {
            id: number,
            name: string,
        }
    }
}