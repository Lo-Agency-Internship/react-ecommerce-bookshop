import React from "react";
import { userSchema } from "../../validations/userValidations";

function SignUpModal() {
    const handleSubmit = async (event) =>{
        event.preventDefault();
          let formData = {
            name: event.target[0].value,
            username: event.target[1].value,
            password: event.target[2].value,
            re_password: event.target[3].value,
          }; 
          console.log(formData);
          const isValid = await userSchema.isValid(formData);
          console.log(isValid);
      }; 
    return (
        <div className='w-full'>
            <div className='mt-14 w-full flex flex-col '>
                {/* <img className='w-8/12 h-auto' src={bookshop} alt="" /> */}
                <form className='max-w-[400px] w-full mx-auto bg-gray-900 p-8 rounded-lg' onSubmit={handleSubmit}>
                    <h2 className='text-4xl font-bold text-center  text-white'>SignUp</h2>
                    <div className='flex flex-col text-gray-400 py-2'>
                        <label>Name</label>
                        <input className='rounded-lg bg-gray-600 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800' type="text" placeholder="you name is..."/>
                    </div>
                    <div className='flex flex-col text-gray-400 py-2'>
                        <label>Username</label>
                        <input className='rounded-lg bg-gray-600 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800' type="text" placeholder="type your e-mail like X@gmail.com"/>
                    </div>
                    <div className='flex flex-col text-gray-400 py-2'>
                        <label>Password</label>
                        <input className='rounded-lg bg-gray-600 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800' type="password"  placeholder="password"/>
                    </div>
                    <div className='flex flex-col text-gray-400 py-2'>
                        <label>Re-Password</label>
                        <input className='rounded-lg bg-gray-600 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800' type="password"  placeholder="retype the password"/>
                    </div>
                    <button className='w-full my-5 py-2 bg-teal-500 text-gray font-semibold rounded-lg'>SignUp</button>
                </form>

            </div>
        </div>
    );
}
export default SignUpModal;
