import Image from "next/image";
import hero from "@/img/hero.png"
import Link from "next/link";

const Hero = () => {
    return (
        <>
            <div className='h-screen w-full absolute'>
                <Image src={hero} priority fill style={{ objectPosition: 'center', objectFit: 'cover' }} alt='hero' />
            </div>
            <div className="rounded-b-xl flex items-center h-screen justify-center sm:justify-start sm:ml-20 relative">
                <div className="w-[90%] mobile:w-[80%] lg:w-[65%] xl:w-[60%]">
                    <div className="bg-white bg-opacity-20 backdrop-blur-sm backdrop-filter rounded-lg p-4 lg:p-8 font-jakarta-sans">
                        <h2 className="text-2xl lg:text-4xl font-bold text-white mb-4 text-justify">Temukan Beragam <span className="text-light-yellow">Buah Segar</span> Langsung Diantar ke Rumahmu</h2>
                        <p className="text-white my-5 lg:my-10 text-justify">InFruits adalah platform online yang menyediakan berbagai macam buah segar dan berkualitas dengan harga terjangkau. Kami menjamin keaslian buah yang kami jual dan mengirimkannya langsung ke rumahmu.</p>
                        <Link href={"/"} className="text-white w-full border-2 p-2 rounded-xl font-bold text-base lg:text-xl border-white">Mulai Cari di inFruit sekarang</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;