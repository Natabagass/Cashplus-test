import Image from "next/image";
import { rupiahFormatter } from "@/utils/rupiahFormatter";
import { HiOutlineLocationMarker, HiOutlineTruck } from "react-icons/hi"
import { Props, PropsKategori } from "@/interface/data/fruit";

const Desc = ( props: Props) => {
    return (
        <div className="w-full mx-mobile md:mx-tablet">
            <div className="flex flex-col md:flex-row w-full h-full">
                <div className="min-h-[300px] min-w-[300px] md:min-h-[250px] md:min-w-[250px] relative">
                    <Image src={props.img} className="rounded-3xl" fill style={{ objectPosition: 'center', objectFit: 'cover' }} alt="Gambar Buah" />
                </div>

                <div className="lg:mt-0 mt-10 mx-0 md:mx-16 w-full font-jakarta-sans text-blackLite">
                    <h1 className="text-lg font-bold">{props.name}</h1>
                    <h3 className="font-bold text-3xl my-4">{rupiahFormatter(props.price)}</h3>
                    <hr className="w-[70%] border border-lite-dark-gray" />
                    <h4 className="my-4 text-freshGreen font-bold ml-3">Detail</h4>
                    <hr className="w-[70%] border border-lite-dark-gray" />
                    <div className="flex flex-col w-full my-4">
                        <div className="flex flex-row font-jakarta-sans text-sm">
                            <h2 className="text-lite-dark-gray font-medium">Kondisi: &nbsp;</h2>
                            <h3 className="text-dark-gray font-semibold">{props.condition}</h3>
                        </div>
                        <div className="flex flex-row font-jakarta-sans my-2 text-sm">
                            <h2 className="text-lite-dark-gray font-medium">Satuan: &nbsp;</h2>
                            <h3 className="text-dark-gray font-semibold">{props.weight} Kg</h3>
                        </div>
                        <div>
                            <h1 className="text-freshGreen text-sm font-medium">{props.name} utuh asli {props.place}</h1>
                        </div>
                    </div>
                    <hr className="w-[70%] border border-lite-dark-gray" />
                    <div className="flex flex-col text-blackLite font-jakarta-sans my-4 w-full">
                        <h1 className="font-bold">Pengiriman</h1>
                        <span className="flex flex-row mt-2 text-sm items-center">
                            <HiOutlineLocationMarker className="text-3xl text-dark-green mr-2" />
                            <span className="font-medium flex flex-row">Dikirim dari &nbsp;<h2 className="font-bold">{props.place}</h2></span>
                        </span>
                        <span className="flex flex-row mt-2 text-sm items-center">
                            <HiOutlineTruck className="text-3xl text-dark-green mr-2" />
                            <span className="font-medium flex flex-row">Ongkir Reguler 10 rb - 13 rb</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Desc;