import React from "react";
import { nameSchema, emailSchema, passwordSchema } from "../../validations/userValidations";
import axios from "axios";
import { backend } from "../../util";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUpModal({ setOpen }) {
    const navigate = useNavigate();
    const [error, setError] = useState(null)
    async function validate(data) {
        let isValid = await nameSchema.isValid({ name: data.name })
        if (!isValid) {
            return { error: "name is not Valid" }
        }
        isValid = await emailSchema.isValid({ email: data.email })
        if (!isValid) {
            return { error: "email is not Valid" }
        }
        isValid = await passwordSchema.isValid({ password: data.password })
        if (!isValid) {
            return { error: "password is not Valid" }
        }
        if (data.password !== data.re_password) {
            return { error: "password not matched" }
        }
    }

    const handleSubmit = async (event) => {
        
        event.preventDefault();
        let formData = {
            name: event.target[0].value,
            email: event.target[1].value,
            password: event.target[2].value,
            re_password: event.target[3].value,
        };

        const validation = await validate(formData)
        if (!validation?.error) {
           try {

            const { name, email, password } = formData
            await axios.post(backend("users"), { name, email, password }).then(response=>{
                if (response.status === 201){
                    navigate("/products")
                  }
                
            })
            
           } catch (error) {
            console.log(error);
            if (error.response.status=== 602){
                setError("This email has chosen before.")
            }
            else{
                setError("Something went wrong!")
            }
           }
        }
        else {
            setError(validation.error)
        }
    };
    return (
        <div className='w-screen my-12 transition duration-150 ease-in-out z-10 absolute'>
            <div className='mt-24 w-full  flex flex-col '>
                <form className='max-w-[400px] w-full mx-auto bg-[#e2e2e2de] relative p-8 rounded-lg' onSubmit={handleSubmit}>
                    <h2 className='text-4xl font-bold text-center  text-[#b6803dc7]'>SignUp</h2>
                    {error && <p className="text-red-500"> {error} </p>}
                    <div className='flex flex-col  font-bold py-2'>
                        <label>Name</label>
                        <input className='rounded-lg bg-[#fff] mt-2 p-2 focus:border-blue-500 focus:bg-white-800' type="text" placeholder="you name is..." />
                    </div>
                    <div className='flex flex-col  font-bold py-2'>
                        <label>Username</label>
                        <input className='rounded-lg bg-[#fff] mt-2 p-2 focus:border-blue-500 focus:bg-white-800' type="text" placeholder="type your e-mail like X@gmail.com" />
                    </div>
                    <div className='flex flex-col  font-bold py-2'>
                        <label>Password</label>
                        <input className='rounded-lg bg-[#fff] mt-2 p-2 focus:border-blue-500 focus:bg-white-800' type="password" placeholder="password" />
                    </div>
                    <div className='flex flex-col  font-bold py-2'>
                        <label>Re-Password</label>
                        <input className='rounded-lg bg-[#fff] mt-2 p-2 focus:border-blue-500 focus:bg-white-800' type="password" placeholder="retype the password" />
                    </div>
                    
                    <button type="submit" className='w-full my-5 py-2 bg-[#b6803dc7] text-gray font-semibold rounded-lg'>SignUp</button>
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
export default SignUpModal;
