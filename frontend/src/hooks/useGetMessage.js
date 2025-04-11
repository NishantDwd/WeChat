import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import useConversation from '../zustand/useConversation';

const useGetMessage = () => {
    const [ loading, setLoading] = useState(false);
    const {messages,setMessages,selectedConvo} = useConversation();

    useEffect(()=>{
        const getMessages = async() =>{
            setLoading(true);


            try {
                const res = await fetch(`/api/messages/${selectedConvo._id}`);
                const data = await res.json();

                if(data.error)
                {
                    throw new Error(data.error);
                }

                setMessages(data);

            } catch (error) {
                toast.error(error.message);
            }finally{
                setLoading(false);
            }
        }

        if(selectedConvo?._id) getMessages()

    },[selectedConvo?._id, setMessages]);

    return {messages,loading};
}

export default useGetMessage;
