import React, { useState } from 'react'

const Login = ({handleLogin}) => {

    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    const submitHandler = (e) => {
        e.preventDefault();
        handleLogin(email,password)

        setemail("")
        setpassword("")
    }

  return (
    <div className='flex bg-black h-screen w-full  items-center justify-center '>
        <form onSubmit={submitHandler} className='flex rounded-[40px] flex-col gap-9 border-2 border-emerald-500 p-20'>
            <input required value={email} onChange={(e)=>{
                setemail(e.target.value)
            }} type="email" className='border-2 border-emerald-500 rounded-full text-l px-5 py-2 outline-none' placeholder='Enter Email'/>
            <input required value={password} onChange={(e)=>{
                setpassword(e.target.value)
            }} type="password" className='border-2 border-emerald-500 rounded-full text-l px-5 py-2 outline-none' placeholder='Enter Password'/>
            <button className='bg-emerald-500 px-5 py-1.5 rounded-full font-semibold'>Log In</button>
        </form>
      
    </div>
  )
}

export default Login
