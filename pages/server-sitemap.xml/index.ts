import getBuah from "@/features/service/data/getBuah";
import { Fruit, Props } from "@/interface/data/fruit";
import { AES } from "crypto-js";
import { getServerSideSitemapLegacy } from "next-sitemap";

export default function Site() { }

export const getServerSideProps = async (ctx: any) => {
    const data = await getBuah()
    const result = data?.data

    const productSitemap = result.data?.data?.map((item: Props) => ({
        loc: `${"https://infruit.vercel.app/"}produk/${item.name.replace(/ /g, '-').toLowerCase()}?id=${AES.encrypt(item.id.toString() as string, 'vR7LhZ2okcUpQHYl/lYfnQ==' as string).toString()}`,
        lastmod: new Date().toISOString(),
    }))

    const fields = [...productSitemap]

    return getServerSideSitemapLegacy(ctx, fields)
}