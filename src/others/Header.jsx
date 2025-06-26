import React from 'react'


const Header = ({userData}) => {
  return (
    <div className='flex items-center justify-between'>
      <h1 className='text-2xl'>Hello ,<br /><span className='text-4xl font-semibold'>{userData.name}</span></h1>
      <button onClick={()=>{
        localStorage.removeItem("loggedUser")
        localStorage.removeItem("loggedUserData")
        window.location.reload()
      }} className='bg-red-600 text-l border-none px-5 py-2 rounded-lg'>Log Out</button>
    </div>
  )
}

export default Header
