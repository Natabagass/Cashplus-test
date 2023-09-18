"use client"
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { IoPersonCircle } from "react-icons/io5"
import Image from "next/image";
import logo from "@/img/logoInfruit.png"
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useRouter } from "next/router";
import { deleteCookie, getCookie } from "cookies-next";
import { BiTime } from "react-icons/bi";
import { CartContext } from "@/context/cartContext";

const Navbar = () => {
    const { cartDatas } = useContext(CartContext)
    const token = getCookie('auth')
    const router = useRouter()
    const [isScrolled, setIsScrolled] = useState<Boolean>(false);
    const handleLogout = async () => {
        deleteCookie('auth')
        setTimeout(() => {
            router.push('/')
        }, 200)
    }
    useEffect(() => {
        const handleScroll = () => {
            const isTop = window.scrollY < 50;
            setIsScrolled(!isTop);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className={`${router.pathname === "/masuk" || router.pathname === "/daftar" ? 'hidden' : 'flex'}`}>
            <div className={`${router.pathname !== "/" ? 'bg-white shadow-xl' : 'bg-transparent'} ${isScrolled ? 'bg-white transition-all duration-300 shadow-sm scroll-smooth' : 'bg-transparent shadow-none'} flex top-0 fixed z-30 justify-around items-center py-3 w-full flex-row`}>
                <Link href={"/"}>
                    <div className="relative w-[80px] mobile:w-[100px] h-[60px] flex justify-center">
                        <Image
                            src={logo}
                            alt='Logo Infruit'
                            style={{ objectPosition: 'center', objectFit: 'contain' }}
                            fill
                            className="ml-5 pb-2 mobile:pb-3"
                        />
                    </div>
                </Link>

                <div className="flex flex-row justify-around w-full items-center">
                    <div className="flex w-full flex-row justify-center sm:justify-end items-center">
                        <Link href='/produk' className={`${router.asPath !== "/" ? 'text-dark-gray' : `${isScrolled ? 'text-dark-gray' : 'text-white'}`} ml-8 mobile:ml-0 mr-1 mobile:mr-2`}>Produk</Link>
                        <Link href={"/cart"} className="flex flex-row">
                            <div
                                className={`${router.asPath !== "/" ? 'text-dark-gray' : `${isScrolled ? 'text-dark-gray' : 'text-white'}`} text-xl ml-3 mobile:ml-5 items-center`}>
                                <AiOutlineShoppingCart />
                            </div>
                            <div className="ml-7 -mt-3 absolute">
                                {
                                    cartDatas?.length > 0 &&
                                    <div className="bg-lightRed text-xs text-white py-1 px-2 rounded-full">
                                        {cartDatas?.length}
                                    </div>
                                }
                            </div>
                        </Link>
                        <Link href="/history" className={`${token ? 'flex' : 'hidden'} ${router.asPath !== "/" ? 'text-dark-gray' : `${isScrolled ? 'text-dark-gray' : 'text-white'}`} text-xl ml-5 mobile:ml-5 items-center`}><BiTime /></Link>
                    </div>

                    <div className="flex w-[85%] mboile:w-[70%] sm:w-[45%] lg:w-[30%] xl:w-[20%] flex-row items-center justify-center">
                        <div>
                            {
                                token ?
                                    <>
                                        <div className='flex flex-row items-center'>
                                            <IoPersonCircle className='text-3xl text-lightOrange mr-2 sm:mr-5' />
                                            <button onClick={handleLogout} className={`${isScrolled ? 'text-dark-green hover:text-white' : 'text-dark-green hover:text-white'} hover:bg-dark-green transition-all duration-300 py-1 sm:py-2 px-2 sm:px-3 mr-3 border-dark-green border-2 font-semibold text-sm rounded-xl `}>
                                                <h1>Keluar</h1>
                                            </button>
                                        </div>
                                    </>
                                    :
                                    <div>
                                        <button className={`${router.asPath !== "/" ? 'text-dark-gray hover:text-white' : `${isScrolled ? 'text-dark-green hover:text-white' : 'text-white hover:text-white'} `} hover:bg-dark-green transition-all duration-300 py-1 sm:py-2 px-2 sm:px-3 mr-1 mobile:mr-3 border-dark-green border-2 font-semibold text-sm rounded-xl `}>
                                            <Link href="/masuk">Masuk</Link>
                                        </button>
                                        <button className={`${router.asPath !== "/" ? 'text-dark-gray hover:text-dark-gray' : `${isScrolled ? 'text-dark-green hover:text-dark-green' : 'text-white'}`} py-1 sm:py-2 px-2 sm:px-3 hover:bg-transparent hover:border-dark-green border-2 border-dark-green bg-dark-green font-semibold text-sm text-white rounded-xl`}>
                                            <Link href="/daftar">
                                                Daftar
                                            </Link>
                                        </button>
                                    </div>
                            }
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Navbar;