import { Button } from '@nextui-org/button'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import useSocket from '../hooks/useSocket';
import useAuthStore from '../store/useAuthStore';

const Onboarding = () => {
  const {registerNewUser} = useAuthStore();
  const [user, setUser] = useState({
    username: "",
    email:"",
    password:""
  })
  const updateUserForm = (event) => {
    setUser({...user, [event.target.name]: event.target.value});
  }
  const navigate = useNavigate();
  const registerUser =(event) => {
    event.preventDefault();
    try{
      if(user.username && user.email && user.password){
        registerNewUser(user);
        navigate('/chat');
      }
    }catch(error){
      console.error("Error registering user", error.message);
    }
  }

  return (
    <main className='flex items-center justify-center h-[100vh] w-[100vw]'>
      <form onSubmit={registerUser} className='flex flex-col gap-3 items-start p-3 border rounded-md'>
        <div className="flex flex-col gap-1 items-start">
          <label htmlFor="username">Username</label>
          <input value={user?.username} onChange={updateUserForm} className="border border-orange-600 outline-none rounded-md p-3 w-full" type="text" id="username" name="username" />
        </div>
        <div className="flex flex-col gap-1 items-start">
          <label htmlFor="email">email</label>
          <input value={user?.email} onChange={updateUserForm} className="border border-orange-600 outline-none rounded-md p-3 w-full" type="text" id="email" name="email" />
        </div>
        <div className="flex flex-col gap-1 items-start">
          <label htmlFor="password">password</label>
          <input value={user?.password} onChange={updateUserForm} className="border border-orange-600 outline-none rounded-md p-3 w-full" type="text" id="password" name="password" />
        </div>
        <Button color="warning" type="submit">Join Hiry Chat</Button>
      </form>
    </main>
  )
}

export default Onboarding