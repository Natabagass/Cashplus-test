export interface receipt {
    id: number,
    amount: number,
    payment_info: string,
    payment_type: string,
    gross_amount: number,
    status: string,
    user: {
        username: string,
        email: string
    },
    product: {
        name: string,
        id: string,
        img: string,
    }
}