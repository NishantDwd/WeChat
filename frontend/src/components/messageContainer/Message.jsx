import React from 'react'
import { useAuth } from '../../context/Authcontext'
import useConversation from '../../zustand/useConversation'
import { extractTime } from '../../utils/extractTime'


const Message = ({message}) => {
    const {authuser} =  useAuth()
    const {selectedConvo} =  useConversation()
    const fromMe = message.senderId === authuser._id;
    const chatClass = fromMe? 'chat-end' : 'chat-start';
    const profilePic  = fromMe? authuser.profilepic : selectedConvo?.profilepic;
    const bubbleBG  = fromMe? 'bg-blue-500' : ' bg-fuchsia-500';
    const time = extractTime(message.createdAt);
    const shakeClass = message.shouldShake? "shake" : "";

  return (
    <div className={`chat ${chatClass}`}>
        <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
                <img src={profilePic} alt="Chat bubble" />    
            </div>
        </div>

        <div className={`chat-bubble text-white ${bubbleBG} ${shakeClass}` }>
            {message.message}
        </div>
        <div className='text-white chat-footer opacity-50 text-xs flex gap-1 items-center'>
            {time}
        </div>
    </div>

  )
}

export default Message
