import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Gendercheckbox from './Gendercheckbox'
import useSignup from '../../hooks/useSignup'

const Signup = () => {

    const [inputs,setInput] = useState({
       fullName : '',
       Username: '',
       Password: '',
       cnfPassword: '',
       gender: '' 
    })

    const {loading,SignUp} = useSignup();

    const checkBox = (gender)=>{
        setInput({...inputs,gender});
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
        await SignUp(inputs);
    }

    

  return (
    <div className='flex flex-col items-center justify-center min-w-98 mx-auto'>
    <div className='w-full p-6 rounded-lg shadow-md bg-white/15 bg-clip-padding backdrop-filter backdrop-blur-lg'> 
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
            SignUp 
            <span className='text-blue-500'> WeChat</span>
        </h1>
        
        <form onSubmit={handleSubmit}> 
            <div>
                <label className='label p-2'>
                    <span className='text-base label-text text-white'>FullName</span>
                </label>
                <input type="text" placeholder='Enter your name' className='w-full input input-bordered h-10' 
                    value={inputs.fullName}
                    onChange={(e)=>setInput({...inputs,fullName: e.target.value})}
                />
            </div>

            <div>
                <label className='label p-2'>
                    <span className='text-base label-text text-white'>Username</span>
                </label>
                <input type="text" placeholder='Enter username' className='w-full input input-bordered h-10'
                    value={inputs.Username}
                    onChange={(e)=>setInput({...inputs,Username: e.target.value})}
                />
            </div>

            <div>
                <label className='label p-2'>   
                    <span className='text-base label-text text-white'>Password</span>
                </label>
                <input type="password" placeholder='Enter Password' className='w-full input input-bordered h-10'
                    value={inputs.Password}
                    onChange={(e)=>setInput({...inputs,Password: e.target.value})}
                />
            </div>

            <div>
                <label className='label p-2'>   
                    <span className='text-base label-text text-white'>Confirm Password</span>
                </label>
                <input type="password" placeholder='Enter Password' className='w-full input input-bordered h-10'
                    value={inputs.cnfPassword}
                    onChange={(e)=>setInput({...inputs,cnfPassword: e.target.value})}
                />
            </div>
        

            <Gendercheckbox onCheckboxChange = {checkBox} selectedGender={inputs.gender} />

            <Link to="/login" className='p-0.5 text-sm hover:underline hover:text-blue-500 mt-2 inline-block'>
                Already have an account?
            </Link>

            <div>
                <button className='btn btn-outline btn-secondary mx-auto block mt-1'
                    disabled = {loading}
                >
                    {loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
                </button>
            </div>
        </form>
         
    </div>
</div>
  )
}

export default Signup
