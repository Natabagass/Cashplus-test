import { receipt } from "@/interface/data/receipt";
import CardHistory from "../card";

export interface HistoryProps {
    data: {
        data: receipt[]
    }
}

const TemplateHistory = (props: HistoryProps) => {
    return (
        <div className="mt-24 font-jakarta-sans">
            <h1 className="font-bold text-2xl mx-7 md:mx-14">History Pemesanan</h1>

            <div className="flex flex-col mx-mobile md:mx-tablet">
                {props.data?.data?.map((data, index: number) => {
                    return (
                        <CardHistory
                            key={index}
                            id={data.id}
                            amount={data.amount}
                            gross_amount={data.gross_amount}
                            payment_info={data.payment_info}
                            payment_type={data.payment_type}
                            product={data.product}
                            status={data.status}
                            user={data.user}
                        />
                    )
                })}
            </div>
        </div>
    );
}

export default TemplateHistory;
