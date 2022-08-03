import React from "react";
import { priceSchema, authorSchema, titleSchema, genreSchema, publisherSchema } from "../../validations/bookModalValidation";
import axios from "axios";
import { useState } from "react";
import { backend } from "../../util";
import { useApiContext } from "../../context/api";

function CreatBookModal({ setOpen }) {
    const { change, setChange } = useApiContext()
    const [error, setError] = useState(null)
    async function validate(data) {
        let isValid = await priceSchema.isValid({ price: data.price })
        if (!isValid) {
            return { error: "price is not Valid" }
        }
        isValid = await authorSchema.isValid({ author: data.author })
        if (!isValid) {
            return { error: "author is not Valid" }
        }
        isValid = await titleSchema.isValid({ title: data.title })
        if (!isValid) {
            return { error: "title is not Valid" }
        }
        isValid = await genreSchema.isValid({ genre: data.genre })
        if (!isValid) {
            return { error: "publisher is not Valid" }
        }

        isValid = await publisherSchema.isValid({ publisher: data.publisher })
        if (!isValid) {
            return { error: "publisher is not Valid" }
        }

    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        let formData = {
            title: event.target[0].value,
            author: event.target[1].value,
            genre: event.target[2].value,
            publisher: event.target[3].value,
            price: event.target[4].value,
        };


        const validation = await validate(formData)

        if (!validation?.error) {
            const { title, author, genre, publisher, price } = formData
            try {
                await axios.post(backend("books"), { title, author, genre, publisher, price }).then(response => {
                    if (response.status === 201) {
                        setOpen(false)
                        setChange(!change)

                    }
                })


            } catch (error) {
                setError("something went wrong!!")

            }

        }
        else {
            setError(validation.error)
        }
    };

    return (

        <div
            className="py-12 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0" id="modal">
            <div role="alert"
                className="container mx-auto w-11/12 md:w-2/3 max-w-lg"
            >
                <form onSubmit={handleSubmit}>
                    <div
                        className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400"
                    >
                        <h1
                            className="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4"
                        >
                            Enter Book Details
                        </h1>
                        {error && <p className="text-red-500"> {error} </p>}
                        <label
                            htmlFor="title"
                            className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
                        >
                            Title
                        </label>
                        <input
                            id="title"
                            className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border
                         focus:border-indigo-700 font-normal w-full h-10 flex items-center 
                         pl-3 text-sm border-gray-300 rounded border"
                            placeholder="Emma"
                        />
                        <label
                            htmlFor="author"
                            className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
                        >
                            Author
                        </label>
                        <input
                            id="author"
                            className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border
                         focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 
                         text-sm border-gray-300 rounded border"
                            placeholder="Jane Austen"
                        />
                        <label
                            htmlFor="author"
                            className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
                        >
                            Genre
                        </label>
                        <input
                            id="genre"
                            className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border
                         focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 
                         text-sm border-gray-300 rounded border"
                            placeholder="Fiction"
                        />
                        <label
                            htmlFor="name"
                            className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
                        >
                            Publisher
                        </label>
                        <input
                            id="name"
                            className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border
                         focus:border-indigo-700 font-normal w-full h-10 flex items-center 
                         pl-3 text-sm border-gray-300 rounded border" placeholder="John Murray"
                        />
                        <label
                            htmlFor="name"
                            className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
                        >
                            Price
                        </label>
                        <input
                            id="name"
                            className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border
                         focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm
                          border-gray-300 rounded border"
                            placeholder="11$"
                        />

                        <div className="flex items-center justify-start w-full">
                            <button
                                className="focus:outline-none focus:ring-2 focus:ring-offset-2
                            focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600
                            bg-indigo-700 rounded text-white px-8 py-2 text-sm"
                            >
                                Submit
                            </button>
                            <button
                                className="focus:outline-none focus:ring-2 focus:ring-offset-2 
                             focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150
                             text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 
                             border rounded px-8 py-2 text-sm"
                                onClick={() => setOpen(false)}
                            >
                                Cancel
                            </button>
                        </div>
                        <button
                            className="cursor-pointer absolute top-0 right-0 mt-4 mr-5
                         text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out 
                         rounded focus:ring-2 focus:outline-none focus:ring-gray-600"
                            onClick={() => setOpen(false)}
                            aria-label="close modal"
                            role="button">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-x"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                strokeWidth="2.5"
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>
                    </div>
                </form>
            </div>
        </div>

    );
}
export default CreatBookModal

