import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import useLogin from '../../hooks/useLogin';

const Login = () => {

    const [Username , setUsername] = useState("");
    const [Password, setPassword] = useState("");

    const {loading, login} = useLogin();

    const handleSubmit = async (e)=>{
        e.preventDefault();
        await login(Username,Password);
    }


  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md bg-white/15 bg-clip-padding backdrop-filter backdrop-blur-lg'> 
            <h1 className='text-3xl font-semibold text-center text-gray-300'>
                Login
                <span className='text-blue-500'> WeChat</span>
            </h1>
            
            <form onSubmit={handleSubmit}>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text text-white'>Username</span>
                    </label>
                    <input type="text" placeholder='Enter Username' className='w-full input input-bordered h-10' 
                        value={Username} 
                        onChange={(e)=>setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label className='label p-2'>   
                        <span className='text-base label-text text-white'>Password</span>
                    </label>
                    <input type="password" placeholder='Enter Password' className='w-full input input-bordered h-10' 
                        value={Password} 
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                </div>

                <Link to="/signup" className='p-0.5 text-sm hover:underline hover:text-blue-500 mt-2 inline-block'>
                    {"Don't"} have an account?
                </Link>

                <div>
                    <button className='btn btn-outline btn-secondary mx-auto block mt-1'
                        disabled = {loading}
                    >
                        {loading? <span className='loading loading-spinner'></span> : "Login"}
                    </button>
                </div>
            </form>
             
        </div>
    </div>
  )
};

export default Login;
