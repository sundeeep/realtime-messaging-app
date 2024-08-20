import React, { useState } from 'react'
import {Button} from "@nextui-org/react";
import { useNavigate } from 'react-router-dom';
import '../index.css';

const HomePage = () => {
  const [logInLoader, setLogInLoader] = useState(false);
  
  const navigate = useNavigate();
  const joinHiryChat = () => {
    navigate('/onboarding');
  }
  return (
    <div className='bg-homepage h-[100vh] w-[100vw] flex flex-col items-center justify-center gap-[50px]'>


      <div className='bg-white/50 p-[30px] w-[90%] rounded-full flex items-end justify-around gap-[15px]'>
        <div className='flex flex-col items-center gap-[5px]'>
          <img className='w-[300px] object-contain' src="./assets/chatting.svg" alt="" />
          <h1 className='text-xl font-semibold text-black'>Personal Chatting</h1>
        </div>
        <div className='flex flex-col items-center gap-[5px]'>
          <img className='w-[300px] object-contain' src="./assets/encrypted.svg" alt="" />
          <h1 className='text-xl font-semibold text-black'>End-To-End Encryption</h1>
        </div>
        <div className='flex flex-col items-center gap-[5px]'>
          <img className='w-[300px] object-contain' src="./assets/personal_text.svg" alt="" />
          <h1 className='text-xl font-semibold text-black'>Transparent Notifications</h1>
        </div>
      </div>

      <div>
        {
          logInLoader ? (
        <Button isLoading size="lg" onClick={joinHiryChat} radius="full" className="px-7 py-3 bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
          Join Hiry Chat
        </Button>

          ):(
            <Button size="lg" onClick={joinHiryChat} radius="full" className="px-7 py-3 bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
          Join Hiry Chat
        </Button>
          )
        }
      </div>
      
    </div>
  )
}

export default HomePage