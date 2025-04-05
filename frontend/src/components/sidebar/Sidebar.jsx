import React from 'react'
import SearchInput from './searchInput'
import Conversations from './conversations'
import LogoutBtn from './logoutBtn'

const Sidebar = () => {
  return (
    <div className='border-r border-slate-400 p-3.5 flex flex-col'>
      <SearchInput />
      <div className='divider before:bg-gray-500 after:bg-gray-500 px-2'></div>
       <Conversations />     
       <LogoutBtn />      
    </div>
  )
}

export default Sidebar
