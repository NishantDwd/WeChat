import React from 'react'
import { BiLogOut } from "react-icons/bi";
import logout from '../../hooks/logout';

const logoutBtn = () => {

  const {loading,loggedOut} = logout();

  return (
    <div className='mt-auto '>
      <BiLogOut className='w-6 h-6 text-white cursor-pointer'
        onClick={loggedOut}
      />
    </div>
  )
}

export default logoutBtn
