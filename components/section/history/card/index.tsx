import { receipt } from "@/interface/data/receipt";
import { rupiahFormatter } from "@/utils/rupiahFormatter";
import Image from "next/image";

const CardHistory = (props: receipt) => {
    return (
        <div className="bg-white rounded-2xl shadow-full w-full my-5">
            <div className="p-5 flex flex-row justify-between w-full">
                <div className="flex flex-col justify-between text-blackLite">
                    <div className="flex flex-row text-sm font-semibold items-center">
                        <h3 className="mr-2 sm:mr-5">#{props.id}</h3>
                        <span className="flex flex-row text-xs mobile:text-sm">Payment Type : &nbsp;<h1 className="uppercase">{props.payment_type}</h1></span>
                    </div>
                    <div className="flex flex-col">
                        <h1 className="font-bold text-base mobile:text-lg sm:text-xl">{props.product.name}</h1>
                        <p>amount : {props.amount}</p>
                        <h1 className="text-lg mobile:text-xl sm:text-3xl mt-3 font-bold">{rupiahFormatter(props.gross_amount)}</h1>
                    </div>
                    <h1 className="text-sm sm:text-lg font-semibold">Virtual Account : &nbsp; {props.payment_info}</h1>
                </div>
                <div className="flex flex-col">
                    <div className="w-[100px] h-[100px] mobile:w-[150px] mobile:h-[150px] sm:w-[200px] sm:h-[200px] relative">
                        <Image src={props.product.img} alt="ganmbar buah" fill style={{ objectFit: 'cover', objectPosition: 'center' }} className="rounded-3xl" />
                    </div>
                    <span className="font-bold capitalize text-xs mobile:text-base sm:text-xl mt-3 flex justify-center">Status : &nbsp;
                        {props.status === 'paid' ? <h2 className="text-freshGreen">{props.status}</h2>
                            :
                            <h2 className="text-red-600">{props.status}</h2>}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default CardHistory;
