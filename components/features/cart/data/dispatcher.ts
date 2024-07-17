import { Props } from "@/interface/data/fruit"

const add_to_cart = (state:any, cartItem:Props) => {
    let index = state.findIndex((data: {id: number}) => {
        return data.id === cartItem.id
    })

    const newArray = [...state]

    if (index === -1)
        newArray.push({ ...cartItem })
    else {
        newArray[index].count += 1
    }

    return newArray
}

const remove_from_cart = (state: any, id: number) => {
    let index = state.findIndex((data: {id: number}) => data.id === id)

    if(index === -1) return

    let newArray = [...state]

    if(newArray[index].count > 1)
        newArray[index].count -= 1
    else 
        newArray.splice(index, 1)

    return newArray
}

const remove_all_item_by_id = (state: any, id: number) => {
    let index = state.findIndex((data: {id: number}) => data.id === id)

    if(index === -1) return

    let newArray = [...state]

    newArray.splice(index, 1)

    return newArray
}

export { 
    add_to_cart,
    remove_from_cart,
    remove_all_item_by_id
}
