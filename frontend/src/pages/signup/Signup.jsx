import React from 'react'


const Signup = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-98 mx-auto'>
    <div className='w-full p-6 rounded-lg shadow-md bg-white/15 bg-clip-padding backdrop-filter backdrop-blur-lg'> 
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
            SignUp 
            <span className='text-blue-500'> WeChat</span>
        </h1>
        
        <form>
            <div>
                <label className='label p-2'>
                    <span className='text-base label-text text-white'>FullName</span>
                </label>
                <input type="text" placeholder='Enter your name' className='w-full input input-bordered h-10' />
            </div>

            <div>
                <label className='label p-2'>
                    <span className='text-base label-text text-white'>Username</span>
                </label>
                <input type="text" placeholder='Enter username' className='w-full input input-bordered h-10' />
            </div>

            <div>
                <label className='label p-2'>   
                    <span className='text-base label-text text-white'>Password</span>
                </label>
                <input type="password" placeholder='Enter Password' className='w-full input input-bordered h-10' />
            </div>

            <div>
                <label className='label p-2'>   
                    <span className='text-base label-text text-white'>Confirm Password</span>
                </label>
                <input type="password" placeholder='Enter Password' className='w-full input input-bordered h-10' />
            </div>
        

            <div className='flex mt-1 '>
      <div className='form-control mt-0.5 p-2'>
        <label className={`label gap-2 cursor-pointer`}>
            <span className='label-text text-white'>Male</span>
            <input type="checkbox" className='checkbox checkbox-primary' />
        </label>
         </div>
        <div className='form-control mt-0.5 p-2'>
        <label className={`label gap-2 cursor-pointer`}>
            <span className='label-text text-white'>Female</span>
            <input type="checkbox" className='checkbox checkbox-secondary' />
        </label>
      </div>
    </div>

            <a href="#" className='p-0.5 text-sm hover:underline hover:text-blue-500 mt-2 inline-block'>
                Already have an account?
            </a>

            <div>
                <button className='btn btn-outline btn-secondary mx-auto block mt-1'>Sign Up</button>
            </div>
        </form>
         
    </div>
</div>
  )
}

export default Signup
