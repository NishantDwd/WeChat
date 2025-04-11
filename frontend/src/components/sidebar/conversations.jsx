import React from 'react'
import Conversation from './conversation'
import useGetConvo from '../../hooks/useGetConvo'
import { getRandomEmoji } from '../../utils/emojis';

const conversations = () => {
   const {loading,conversationss} =  useGetConvo();
   

  return (
    <div className='py-2 flex flex-col overflow-auto'>
      {conversationss.map((conversation,idx)=>(
        <Conversation 
          key = {conversation._id}
          conversation = {conversation}
          emoji  = {getRandomEmoji()}
          lastIdx = {idx===conversationss.length-1}
        />
      ))}

       {loading ? <span className='loading loading-spinner mx-auto'></span> : null}

    </div>
  )
}

export default conversations
