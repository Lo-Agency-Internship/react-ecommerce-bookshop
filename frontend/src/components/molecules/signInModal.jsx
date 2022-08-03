import React from "react";
import axios from "axios";
import { backend } from "../../util";
import  jwt_decode from "jwt-decode";

import { useNavigate, useResolvedPath } from "react-router-dom";

function SignInModal({ setOpen }) {
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    let formData = {
      email: event.target[1].value,
      password: event.target[0].value,
    };
  
    console.log(formData);
    try{
     await axios.post(backend("auth/login"),{email:'mahsa@gmail.com',password:'12345678'}).then((response) => {
      if(response.status === 201){
        console.log(response.data);
        localStorage.setItem('token',response.data.accessToken);
        const {accessToken} = response.data;
        const decoded = jwt_decode(accessToken);
        console.log('hope',decoded);
       // setUser(decode)
        navigate("/products")
      }
    })
     
  } catch (error) {
      
        console.log(error)
      }

    }
    



    



  return (

    <div className='w-screen my-12 transition duration-150 ease-in-out z-10 absolute'>
      <div className=' mt-24 w-screen flex flex-col justify-center items-center'>

        <form className='max-w-[400px] w-full relative mx-auto bg-[#e2e2e2de] p-8 rounded-lg' onSubmit={handleSubmit}>

          <h2 className='text-4xl font-bold text-center text-[#b6803dc7] text-white'>SignIn</h2>
          <div className='flex flex-col font-bold py-2'>
            <label>Username</label>
            <input className='rounded-lg bg-bg-[#fff] mt-2 p-2 focus:border-blue-500 focus:bg-white-800'
              type="text"
              placeholder="e-mail"
            />
            <small className="text-danger">
            </small>
          </div>
          <div className='flex flex-col font-bold  py-2'>
            <label>Password</label>
            <input className='rounded-lg bg-bg-[#fff] mt-2 p-2 focus:border-blue-500 focus:bg-white-800'
              type="password"
              placeholder="password"
            />
          </div>
          <button className='w-full my-5 py-2  bg-[#b6803dc7] text-gray font-semibold rounded-lg'>SignIn</button>
          <button
            className="cursor-pointer absolute top-0 right-0 mt-4 mr-5
                         text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out 
                         rounded focus:ring-2 focus:outline-none focus:ring-gray-600"
            onClick={() => setOpen(false)}
            aria-label="close modal"
            role="button"
            type="reset">
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
        </form>
      </div>
    </div>
  );
}
export default SignInModal;