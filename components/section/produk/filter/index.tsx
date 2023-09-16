import Link from "next/link";
import { useState } from "react";
import { BsArrowUp, BsArrowDown } from "react-icons/bs"

interface Props {
    setActive: React.Dispatch<React.SetStateAction<string>>;
    active: string;
    alph: string;
    setAlph: React.Dispatch<React.SetStateAction<string>>;
}

const Filter = (props: Props) => {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const handleRadioChange = (value: string) => {
        setSelectedOption(value);
        props.setAlph(value);
    };

    return (
        <div className="font-jakarta-sans sticky top-24 shadow-full h-[400px] py-5 rounded-xl">

            <div className="px-5">
                <h1 className="font-bold px-5">Lokasi</h1>
                <div className="flex flex-col my-2 px-10 text-sm text-lite-dark-gray font-semibold w-full text-left">
                    <div className="flex flex-row my-2 items-center">
                        <input type="checkbox" onClick={() => props.setActive("Malang")} name="kota" className="h-4 w-4 outline-none" />
                        <h3 className="ml-2">Malang</h3>
                    </div>
                    <div className="flex flex-row my-2 items-center">
                        <input type="checkbox" onClick={() => props.setActive("Batu")} name="kota" className="h-4 w-4 outline-none" />
                        <h3 className="ml-2">Batu</h3>
                    </div>
                    <div className="flex flex-row my-2 items-center">
                        <input type="checkbox" onClick={() => props.setActive("Banyuwangi")} name="kota" className="h-4 w-4 outline-none" />
                        <h3 className="ml-2">Banyuwangi</h3>
                    </div>
                    <div className="flex flex-row my-2 items-center">
                        <input type="checkbox" onClick={() => props.setActive("Probolinggo")} name="kota" className="h-4 w-4 outline-none" />
                        <h3 className="ml-2">Probolinggo</h3>
                    </div>
                </div>
            </div>
            <hr className="w-full border-gray-300 mt-2 mb-5" />

            <div className="px-5">
                <h1 className="font-bold px-5">Urutkan</h1>
                <div className="flex flex-col px-5 items-center">
                    <div className="my-2 w-full">
                        <input
                            type="radio"
                            id="RadioA"
                            hidden
                            checked={selectedOption === 'asc'}
                            onChange={() => handleRadioChange('asc')}
                            className='peer absolute mt-[7px] ml-[20px]'
                            required
                        />
                        <label htmlFor="RadioA" className="peer-checked:bg-dark-green text-lite-dark-gray items-center rounded-xl border border-lite-dark-gray w-full flex justify-around py-2  peer-checked:text-white text-sm">
                            Huruf A ke Z
                            <BsArrowUp className="text-xl" />
                        </label>
                    </div>

                    <div className="my-2 w-full">
                        <input
                            type="radio"
                            id="RadioB"
                            hidden
                            checked={selectedOption === 'desc'}
                            onChange={() => handleRadioChange('desc')}
                            className='peer absolute mt-[7px] ml-[20px]'
                            required
                        />
                        <label htmlFor="RadioB" className="peer-checked:bg-dark-green text-lite-dark-gray items-center rounded-xl border border-lite-dark-gray w-full flex justify-around py-2  peer-checked:text-white text-sm">
                            Huruf Z ke A
                            <BsArrowDown className="text-xl" />
                        </label>
                    </div>
                </div>
            </div>
            <hr className="w-full border-gray-300 mt-2 mb-1" />
        </div>
    );
}

export default Filter;