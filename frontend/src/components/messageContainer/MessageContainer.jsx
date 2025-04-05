import React from 'react'
import Messages from './Messages'
import MessageInp from './MessageInp'
import {TiMessages} from 'react-icons/ti'

const MessageContainer = () => {
    const noChatSelect = true;
  return (
    <div className='md:min-w-[450px] flex flex-col '>
      {noChatSelect? <NoChatSelected /> : (
        <>
        <div className='bg-slate-600 px-4 py-2 mb-2.5'>
            <span className='label-text'>To:</span>{" "}
            <span className='text-gray-800 font-bold'>John Doe</span>
        </div>

        <Messages />
        <MessageInp />
      </>
      )}
    </div>
  )
}

export default MessageContainer;


const NoChatSelected = ()=>{
    return (
        <div className='flex items-center justify-center w-full h-full '>
            <div className='px-4 text-center sm:text-lg md:text-xl text-gray-300 font-semibold flex flex-col items-center gap-2'>
                <p>🙏 Welcome John! ✨</p>
                <p>Select a chat to Start Messaging</p>
                <TiMessages className='text-3xl md:text-6xl text-center' />
            </div>
        </div>
    );
};
