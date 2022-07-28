import React from "react";
import { useState } from "react";

function SignInModal() {
  //   const [showModal, setShowModal] = React.useState(false);
  return (

    <div className='w-screen'>
      <div className='mt-14 w-screen flex flex-col justify-center items-center'>
        {/* <img className='w-8/12 h-auto' src={bookshop} alt="" /> */}
        <form className='max-w-[400px] w-full mx-auto bg-gray-900 p-8 rounded-lg '>
          <h2 className='text-4xl font-bold text-center  text-white'>SignIn</h2>
          <div className='flex flex-col text-gray-400 py-2'>
            <label>Username</label>
            <input className='rounded-lg bg-gray-600 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800' type="text" />
          </div>
          <div className='flex flex-col text-gray-400 py-2'>
            <label>Password</label>
            <input className='rounded-lg bg-gray-600 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800' type="password" />
          </div>
          <button className='w-full my-5 py-2 bg-teal-500 text-gray font-semibold rounded-lg'>SignIn</button>
        </form>

      </div>
    </div>
  );
}
export default SignInModal;