import { default as getHistoryData } from "@/features/service/data/getHistory";
import { receipt } from "@/interface/data/receipt";
import TemplateHistory from "@/section/history/template";
import HeadSeo from "@/utils/head";
import Image from "next/image";
import { useEffect, useState } from "react";

const History = () => {
    const [history, setHistory] = useState<{ data: receipt[] }>({ data: [] })
    const [isLoading, setIsLoading] = useState(false);

    const getHistory = async () => {
        setIsLoading(true)
        try {
            const res = await getHistoryData()
            if (res.status === 200) {
                console.log(res)
                setHistory(res.data)
            }
        } catch (error) {
            console.error(error)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        // initial fetch
        getHistory()

        // fetch data every 5 seconds
        const intervalId = setInterval(getHistory, 5000)
        return () => clearInterval(intervalId)
    }, [])

    return (
        <>
            <HeadSeo
                siteTitle="Histiry"
                title='Infruit'
                description="Mari kurangi food waste"
                imags={''}
                canonical={'/history'}
            />
            <section id="history">
                {
                    isLoading ?
                        <div className="mt-32 w-full grid place-items-center">
                            <span className="flex items-center gap-3">
                                retrieving your data...
                                <Image
                                    src="/icon/icon-loading.svg"
                                    alt="loading"
                                    width={24}
                                    height={24}
                                />
                            </span>
                        </div>
                        :
                        history?.data?.length !== 0 ?
                            <TemplateHistory data={history} />
                            :
                            <div className="min-h-screen w-full grid place-items-center">
                                <>History transaksi tidak ditemukan</>
                            </div>
                }
            </section>
        </>
    );
}

export default History;
