import CardBuah from "@/features/components/card";
import ReactPaginate from "react-paginate";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri"
import { useState } from "react";
import { Fruit, Props } from "@/interface/data/fruit";
import Filter from "../filter";

const PaginateBuah = (props: Fruit) => {
    const itemsPerPage = 10;
    const [itemOffset, setItemOffset] = useState<number>(0);
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = props.data?.data?.data.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(props.data?.data?.data.length / itemsPerPage);
    const handlePageClick = (event: { selected: number }) => {
        const newOffset = (event.selected * itemsPerPage) % props.data?.data?.data.length;
        setItemOffset(newOffset);
    };
    const result: Props[] = props.data?.data.data
    const filteredData = (value: string) => {
        const res = result.filter((title: Props) => {
            return value && title && title.name && title.name.toLowerCase().includes(value)
        })
        setDataSearch(res)
        console.log(dataSearch)
    }
    const [dataSearch, setDataSearch] = useState<Props[]>([])
    const searchItems = dataSearch.slice(itemOffset, endOffset)
    const pageCountSearch = Math.ceil(dataSearch.length / itemsPerPage);
    const [input, setInput] = useState<string>('')
    const handleChange = (value: string) => {
        setInput(value)
        filteredData(value)
        if (value.trim() === "") {
        } else {
            filteredData(value);
        }
    }
    return (
        <div className="flex flex-col w-full  mt-32">
            <div className="w-full flex justify-center">
                <div className="w-[50%] flex justify-center border-2 rounded-xl">
                    <form className="w-full">
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" className="w-5 h-5 font-bold text-dark-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            </div>
                            <input value={input} onChange={(e) => handleChange(e.target.value)} name='name' className="block outline-none bg-light-purple w-[100%] placeholder:text-vsmall placeholder:text-dark-purple sm:placeholder:text-small rounded-lg p-2 pl-10 text-sm  " placeholder="Cari artikel..." />
                        </div>
                    </form>
                </div>
            </div>
            <div className="w-full flex flex-row mt-10">
                <Filter />
                <div className="w-full flex flex-col">
                    <div className="grid grid-cols-5 grid-rows-2 w-full">
                        {
                            dataSearch.length > 0 ?
                                searchItems.map((data: Props) => {
                                    return (
                                        <CardBuah
                                            id={data.id}
                                            category={data.category}
                                            category_id={data.category_id}
                                            key={data.id}
                                            discount={data.discount}
                                            rating={data.rating}
                                            price={data.price}
                                            img={data.img}
                                            name={data.name}
                                            place={data.place}
                                            sold={data.sold}
                                            weight={data.weight}
                                            stock={data.stock}
                                            condition={data.condition}
                                        />
                                    )
                                })
                                :
                                dataSearch === undefined ?
                                    <div className="flex items-center justify-center h-full">
                                        <h1 className="font-jakarta-sans font-semibold text-xl bg-gradient-to-b from-[#FF4087] to-[#9C003A] bg-clip-text text-transparent">Mohon maaf, artikel yang anda cari tidak ada...</h1>
                                    </div>
                                    :
                                    currentItems?.map((data: Props) => {
                                        return (
                                            <CardBuah
                                                id={data.id}
                                                category={data.category}
                                                category_id={data.category_id}
                                                key={data.id}
                                                discount={data.discount}
                                                rating={data.rating}
                                                price={data.price}
                                                img={data.img}
                                                name={data.name}
                                                place={data.place}
                                                sold={data.sold}
                                                weight={data.weight}
                                                stock={data.stock}
                                                condition={data.condition}
                                            />
                                        )
                                    })
                        }
                    </div>
                    <div className="flex flex-row w-full justify-center items-center my-14">
                        <div className="flex flex-row items-center font-semibold justify-around w-full">
                            {
                                dataSearch.length > 0 ?
                                    <ReactPaginate
                                        className="flex flex-row items-center"
                                        breakLabel="..."
                                        nextLabel={<RiArrowRightSLine className="text-3xl mx-2 text-dark-red" />}
                                        onPageChange={handlePageClick}
                                        pageRangeDisplayed={3}
                                        marginPagesDisplayed={2}
                                        previousLabel={<RiArrowLeftSLine className="text-3xl mx-2 text-dark-red" />}
                                        renderOnZeroPageCount={null}
                                        pageCount={pageCountSearch}
                                        containerClassName={"pagination"}
                                        pageClassName={"page-item"}
                                        activeClassName={"active"}
                                    />
                                    :
                                    <ReactPaginate
                                        className="flex flex-row items-center"
                                        breakLabel="..."
                                        nextLabel={<RiArrowRightSLine className="text-3xl mx-2 text-dark-red" />}
                                        onPageChange={handlePageClick}
                                        pageRangeDisplayed={3}
                                        marginPagesDisplayed={2}
                                        previousLabel={<RiArrowLeftSLine className="text-3xl mx-2 text-dark-red" />}
                                        renderOnZeroPageCount={null}
                                        pageCount={pageCount}
                                        containerClassName={"pagination"}
                                        pageClassName={"page-item"}
                                        activeClassName={"active"}
                                    />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PaginateBuah;