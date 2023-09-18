import Link from "next/link";
import { useState } from "react";
import { BsArrowUp, BsArrowDown } from "react-icons/bs"
import { RxCross2 } from "react-icons/rx"

interface Props {
    setActive: React.Dispatch<React.SetStateAction<string>>;
    active: string;
    alph: string;
    visible: boolean;
    setAlph: React.Dispatch<React.SetStateAction<string>>;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Filter = (props: Props) => {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [selectedOptionCheck, setSelectedOptionCheck] = useState<string | null>(null);

    const handleCheckboxChange = (value: string) => {
        if (selectedOptionCheck === value) {
            setSelectedOptionCheck(null);
            props.setActive('All')
        } else {
            setSelectedOptionCheck(value);
            props.setActive(value)
        }
    };

    const handleRadioChange = (value: string) => {
        if (selectedOption === value) {
            setSelectedOption(null);
            props.setAlph(value)
        } else {
            setSelectedOption(value);
            props.setAlph(value);
        }
    };

    return (
        <>
            {/* Filter Desktop */}
            <div className="ml-mobile sm:ml-tablet">
                <div className="font-jakarta-sans sticky top-24 shadow-full h-[400px] py-5 rounded-xl lg:flex flex-col hidden">
                    <div className="px-5">
                        <h1 className="font-bold px-5">Lokasi</h1>
                        <div className="flex flex-col my-2 px-10 text-sm text-lite-dark-gray font-semibold w-full text-left">
                            <div className="flex flex-row my-2 items-center">
                                <input
                                    type="checkbox"
                                    onChange={() => handleCheckboxChange("Malang")}
                                    checked={selectedOptionCheck === 'Malang'}
                                    name="kota"
                                    className="h-4 w-4 outline-none" />
                                <h3 className="ml-2">Malang</h3>
                            </div>
                            <div className="flex flex-row my-2 items-center">
                                <input
                                    type="checkbox"
                                    onChange={() => handleCheckboxChange("Batu")}
                                    checked={selectedOptionCheck === 'Batu'}
                                    name="kota"
                                    className="h-4 w-4 outline-none" />
                                <h3 className="ml-2">Batu</h3>
                            </div>
                            <div className="flex flex-row my-2 items-center">
                                <input
                                    type="checkbox"
                                    onChange={() => handleCheckboxChange("Boyolali")}
                                    checked={selectedOptionCheck === 'Boyolali'}
                                    name="kota"
                                    className="h-4 w-4 outline-none" />
                                <h3 className="ml-2">Boyolali</h3>
                            </div>
                            <div className="flex flex-row my-2 items-center">
                                <input
                                    type="checkbox"
                                    onChange={() => handleCheckboxChange("Bojonegoro")}
                                    checked={selectedOptionCheck === 'Bojonegoro'}
                                    name="kota"
                                    className="h-4 w-4 outline-none" />
                                <h3 className="ml-2">Bojonegoro</h3>
                            </div>
                        </div>
                    </div>
                    <hr className="w-full border-gray-300 mt-2 mb-5" />

                    <div className="px-5">
                        <h1 className="font-bold px-5">Urutkan</h1>
                        <div className="flex flex-col px-5 items-center">
                            <div className="my-2 w-full">
                                <input
                                    type="checkbox"
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
                                    type="checkbox"
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
            </div>

            {/* Filter Mobile */}
            <div className={`${props.visible ? 'inline' : 'hidden'} w-full h-full fixed lg:hidden inline bg-white backdrop-filter backdrop-blur-lg bg-opacity-70 z-10 overflow-auto bottom-0 pt-40`}>
                <div className="px-5">
                    <div className="w-full flex justify-end">
                        <RxCross2 onClick={() => props.setVisible(false)} className="text-2xl" />
                    </div>
                    <h1 className="font-bold px-5">Lokasi</h1>
                    <div className="flex flex-col my-2 px-10 text-sm text-lite-dark-gray font-semibold w-full text-left">
                        <div className="flex flex-row my-2 items-center">
                            <input
                                type="checkbox"
                                onChange={() => handleCheckboxChange("Malang")}
                                checked={selectedOptionCheck === 'Malang'}
                                name="kota"
                                className="h-4 w-4 outline-none" />
                            <h3 className="ml-2">Malang</h3>
                        </div>
                        <div className="flex flex-row my-2 items-center">
                            <input
                                type="checkbox"
                                onChange={() => handleCheckboxChange("Batu")}
                                checked={selectedOptionCheck === 'Batu'}
                                name="kota"
                                className="h-4 w-4 outline-none" />
                            <h3 className="ml-2">Batu</h3>
                        </div>
                        <div className="flex flex-row my-2 items-center">
                            <input
                                type="checkbox"
                                onChange={() => handleCheckboxChange("Boyolali")}
                                checked={selectedOptionCheck === 'Boyolali'}
                                name="kota"
                                className="h-4 w-4 outline-none" />
                            <h3 className="ml-2">Boyolali</h3>
                        </div>
                        <div className="flex flex-row my-2 items-center">
                            <input
                                type="checkbox"
                                onChange={() => handleCheckboxChange("Bojonegoro")}
                                checked={selectedOptionCheck === 'Bojonegoro'}
                                name="kota"
                                className="h-4 w-4 outline-none" />
                            <h3 className="ml-2">Bojonegoro</h3>
                        </div>
                    </div>
                </div>
                <hr className="w-full border-gray-300 mt-2 mb-5" />

                <div className="px-5">
                    <h1 className="font-bold px-5">Urutkan</h1>
                    <div className="flex flex-col px-5 items-center">
                        <div className="my-2 w-full">
                            <input
                                type="checkbox"
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
                                type="checkbox"
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
        </>
    );
}

export default Filter;