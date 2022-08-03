import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useApiContext } from "../../context/api";
import Card from "../molecules/card";

const Products = (props) => {
    const { getAllBooks, change } = useApiContext()
    const [books, setBooks] = useState([])

    useEffect(() => {
        getAllBooks().then(setBooks)
    }, [change])

    return (
        <>
            <div className="flex justify-evenly p-5 w-full flex-wrap  ">
                <div className="bg-white my-10 rounded-lg">
                    <div className="max-w-2xl py-5  sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8 flex justify-around  flex-wrap">
                        <h2 className="sr-only">Products</h2>
                        {books.map((element, index) => (
                            <Card book={element} key={index} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Products