import Link from "next/link";
import { CiDiscount1 } from "react-icons/ci"
import { BiCategoryAlt } from "react-icons/bi"
import { GiFruitBowl } from "react-icons/gi";

const Spesial = () => {
    return (
        <div className="font-jakarta-sans font-semibold my-14 mx-mobile md:mx-tablet lg:mx-content">
            <h1 className="text-2xl w-full flex justify-center lg:justify-start">Spesial Untuk kamu</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 mt-8 w-full">
                <Link href={'/'} className="flex flex-col items-center">
                    <div className="bg-lightOrange p-5 rounded-full">
                        <CiDiscount1 className="text-4xl" />
                    </div>
                    <h3 className="text-center mt-5">On Sale</h3>
                </Link>
                <Link href={'/'} className="flex flex-col items-center my-8 lg:my-0">
                    <div className="bg-[#DBD24D] p-5 rounded-full">
                        <GiFruitBowl class="text-2xl md:text-4xl w-full items-center" />
                    </div>
                    <h3 className="text-center mt-5">Fresh Fruits</h3>
                </Link>
                <Link href={'/'} className="flex flex-col items-center">
                    <div className="bg-[#FFDB61] p-5 rounded-full">
                        <BiCategoryAlt className="text-4xl" />
                    </div>
                    <h3 className="text-center mt-5">Semua Kategori</h3>
                </Link>
            </div>
        </div>
    );
}

export default Spesial;