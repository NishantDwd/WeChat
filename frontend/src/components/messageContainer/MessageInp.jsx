import React from 'react'
import { BsSendFill } from "react-icons/bs";

const MessageInp = () => {
  return (
    <div>
      <form className='px-4 my-3'>
        <div className='w-full relative'>
            <input type="text" placeholder='Type here...' className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white'/>
            <button type='submit' className=' text-white cursor-pointer absolute inset-y-0 end-0 flex items-center pe-3'>
                < BsSendFill />
            </button>
        </div>
      </form>
    </div>
  )
}

export default MessageInp
