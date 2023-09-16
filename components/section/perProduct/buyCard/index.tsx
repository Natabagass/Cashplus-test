import Button from "@/button"
import { useCart } from "@/context/cartContext"
import postBuy from "@/features/service/data/postBuy"
import { Props, PropsKategori } from "@/interface/data/fruit"
import { rupiahFormatter } from "@/utils/rupiahFormatter"
import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import Swal from "sweetalert2"

const BuyCard = (props: Props) => {
    const router = useRouter()
    const [quantity, setQuantity] = useState(0)
    const [sum, setSum] = useState<number>(0)
    const [isLoading, setIsLoading] = useState(false)
    const [forms, setForms] = useState<{ amount: number, bank: string, product_id: number }>({
        amount: 0,
        bank: 'bca',
        product_id: props.id
    })

    useEffect(() => {
        setSum(quantity * props.price)
    }, [quantity, props.price])

    const handleBuy = async (e: { preventDefault: () => void }) => {
        e.preventDefault
        const { amount, bank, product_id } = forms
        setIsLoading(true)

        try {
            const res = await postBuy(bank, amount, product_id)

            if (res.status === 200) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Berhasil Mengisi jumlah buah!',
                    showConfirmButton: false,
                    timer: 1500
                }).then(res => {
                    if (res.isDismissed) {
                        router.push(`/payment`)
                    }
                })
            }
        } catch (err) {
            setIsLoading(false)
        }
    }
    return (
        <div className="w-full flex justify-center items-center">
            <div className="border-2 w-full rounded-3xl font-jakarta-sans border-lite-dark-gray p-4 lg:mt-0 mt-10">
                <h1 className="text-blackLite text-lg sm:text-2xl font-semibold">Atur Jumlah Buah</h1>
                <div className="my-4 text-sm flex items-center flex-row justify-between">

                    <input
                        type="number"
                        onChange={e => {
                            setForms({ ...forms, amount: e.target.valueAsNumber })
                            setQuantity(e.target.valueAsNumber)
                        }}
                        className="border-2 w-[60%] border-lite-dark-gray rounded-3xl p-1 pl-3 placeholder:text-sm"
                        name="amount"
                        id="amount"
                        placeholder="Jumlah Buah" />
                    <h3>Stok Total: <span className="font-bold text-blackLite">{props.stock}</span></h3>
                </div>
                <div className="flex flex-row items-center justify-between">
                    <h3 className="font-medium">Subtotal</h3>
                    <h1 className="font-bold text-2xl">{quantity > 0 ? rupiahFormatter(sum) : rupiahFormatter(0)}</h1>
                </div>
                <div className="flex flex-col w-full my-4">
                    <Button type="submit" isLoading={isLoading} onClick={handleBuy} className="border-4 rounded-xl font-semibold w-full p-1 text-dark-green hover:bg-dark-green hover:text-white border-dark-green">Beli Sekarang</Button>
                    <Button type="button" isLoading={isLoading} className="border-4 rounded-xl mt-2 font-semibold w-full p-1 bg-dark-green text-white hover:bg-white hover:text-dark-green border-dark-green">Tambahkan Keranjang</Button>
                </div>
            </div>
        </div>
    );
}

export default BuyCard;