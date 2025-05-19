import React, { useEffect, useRef } from 'react'
import Message from './Message'
import useGetMessage from '../../hooks/useGetMessage'
import MessageSkeleton from '../skeleton/messageSkeleton';
import useListenMessages from '../../hooks/useListenMessages';

const Messages = () => {
  const {messages, loading} = useGetMessage();
  useListenMessages();
  const lastMessage = useRef();

  useEffect(()=>{
      setTimeout(()=>{
        lastMessage.current?.scrollIntoView({behavior: "smooth"});  // Automatic Scrolls into View when type new Message
      },50)
  },[messages]);

  return (
    <div className='px-4 flex-1 overflow-auto'>
        {!loading && messages.length >0 && messages.map((message)=>(
          <div key={message._id} ref={lastMessage}>
            <Message 
            message={message}
          />
          </div>
        ))}

        {loading && [...Array(3)].map((_, idx)=> <MessageSkeleton key={idx} />)}

        {!loading && messages.length===0 && (
          <p className='text-center text-white'>Send a message to Start conversation</p>
        )}

    </div>
  )
}

export default Messages
