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
                    console.log(response)
                    console.log(response.data)
                    navigate("/products")
                  }

            })
            
           } catch (error) {
            setError("something went wrong, please try again!")
           }
           
           
        }
        else {
            setError(validation.error)
        }
    };
    return (
        <div className='w-screen'>
            <div className='mt-14 w-full flex flex-col '>
                
                <form className='max-w-[400px] w-full mx-auto bg-gray-900 p-8 rounded-lg' onSubmit={handleSubmit}>
                    <h2 className='text-4xl font-bold text-center  text-white'>SignUp</h2>
                    {error && <p className="text-red-500"> {error} </p>}
                    <div className='flex flex-col text-gray-400 py-2'>
                        <label>Name</label>
                        <input className='rounded-lg bg-gray-600 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800' type="text" placeholder="you name is..." />
                    </div>
                    <div className='flex flex-col text-gray-400 py-2'>
                        <label>Username</label>
                        <input className='rounded-lg bg-gray-600 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800' type="text" placeholder="type your e-mail like X@gmail.com" />
                    </div>
                    <div className='flex flex-col text-gray-400 py-2'>
                        <label>Password</label>
                        <input className='rounded-lg bg-gray-600 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800' type="password" placeholder="password" />
                    </div>
                    <div className='flex flex-col text-gray-400 py-2'>
                        <label>Re-Password</label>
                        <input className='rounded-lg bg-gray-600 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800' type="password" placeholder="retype the password" />
                    </div>
                    <button className='w-full my-5 py-2 bg-teal-500 text-gray font-semibold rounded-lg'>SignUp</button>
                </form>

            </div>
        </div>
    );
}
export default SignUpModal;
