import Image from "next/image";
import { AiOutlineShoppingCart } from "react-icons/ai"
import { TbTruckDelivery } from "react-icons/tb"
import { GiFruitBowl } from "react-icons/gi"

const Keuntungan = () => {
    return (
        <div className="mx-mobile md:mx-tablet lg:mx-0">
            <div className="flex flex-col w-full mt-10 font-jakarta-sans">
                <h2 className="flex justify-center w-full font-bold text-xl lg:text-3xl">Keuntungan Belanja di inFruit</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 mt-20 text-center">
                    <div className="flex justify-center flex-col">
                        <div className="mx-auto bg-[#EEC89B] rounded-full p-5">
                            <GiFruitBowl class="text-3xl md:text-6xl w-full items-center" />
                        </div>
                        <h3 className="text-sm md:text-base mt-5 font-bold">Buah segar langsung dari Petani</h3>
                    </div>

                    <div className="flex justify-center flex-col my-10 md:my-0">
                        <div className="mx-auto bg-[#F7982D] rounded-full p-5">
                            <AiOutlineShoppingCart className="text-3xl md:text-6xl w-full items-center" />
                        </div>
                        <h3 className="text-sm md:text-base mt-5 font-bold">Kemudahan pembelian</h3>
                    </div>

                    <div className="flex flex-col justify-center">
                        <div className="mx-auto bg-[#F7982D] rounded-full p-5">
                            <TbTruckDelivery className="text-3xl md:text-6xl w-full items-center" />
                        </div>
                        <h3 className="text-sm md:text-base mt-5 font-bold">Pengiriman yang cepat dan aman</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Keuntungan;