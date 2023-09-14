import heroHome from "@/img/heroHome.png"
import Image from "next/image";

const HeroHome = () => {
    return (
        <>
            <div className="mt-28 mx-10 border-black border rounded-3xl">
                <div className="flex flex-row w-full">
                    <h1 className="font-semibold p-12 leading-snug font-jakarta-sans text-7xl text-dark-green">Sehat dan Segar
                        #Mulaidarisini
                        <br />
                        <span className="text-light-yellow">Beli Buah di inFruit</span>
                    </h1>
                    <div className="min-h-full w-[85%] relative">
                        <Image src={heroHome} className="rounded-r-3xl" priority fill style={{ objectPosition: 'center', objectFit: 'cover' }} alt="hero image" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default HeroHome;