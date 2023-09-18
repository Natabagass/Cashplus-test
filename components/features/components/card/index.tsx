import Link from "next/link";
import Image from "next/image";
import { FaRegStar } from "react-icons/fa"
import { Props } from "@/interface/data/fruit";
import { rupiahFormatter } from "@/utils/rupiahFormatter";
import { AES } from 'crypto-js';

const CardBuah = (props: Props) => {
    const convertSlug = props.name.replace(/ /g, '-').toLowerCase();

    return (
        <>
            <Link href={{ pathname: `/produk/${convertSlug}`, query: {id: `${AES.encrypt(props.id.toString() as string, 'vR7LhZ2okcUpQHYl/lYfnQ==' as string).toString()}`} }}>
            <div className="ml-3 font-jakarta-sans flex flex-col shadow-xl outline-none cursor-pointer transition rounded-3xl border mb-[30px] md:min-h-[350px] lg:min-h-[450px] min-w-[100px] mobile:min-w-[215px] bg-white">
                <div className="w-[100%] min-h-[100px] mobile:min-h-[150px] sm:min-h-[250px] relative hover:opacity-80">
                    <Image src={props.img} fill style={{ objectFit: 'cover', objectPosition: 'center' }} className="rounded-t-3xl" alt="Gambar Barang" />
                </div>
                <div className="bg-white py-[10px] min-h-[230px] mobile:min-h-[200px] lg:min-h-[240px] px-3 flex flex-col rounded-b-3xl w-full font-jakarta-sans">
                    <h2 className="font-medium">{props.name}</h2>
                    <h1 className="font-bold mt-3">{props.discount > 0 ? <span>{rupiahFormatter(props.price - (props.price * props.discount))}</span> : ' '}</h1>
                    <h1 className="font-medium">{props.discount > 0 ?
                        <div className="flex flex-row items-center mt-2">
                            <h4 className="mr-2 text-xs bg-[#F8D3D2] text-lightRed p-2 font-bold rounded-lg">{`${(props.discount * 100)}%`}</h4>
                            <span className="line-through text-[#929292] text-sm">{rupiahFormatter(props.price)}</span>
                        </div>
                        :
                        <span className="font-bold">
                            {rupiahFormatter(props.price)}
                        </span>}
                    </h1>
                    <h3 className="mt-3 text-lite-dark-gray font-medium">{props.place}</h3>
                    <div className="flex flex-row mt-3 text-lite-dark-gray font-medium ml-2 items-center">
                        <FaRegStar className="text-light-yellow text-lg" />
                        <h4 className="ml-2">{props.rating}</h4>
                        <hr className="rotate-90 h-0.5 w-3.5 bg-lite-dark-gray border-lite-dark-gray border border-solid font-bold" />
                        <h4>{props.sold}</h4>
                    </div>
                </div>
            </div>
        </Link>
        </>
    );
}

export default CardBuah;