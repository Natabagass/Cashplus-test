"use client"
import Image from "next/image";
import BCA from "@/img/BCA.png"
import BNI from "@/img/BNI.png"
import BRI from "@/img/BRI.png"
import Mandiri from "@/img/Mandiri.png"
import CIMB from "@/img/CIMB.png"
import { SlArrowRight } from "react-icons/sl"
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import HeadSeo from "@/utils/head";

const Payment = () => {
    const router = useRouter()
    return (
        <>
            <HeadSeo
                siteTitle="Payment"
                title='Infruit'
                description="Mari kurangi food waste"
                imags={''}
                canonical={'/payment'}
            />
            <div className="mt-32 font-jakarta-sans">
                <div className="flex flex-col w-full">
                    <h1 className="font-bold flex justify-center text-3xl">Pilih Pembayaran</h1>

                    <div className="mx-44 my-10">
                        <hr className="w-full  border-lite-dark-gray" />
                        <div className="px-5">
                            <div onClick={() => {
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'Pesanan Berhasil Dibuat',
                                    showConfirmButton: false,
                                    timer: 1500
                                }).then(res => {
                                    if (res.isDismissed) {
                                        router.push(`/history`)
                                    }
                                })
                            }
                            } className="flex flex-row justify-between items-center">
                                <div className="flex flex-row my-8 items-center">
                                    <Image src={BCA} alt="BCA" height={100} width={100} />
                                    <h1 className="font-bold text-xl ml-5">Bank BCA</h1>
                                </div>
                                <SlArrowRight className="text-3xl text-lite-dark-gray" />
                            </div>
                        </div>

                        <hr className="w-full  border-lite-dark-gray" />
                        <div className="px-5">
                            <div className="flex flex-row justify-between items-center">
                                <div className="flex flex-row my-8 items-center">
                                    <Image src={Mandiri} alt="Mandiri" height={100} width={100} />
                                    <h1 className="font-bold text-xl ml-5">Bank Mandiri</h1>
                                </div>
                                <SlArrowRight className="text-3xl text-lite-dark-gray" />
                            </div>
                        </div>

                        <hr className="w-full  border-lite-dark-gray" />
                        <div className="px-5">
                            <div className="flex flex-row justify-between items-center">
                                <div className="flex flex-row my-8 items-center">
                                    <Image src={BNI} alt="BNI" height={100} width={100} />
                                    <h1 className="font-bold text-xl ml-5">Bank BNI</h1>
                                </div>
                                <SlArrowRight className="text-3xl text-lite-dark-gray" />
                            </div>
                        </div>

                        <hr className="w-full  border-lite-dark-gray" />
                        <div className="px-5">
                            <div className="flex flex-row justify-between items-center">
                                <div className="flex flex-row my-8 items-center">
                                    <Image src={BRI} alt="BRI" height={100} width={100} />
                                    <h1 className="font-bold text-xl ml-5">Bank BRI</h1>
                                </div>
                                <SlArrowRight className="text-3xl text-lite-dark-gray" />
                            </div>
                        </div>

                        <hr className="w-full  border-lite-dark-gray" />
                        <div className="px-5">
                            <div className="flex flex-row justify-between items-center">
                                <div className="flex flex-row my-8 items-center">
                                    <Image src={CIMB} alt="CIMB" height={100} width={100} />
                                    <h1 className="font-bold text-xl ml-5">Bank CIMB</h1>
                                </div>
                                <SlArrowRight className="text-3xl text-lite-dark-gray" />
                            </div>
                        </div>
                        <hr className="w-full  border-lite-dark-gray" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Payment;