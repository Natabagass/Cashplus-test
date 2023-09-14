import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "@/img/logoInfruit.png"
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState<Boolean>(false);
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
        <>
            <div className={`${isScrolled ? 'bg-white transition-all duration-300 shadow-sm scroll-smooth' : 'bg-transparent shadow-none'} flex top-0 fixed z-10 justify-around text-lite-dark-gray items-center py-3 w-full flex-row`}>
                <div className="w-[15%] flex justify-center">
                    <Image
                        src={logo}
                        alt='Logo Infruit'
                        width={80}
                        className="pb-[10px]"
                    />
                </div>

                <div className="flex w-[100%] flex-row justify-center items-center">
                    <Link href={'/kategori'} className={`${isScrolled ? 'text-dark-gray' : 'text-white'} mr-5`}>Kategori</Link>
                    <form className="w-full">
                        <label htmlFor="default-search" className="mb-2 text-sm font-medium sr-only">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            </div>
                            <input name='name' className="block outline-none border-2 w-[100%] border-lite-dark-gray placeholder:text-[12px] sm:placeholder:text-[14px] rounded-full p-2 pl-10 text-sm  " placeholder="Cari di inFruit" />
                        </div>
                    </form>
                    <a href="/history" className={`${isScrolled ? 'text-dark-gray' : 'text-white'} text-[20px] ml-5 items-center`}><AiOutlineShoppingCart /></a>
                </div>

                <div className="flex w-[20%] flex-row items-center justify-center">
                    <hr className="rotate-90 w-[8%] border border-lite-dark-gray" />
                    <div>
                        {/* {
                            props.data.user.username !== null ?
                                <>
                                    <span className='flex flex-row items-center'>
                                        <IoPersonCircle className='text-3xl text-lightOrange' />
                                        <h1 className={`${isScrolled ? 'text-dark-gray' : 'text-white'} ml-3`}>{props.data?.user?.username}</h1>
                                    </span>
                                </>
                                :
                        } */}
                        <button className={`${isScrolled ? 'text-dark-green hover:text-white' : 'text-white hover:text-white'} hover:bg-dark-green transition-all duration-300 py-2 px-3 mr-3 border-dark-green border-2 font-semibold text-[14px] rounded-xl `}>
                            <Link href="/login">
                                Masuk
                            </Link>
                        </button>
                        <button className={`${isScrolled ? 'text-dark-green hover:text-dark-green' : 'text-white'} py-2 px-3 hover:bg-transparent hover:border-dark-green border-2 border-dark-green bg-dark-green font-semibold text-[14px] text-white rounded-xl`}>
                            <Link href="/signup">
                                Daftar
                            </Link>
                        </button>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Navbar;