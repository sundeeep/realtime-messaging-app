import { Button } from '@nextui-org/button'
import React from 'react'
import { useNavigate } from 'react-router-dom';

const Onboarding = () => {
  const navigate = useNavigate();
  const openChatPage = (event) => {
    event.preventDefault();
    navigate("/chat/@me");
  }
  return (
    <main className='flex items-center justify-center h-[100vh] w-[100vw]'>
      <form onSubmit={openChatPage} className='flex flex-col gap-3 items-start p-3 border rounded-md'>
        <div className="flex flex-col gap-1 items-start">
          <label htmlFor="username">Username</label>
          <input className="border border-orange-600 outline-none rounded-md p-3 w-full" type="text" id="username" name="username" />
        </div>
        <div className="flex flex-col gap-1 items-start">
          <label htmlFor="email">email</label>
          <input className="border border-orange-600 outline-none rounded-md p-3 w-full" type="text" id="email" name="email" />
        </div>
        <div className="flex flex-col gap-1 items-start">
          <label htmlFor="password">password</label>
          <input className="border border-orange-600 outline-none rounded-md p-3 w-full" type="text" id="password" name="password" />
        </div>
        <Button color="warning" type="submit">Join Hiry Chat</Button>
      </form>
    </main>
  )
}

export default Onboarding