import React from "react";
import axios from "axios";
import { backend } from "../../util";


function SignInModal({ setOpen }) {
  const handleSubmit = async (event) => {
    event.preventDefault();
    let formData = {
      email: event.target[0].value,
      password: event.target[1].value,
    };
    const { data } = await axios.post(backend("auth/login"), formData).then((response) => {
    })
  };

  return (

    <div className='w-screen my-12 transition duration-150 ease-in-out z-10 absolute'>
      <div className='w-screen flex flex-col justify-center items-center'>

        <form className='max-w-[400px] w-full mx-auto bg-gray-900 p-8 rounded-lg' onSubmit={handleSubmit}>
          <button
            className="cursor-pointer top-0 right-0 mt-4 mr-5
                         text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out 
                         rounded focus:ring-2 focus:outline-none focus:ring-gray-600"
            onClick={() => setOpen(false)}
            aria-label="close modal"
            role="button">

            <svg xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-x text-white"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              strokeWidth="5.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" />
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <h2 className='text-4xl font-bold text-center  text-white'>SignIn</h2>
          <div className='flex flex-col text-gray-400 py-2'>
            <label>Username</label>
            <input className='rounded-lg bg-gray-600 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800'
              type="text"
              placeholder="e-mail"
            />
            <small className="text-danger">
            </small>
          </div>
          <div className='flex flex-col text-gray-400 py-2'>
            <label>Password</label>
            <input className='rounded-lg bg-gray-600 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800'
              type="password"
              placeholder="password"
            />

          </div>
          <button className='w-full my-5 py-2 bg-teal-500 text-gray font-semibold rounded-lg'>SignIn</button>
        </form>

      </div>
    </div>
  );
}
export default SignInModal;