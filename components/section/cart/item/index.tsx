import CartCard from "../card";
import { useContext, useMemo } from "react";
import { CartContext } from "@/context/cartContext";
import { getCookie } from "cookies-next";
import Link from "next/link";
import { rupiahFormatter } from "@/utils/rupiahFormatter";
import Button from "@/button";
import Swal from "sweetalert2";
import postCart from "@/features/service/data/postCart";

const CartList = () => {
    const { cartDatas } = useContext(CartContext)
    const token = getCookie('auth')

    const subtotal = useMemo(() => {
        let total = 0

        cartDatas.map((data: any) => {
            total += data.price * data.count
        })

        return total
    }, [cartDatas])
    
    const fruitIds = useMemo(() => {
        // also check amount of fruit
        let ids: number[] = []

        cartDatas.forEach((data: any) => {
            for(let i = 0; i < data.count; i++) {
                ids.push(data.id)
            }
        });

        return ids
    }, [cartDatas])

    const onBuyItems = async () => {
        if (!token) {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Silakan login terlebih dahulu',
                showConfirmButton: false,
                timer: 1500
            })
            return
        }

        const res = await postCart(1, 'bca', fruitIds)

        if (res.status === 200) {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Transaksi Berhasil',
                showConfirmButton: false,
                timer: 1500
            })
            return
        } else {
            console.log(res)
            const errorMessage = Object.keys(res?.response.data.message)
                .map((key) => res?.response.data?.message[key][0])
                .join(', ')

            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Transaksi Gagal',
                html: `<p class="text-red-500">${errorMessage}</p>`,
                showConfirmButton: true,
            })
        }
    }

    return (
        <div className="mx-mobile md:mx-tablet font-jakarta-sans">
            <div className="w-full flex flex-col lg:flex-row justify-between mb-20 mt-32">
                <div className="w-full h-full flex flex-col">
                    <h1 className="text-3xl font-bold">Keranjang</h1>
                    <hr className="w-full my-5" />
                    <div className="w-full flex flex-col">
                        {
                            cartDatas?.length > 0 ?
                                cartDatas?.map((data: any, index: number) => {
                                    return (
                                        <CartCard
                                            key={index}
                                            data={data}
                                        />
                                    )
                                })
                                :
                                <div className="w-full flex flex-col justify-center mt-32 items-center mx-auto">
                                    <h1 className="text-3xl font-bold">Wah, Cart belum ada...</h1>
                                    <Link href={"/produk"} className="bg-dark-green rounded-xl text-white p-3 mt-10">
                                        <h1 className="text-2xl font-bold">Beli Produk!</h1>
                                    </Link>
                                </div>
                        }
                    </div>
                </div>
                <div className="w-full lg:w-[30%] flex justify-center items-start mt-10 ml-0 lg:ml-10 xl:ml-20">
                    <div className="border-2 w-full rounded-xl font-jakarta-sans sticky top-24 p-4">
                        <h1 className="text-blackLite text-base lg:text-lg font-bold">Ringkasan Belanja</h1>
                        <div className="my-4 text-sm font-semibold text-lite-dark-gray flex items-center flex-row justify-between">
                            <h1>Total Harga</h1>
                            <h3>{rupiahFormatter(subtotal)}</h3>
                        </div>
                        <hr className="w-full my-3" />
                        <Button onClick={onBuyItems} disabled={token ? false : true} className="w-full flex disabled:bg-gray-300 justify-center p-2 bg-dark-green text-white font-semibold">
                            Beli
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartList;
