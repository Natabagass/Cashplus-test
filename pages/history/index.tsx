import getHistory from "@/features/service/data/getHistory";
import TemplateHistory from "@/section/history/template";
import { useQuery } from "react-query";

const History = () => {
    const { data, error } = useQuery('products', getHistory);

    return (
        <div>
            <section id="history">
                <TemplateHistory {...data} />
            </section>
        </div>
    );
}

export default History;