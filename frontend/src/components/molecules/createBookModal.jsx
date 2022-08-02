import React from "react";

function CreatBookModal({ setOpen }) {
    const handleSubmit = async (event) => {
        event.preventDefault();
        let formData = {
            username: event.target[0].value,
            password: event.target[1].value,
        };

    };

    return (
        <form action="">
            <div
                className="py-12 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0" id="modal">
                <div role="alert"
                    className="container mx-auto w-11/12 md:w-2/3 max-w-lg"
                >
                    <div
                        className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400"
                    >
                        <h1
                            className="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4"
                        >
                            Enter Book Details
                        </h1>
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
                            htmlFor="genre"
                            className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
                        >
                            Choose a genre:
                        </label>
                        <select
                            name="genre"
                            id="Genre"
                            className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border
                         focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm
                          border-gray-300 rounded border"
                        >
                            <option value="comedy">Comedy</option>
                            <option value="horror">Horror</option>
                            <option value="drama">Drama</option>
                            <option value="science">Science</option>
                            <option value="fiction">Fiction</option>
                            <option value="others">Others</option>
                        </select>
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
                </div>
            </div>
        </form>
    )
};
export default CreatBookModal

