import Image from "next/image";
import foto1 from "@/img/foto1.png"
import foto2 from "@/img/foto2.png"

const VisiMisi = () => {
    return (
        <div className="mx-mobile md:mx-tablet lg:mx-content">
            <div className="min-h-[400px] mt-[80px]">
                <div className="flex flex-col md:flex-row items-center h-full w-full justify-between">
                    <div className='w-[300px] h-[120px] sm:w-[400px] sm:h-[220px] lg:w-[500px] lg:h-[320px] relative mr-10 mb-0 md:flex hidden'>
                        <Image
                            style={{ objectFit: 'cover', objectPosition: 'center' }}
                            fill
                            className="rounded-xl"
                            src={foto1}
                            alt="foto1"
                        />
                    </div>
                    <div className="flex w-[70%] xl:w-[50%] flex-col">
                        <h2 className="font-semibold text-xl md:text-3xl">Visi inFruit</h2>
                        <p className="text-sm lg:text-base">Menjadi platform e-commerce yang terkemuka dan membantu petani dalam menjual produk buahnya secara online, sehingga dapat memperluas pasar dan meningkatkan kesejahteraan petani di Indonesia.</p>
                    </div>
                    <div className='w-[300px] h-[120px] sm:w-[400px] sm:h-[220px] lg:w-[500px] lg:h-[320px] relative md:mr-10 mr-0 mt-6 md:mt-0 md:hidden flex'>
                        <Image
                            style={{ objectFit: 'cover', objectPosition: 'center' }}
                            fill
                            className="rounded-xl"
                            src={foto1}
                            alt="foto1"
                        />
                    </div>
                </div>

                <div className="flex flex-col md:flex-row mt-10 items-center w-full justify-between">
                    <div className="flex w-[70%] xl:w-[50%] flex-col">
                        <h2 className="font-semibold text-xl md:text-3xl">Misi</h2>
                        <ol className="text-lg lg:text-2xl">
                            <li className="flex flex-row">
                                <span className="mr-2">1.</span>
                                <h4 className="text-sm lg:text-base">Menjalin kemitraan yang baik dengan petani dan mitra pengiriman untuk memastikan kualitas produk dan pengiriman yang cepat dan efisien.</h4>
                            </li>
                            <li className="flex flex-row">
                                <span className="mr-2">2.</span>
                                <h4 className="text-sm lg:text-base">Memberikan pengalaman belanja yang nyaman dan aman bagi konsumen yang ingin membeli buah-buahan segar dari petani.</h4>
                            </li>
                            <li className="flex flex-row">
                                <span className="mr-2">3.</span>
                                <h4 className="text-sm lg:text-base">Menawarkan harga yang kompetitif untuk konsumen dan keuntungan yang adil untuk petani.</h4>
                            </li>
                        </ol>
                    </div>
                    <div className='w-[300px] h-[120px] sm:w-[400px] sm:h-[220px] lg:w-[500px] lg:h-[320px] relative ml-0 md:ml-10 mt-6 md:mt-0'>
                        <Image
                            style={{ objectFit: 'cover', objectPosition: 'center' }}
                            src={foto2}
                            fill
                            alt="foto2"
                            className='rounded-xl'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VisiMisi;