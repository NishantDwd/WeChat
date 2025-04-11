import React from 'react'
import useConversation from '../../zustand/useConversation'

const Conversation = ({conversation,lastIdx,emoji}) => {
  const {selectedConvo, setSelectedConvo} =  useConversation()

  const isSelected = selectedConvo?._id === conversation._id  


  return (
    <>
      <div className={`flex gap-2 items-center hover:bg-sky-400 rounded p-2 py-1 cursor-pointer
            ${isSelected? "bg-sky-400" : ""}
        `}
        onClick={()=>setSelectedConvo(conversation)}
        >
            <div className='avatar avatar-online'>
                <div className='w-12 rounded-full '>
                    <img src={conversation.profilepic} alt="user" />
                </div>
            </div>

            <div className='flex flex-col flex-1'>
                <div className='flex gap-3 justify-between'>
                    <p className='font-bold text-gray-200'>{conversation.fullName}</p>
                    <span className='text-xl'>{emoji}</span>
                </div>
            </div>
      </div>
      
      {!lastIdx && <div className='divider my-0 py-0 h-1'></div>}

    </>
  )
}

export default Conversation

