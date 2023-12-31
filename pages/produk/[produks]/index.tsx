import getPerProduct from "@/features/service/data/getPerProduct";
import BuyCard from "@/section/perProduct/buyCard";
import Desc from "@/section/perProduct/desc";
import UlasanPembeli from "@/section/perProduct/ulasanPembeli";
import HeadSeo from "@/utils/head";
import * as CryptoJS from 'crypto-js';
import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";

const Produks: NextPage = ({ product }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    return (
        <>
            <HeadSeo
                siteTitle={product.name}
                title="Infruit"
                description="Mari kurangi food waste"
                imags={product.img}
                canonical={''}
            />
            <div className="flex flex-col w-full mt-32">
                <div className="flex flex-col lg:flex-row justify-between">
                    <section id="descProduct">
                        <Desc {...product} />
                    </section>

                    <section id="cardBuy" className="mx-mobile md:mx-tablet">
                        <BuyCard {...product} />
                    </section>
                </div>

                <section id="ulasanPembeli">
                    <UlasanPembeli />
                </section>
            </div>
        </>
    );
}

export default Produks;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { id } = context.query
    const decrypted = CryptoJS.AES.decrypt(id as string, 'vR7LhZ2okcUpQHYl/lYfnQ==' as string).toString(CryptoJS.enc.Utf8);

    try {
        const res = await getPerProduct(decrypted as string)
        const dataProduct = res?.data.data

        if (!dataProduct) {
            return {
                notFound: true
            }
        }

        return {
            props: {
                product: dataProduct
            }
        }

    } catch (err) {
        console.error(err)
        return {
            notFound: true
        }
    }
}