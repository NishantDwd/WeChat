import React, { useState } from 'react'
import { BsSendFill } from "react-icons/bs";
import useSendMessage from '../../hooks/useSendMessage';

const MessageInp = () => {

  const [message,setMessage] = useState("")
  const {sendMessage,loading} = useSendMessage()

  const handleSubmit = async (e)=>{
    e.preventDefault();
    if(!message) return;

    await sendMessage(message);
    setMessage("");   // empty box after sending message  
  }
  return (
    <div>
      <form className='px-4 my-3' onSubmit={handleSubmit}>
        <div className='w-full relative'>
            <input type="text" placeholder='Type here...' className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white'
              value = {message}
              onChange={(e)=>setMessage(e.target.value)}
            />
            <button type='submit' className=' text-white cursor-pointer absolute inset-y-0 end-0 flex items-center pe-3'>
              {loading? <div className='loading loading-spinner'></div> : < BsSendFill />}  
            </button>
        </div>
      </form>
    </div>
  )
}

export default MessageInp
