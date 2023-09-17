import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Logo from "@/img/logoInfruit.png"
import signupImage from "@/img/signupImage.png"
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import postSignup from "@/features/service/auth/postDaftar";
import { NextPage } from "next";
import Input from "@/input";
import Button from "@/button";
import HeadSeo from "@/utils/head";

const Daftar: NextPage = () => {
    const router = useRouter()
    const [passwordShown, setPasswordShown] = useState(false);
    const [forms, setForms] = useState({
        email: '',
        password: '',
        username: '',
        phone: ''
    })
    const toggleShow = () => {
        setPasswordShown(!passwordShown);
    }
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState({
        password: '',
        email: '',
        username: '',
        phone: ''
    })

    const handleSignup = async (e: { preventDefault: () => void }) => {
        e.preventDefault
        const { username, password, phone, email } = forms
        setIsLoading(true)

        try {
            const res = await postSignup(username, password, phone, email)

            if (res.response.data.status === "error") {
                const errMsg = {
                    password: res.response.data.message.password,
                    username: res.response.data.message.username,
                    phone: res.response.data.message.phone,
                    email: res.response.data.message.email
                }
                setError(prev => ({
                    ...prev,
                    password: errMsg.password,
                    username: errMsg.username,
                    phone: errMsg.phone,
                    email: errMsg.email
                }))
                setIsLoading(false)
                return
            }

            if (res.status === 200) {
                setTimeout(() => {
                    router.replace('/masuk')
                }, 1000);
            }

        } catch (err) {
            console.log(err)
            setIsLoading(false)
        }
    }
    return (
        <>
            <HeadSeo
                siteTitle="Daftar"
                title='Infruit'
                description="Mari kurangi food waste"
                imags={''}
                canonical={'/daftar'}
            />
            <div className="flex flex-row font-jakarta-sans overflow-hidden w-full">
                <div className='hidden lg:inline lg:w-[50%] xl:w-[60%] h-full lg:h-screen'>
                    <Image
                        alt='logo bg'
                        priority
                        src={signupImage}
                        className='w-full'
                    />
                </div>

                <div className="flex flex-col justify-center mx-auto w-[90%] my-text-xl lg:w-[40%] xl:w-[30%]">
                    <Link href={'/'}>
                        <Image
                            src={Logo}
                            alt="Logo inFruit"
                            className='w-[30%] lg:w-[40%] flex mx-auto'
                        />
                    </Link>
                    <div className='flex flex-col rounded-xl shadow-full mt-8'>
                        <div className='mx-10 my-10'>
                            <h2 className='font-semibold text-xl text-dark-gray text-center lg:text-3xl'>Daftar Sekarang</h2>
                            <h1 className="text-center text-xl text-dark-gray">Sudah punya akun inFruit?&nbsp; <Link href='/masuk' className="font-semibold text-light-green">Masuk</Link></h1>
                            <div className='mt-8'>
                                <h3 className='text-dark-green text-sm ml-2 font-semibold'>Userame</h3>
                                <Input
                                    type="text"
                                    name='username'
                                    onChange={e => setForms({ ...forms, username: e.target.value })}
                                    className='border-2 rounded-xl mt-2 border-lite-dark-gray w-full p-2'
                                    required
                                    placeholder='Ketik Disini'
                                />
                                <span className="my-2 text-red-500 text-sm flex justify-center w-full">{error.username}</span>
                            </div>

                            <div className='mt-2'>
                                <h3 className='text-dark-green text-sm ml-2 font-semibold'>Password</h3>
                                <div className="relative flex items-center">
                                    <Input
                                        type={passwordShown ? "text" : "password"}
                                        name='password'
                                        onChange={e => setForms({ ...forms, password: e.target.value })}
                                        className='border-2 rounded-xl mt-2 border-lite-dark-gray  w-full p-2'
                                        required
                                        placeholder='Ketik Disini'
                                    />
                                    <button onClick={toggleShow} className="cursor-pointer flex items-center">
                                        {!passwordShown ? <AiOutlineEyeInvisible className="absolute right-3 text-[25px] mt-1 pr-1" /> : <AiOutlineEye className="absolute right-3 text-[25px] mt-1 pr-1" />}
                                    </button>
                                </div>
                                <span className="my-2 text-red-500 text-sm flex justify-center w-full">{error.password}</span>
                            </div>

                            <div className='mt-2'>
                                <h3 className='text-dark-green text-sm ml-2 font-semibold'>Email</h3>
                                <Input
                                    type="text"
                                    name='email'
                                    onChange={e => setForms({ ...forms, email: e.target.value })}
                                    className='border-2 rounded-xl mt-2 border-lite-dark-gray w-full p-2'
                                    required
                                    placeholder='Ketik Disini'
                                />
                                <span className="my-2 text-red-500 text-sm flex justify-center w-full">{error.email}</span>
                            </div>

                            <div className='mt-2'>
                                <h3 className='text-dark-green text-sm ml-2 font-semibold'>Nomor Telepon</h3>
                                <Input
                                    type="text"
                                    name='phone'
                                    onChange={e => setForms({ ...forms, phone: e.target.value })}
                                    className='border-2 rounded-xl mt-2 border-lite-dark-gray w-full p-2'
                                    required
                                    placeholder='Ketik Disini'
                                />
                                <span className="my-2 text-red-500 text-sm flex justify-center w-full">{error.phone}</span>
                            </div>

                            <Button
                                className='mt-5 w-full text-lite-gray bg-dark-green p-3 rounded-lg'
                                onClick={handleSignup}
                            >Daftar</Button>
                            <h3 className='text-sm text-lite-dark-gray mt-5 justify-center flex'>Dengan mendaftar, saya menyetujui</h3>
                            <span className='text-sm text-light-green font-semibold justify-center flex'>Syarat dan Ketentuan &nbsp; <h4 className="text-lite-dark-gray font-normal">serta</h4> &nbsp; Kebijakan Privasi</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Daftar;