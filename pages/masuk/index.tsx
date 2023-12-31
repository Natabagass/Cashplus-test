import Image from "next/image"
import { useState } from "react";
import LoginImage from "@/img/loginImage.png"
import Logo from "@/img/logoInfruit.png"
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useRouter } from "next/navigation";
import Link from "next/link";
import postLogin from "@/features/service/auth/postLogin";
import { setCookie } from "cookies-next";
import { NextPage } from "next";
import HeadSeo from "@/utils/head";
import Button from "@/button";

const Masuk: NextPage = () => {
    const router = useRouter()
    const [passwordShown, setPasswordShown] = useState(false);
    const [forms, setForms] = useState({
        username: '',
        password: ''
    })
    const toggleShow = () => {
        setPasswordShown(!passwordShown);
    }
    const [error, setError] = useState({
        password: '',
        username: '',
        akun: ''
    })
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async (e: { preventDefault: () => void }) => {
        e.preventDefault
        const { username, password } = forms
        setIsLoading(true)

        try {
            const res = await postLogin(username, password)
            if (res.status === 200) {
                setCookie('auth', res.data?.data.token)
                setTimeout(() => {
                    router.push('/')
                }, 200);
            }

            if (res.response.data?.status === "error") {
                console.log(res.response.data?.message.password)
                const errMsg = {
                    password: res.response.data?.message.password,
                    username: res.response.data?.message.username,
                    akun: res.response.data?.message
                }
                setError(prev => ({
                    ...prev,
                    password: errMsg.password,
                    username: errMsg.username,
                    akun: errMsg.akun
                }))
                setIsLoading(false)
                return
            }
        } catch (err) {
            console.log(err)
            setIsLoading(false)
        }
    }
    return (
        <>
            <HeadSeo
                siteTitle="Masuk"
                title='Infruit'
                description="Mari kurangi food waste"
                imags={''}
                canonical={'/payment'}
            />
            <div className="flex flex-row font-jakarta-sans overflow-hidden w-full">
                <div className='hidden lg:flex relative lg:w-[50%] xl:w-[60%] min-h-full'>
                    <Image
                        alt='logo bg'
                        src={LoginImage}
                        priority
                        fill
                        style={{ objectFit: 'cover', objectPosition: 'center' }}
                        className='w-full'
                    />
                </div>

                <div className="flex flex-col justify-center mx-auto w-[90%] my-[20px] lg:w-[40%] xl:w-[30%]">
                    <Link href={'/'}>
                        <Image
                            src={Logo}
                            alt="Logo inFruit"
                            className='w-[30%] lg:w-[40%] flex mx-auto'
                        />
                    </Link>
                    <div className='flex flex-col rounded-xl shadow-full mt-5'>
                        <div className='mx-10 my-20'>
                            <div className='flex flex-row w-full justify-between'>
                                <h2 className='font-semibold text-xl text-dark-gray lg:text-3xl'>Masuk</h2>
                                <Link href="/daftar" className='text-light-green font-semibold text-lg flex items-center'>Daftar</Link>
                            </div>

                            <div className='mt-8'>
                                <h3 className='text-dark-green text-sm ml-2 font-semibold'>Username</h3>
                                <input
                                    type="text"
                                    name='username'
                                    onChange={e => setForms({ ...forms, username: e.target.value })}
                                    className='border-2 rounded-xl mt-2 border-lite-dark-gray w-full p-3'
                                    required
                                    placeholder='Ketik Disini'
                                />
                                <span className="mt-5 text-red-500 text-sm flex justify-center w-full">{error.username}</span>
                            </div>

                            <div className='mt-4'>
                                <h3 className='text-dark-green text-sm ml-2 font-semibold'>Password</h3>
                                <div className="relative flex items-center">
                                    <input
                                        type={passwordShown ? "text" : "password"}
                                        name='password'
                                        onChange={e => setForms({ ...forms, password: e.target.value })}
                                        className='border-2 rounded-xl mt-2 border-lite-dark-gray w-full p-3'
                                        required
                                        placeholder='Ketik Disini'
                                    />
                                    <button onClick={toggleShow} className="cursor-pointer flex items-center">
                                        {!passwordShown ? <AiOutlineEyeInvisible className="absolute right-3 text-2xl mt-1 pr-1" /> : <AiOutlineEye className="absolute right-3 text-[25px] mt-1 pr-1" />}
                                    </button>
                                </div>
                                <span className="mt-5 text-red-500 text-sm flex justify-center w-full">{error.password}</span>
                            </div>

                            <span className="text-red-500 text-sm flex justify-center w-full">{error.akun}</span>

                            <Link href="" className='text-light-green text-base lg:text-lg font-semibold flex justify-end mt-5'>Lupa kata sandi?</Link>
                            <Button
                                className='mt-5 w-full text-lite-gray bg-dark-green p-3 rounded-lg'
                                isLoading={isLoading}
                                onClick={handleLogin}
                            >Masuk</Button>
                            <h3 className='text-xs mt-5 justify-center flex'>Butuh bantuan? &nbsp; <Link href="" className='text-dark-green font-bold'>Hubungi inFruit Care</Link></h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Masuk;