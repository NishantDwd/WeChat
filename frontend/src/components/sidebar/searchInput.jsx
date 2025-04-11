import React, { useState } from 'react'
import { IoSearchSharp } from "react-icons/io5";
import useConversation from '../../zustand/useConversation';
import useGetConvo from '../../hooks/useGetConvo';
import toast from 'react-hot-toast';

const SearchInput = () => {
  const [search,setSearch] = useState("");
  const {setSelectedConvo} = useConversation();
  const {conversationss} = useGetConvo();

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(!search) return;
    if(search.length < 3) {
      return toast.error('Search term must be atleast 3 characters')
    }

    const convo = conversationss.find((c)=> c.fullName.toLowerCase().includes(search.toLowerCase()));

    if(convo) {
      setSelectedConvo(convo);
      setSearch('');
    }else{
      toast.error("No such User exist!")
      setSearch('');
    }
  }

  return (
    <form className='flex items-center gap-2 m-2' onSubmit={handleSubmit}>
        <input type="text" placeholder='Search...' className="bg-purple-950 text-white input input-bordered rounded-full" 
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
        />
        <button type='submit' className='btn btn-info btn-circle text-white'>
            <IoSearchSharp className='w-6 h-6 outline-none' />
        </button>
    </form>
  )
}

export default SearchInput
