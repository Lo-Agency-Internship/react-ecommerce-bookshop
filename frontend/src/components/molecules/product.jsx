import React from "react";
import image from "../../assets/images/main/1.jpg"

const Products = ({ bookInfos }) => {
    return (
        <>
            <div className="flex justify-center w-full bg-gray-200 mt-24">
                <div className="bg-gray-400 flex-col my-12 items-center flex w-8/12 rounded-xl">
                    <h2 className="py-1 mt-6 text-3xl font-bold bold  px-8  rounded-lg">{bookInfos.title}</h2>
                    <h3 className="py-1  text-xl mb-2   rounded-lg">{bookInfos.price} Rial</h3>

                    <div className="w-8/12 block "><img src={image} className="rounded-lg" alt="" /></div>
                    <h4 className="mt-6 mb-1 font-bold">Information about this Book :</h4>
                    <div className="flex bg-teal-600 mb-6  px-2 rounded-lg ">
                        <div className="mx-3 my-2 px-4 py-1  font-bold">
                            Publisher : {bookInfos.publisher}
                        </div>
                        <div className="mx-3 my-2 px-6 py-1  font-bold">
                            Genre : {bookInfos.genre}
                        </div>
                        <div className="mx-3 my-2 px-6 py-1  font-bold">
                            Author : {bookInfos.author}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Products