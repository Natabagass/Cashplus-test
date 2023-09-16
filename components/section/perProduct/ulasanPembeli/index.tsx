import Image from "next/image";
import Icon from "@/img/ulasanImage.png"

const UlasanPembeli = () => {
    return (
        <div className="text-blackLite my-12 mx-mobile md:mx-tablet">
            <h1 className="font-bold">Ulasan Pembeli</h1>

            <div className="rounded-3xl w-full lg:w-[75%] shadow-full mt-10">
                <div className="flex flex-row justify-center items-center w-full py-2 px-4">
                    <div className="min-w-[100px] min-h-[100px] sm:min-w-[200px] sm:min-h-[200px] relative">
                        <Image src={Icon} fill style={{ objectFit: 'contain', objectPosition: 'center' }} alt="Gambar Ulasan" />
                    </div>
                    <div className="flex text-blackLite ml-10 font-semibold font-jakarta-sans flex-col">
                        <h1 className="text-lg md:text-2xl">Belum ada ulasan produk untuk buah ini</h1>
                        <h3 className="text-sm md:text-base text-lite-dark-gray">Beli buah ini dan jadilah yang pertama memberikan ulasan</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UlasanPembeli;