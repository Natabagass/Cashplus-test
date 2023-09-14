import Image from "next/image";
import foto2 from "@/img/foto2.png"

const JoinUs = () => {
    return (
        <div className="min-h-full justify-center flex mt-56 items-center">
            <div className='h-[90vh] w-full absolute'>
                <Image src={foto2} fill style={{ objectFit: 'cover', objectPosition: 'top' }} alt='hero' />
            </div>
            <div className="w-[90%] sm:w-[70%] lg:w-[55%] relative">
                <div className="bg-white bg-opacity-20 backdrop-blur-xl backdrop-filter rounded-lg p-4 lg:p-8">
                    <h2 className="text-2xl lg:text-4xl font-bold text-white mb-4">Dapatkan <span className="text-light-yellow">keuntungan lebih</span> <span className="text-dark-green">dengan menjual</span> buah-buahanmu secara <span className="text-dark-green">online di inFruit</span></h2>
                    <button className="text-white w-full bg-dark-green p-2 rounded-xl font-bold text-base lg:text-xl">Klik untuk berkunjung</button>
                </div>
            </div>
        </div>
    );
}

export default JoinUs;