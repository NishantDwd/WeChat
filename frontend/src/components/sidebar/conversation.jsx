import React from 'react'

const conversation = () => {
  return (
    <>
      <div className='flex gap-2 items-center hover:bg-sky-400 rounded p-2 py-1 cursor-pointer'>
            <div className='avatar avatar-online'>
                <div className='w-12 rounded-full '>
                    <img src="https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_user-1024.png" alt="user" />
                </div>
            </div>

            <div className='flex flex-col flex-1'>
                <div className='flex gap-3 justify-between'>
                    <p className='font-bold text-gray-200'>John doe</p>
                    <span className='text-xl'>💕</span>
                </div>
            </div>
      </div>
      <div className='divider my-0 py-0 h-1'></div>
    </>
  )
}

export default conversation

