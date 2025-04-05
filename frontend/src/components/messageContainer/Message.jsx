import React from 'react'

const Message = () => {
  return (
    <div className='chat chat-end'>
        <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
                <img src="https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_user-1024.png" alt="Chat bubble" />    
            </div>
        </div>

        <div className={'chat-bubble text-white bg-blue-500'}>
            Hi! What u doing?
        </div>
        <div className='text-white chat-footer opacity-50 text-xs flex gap-1 items-center'>
            12:00 
        </div>
    </div>

  )
}

export default Message
