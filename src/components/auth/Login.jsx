import React, { useState } from 'react'

const Login = ({handleLogin}) => {
    const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
    const submitHandler = (e)=>{
        e.preventDefault()        
   handleLogin(email,password)
   setEmail('')
   setPassword('')
    }
  return (
    <div className='flex h-screen w-screen justify-center items-center bg-[#1c1c1c]'>
      <div className='border-2 rounded-xl border-emerald-600 p-20 '>
<form onSubmit={(e)=>{submitHandler(e)}} className='flex flex-col items-center justify-center'>
    <input value={email} onChange={(e)=>{
        setEmail(e.target.value)
    }} required  className='outline-none bg-transparent text-white border-2 border-emerald-600 text-xl py-3 px-6 rounded-full placeholder:text-gray-400' placeholder='enter your email' type="email" />
    <input value={password} onChange={(e)=>{
        setPassword(e.target.value)
    }} required className='outline-none mt-5 bg-transparent text-white border-2 border-emerald-600 text-xl py-3 px-6 rounded-full placeholder:text-gray-400' placeholder='password' type="password" />
    <button className='mt-5 text-white border-none outline-none bg-emerald-600 text-xl py-3 px-28 rounded-full placeholder:text-gray-400'>Login</button>
</form>
      </div>
    </div>
  )
}

export default Login
