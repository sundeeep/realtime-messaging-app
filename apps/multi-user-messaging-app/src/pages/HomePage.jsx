import React from 'react'
import {Button} from "@nextui-org/react";
import { useNavigate } from 'react-router-dom';
import AppWriteAuth from '../appwrite/auth.service';
const HomePage = () => {
  const auth = new AppWriteAuth();
  const navigate = useNavigate();
  const joinHiryChat = () => {
    navigate('/onboarding');
  }
  return (
    <div className='h-[100vh] w-[100vw] flex items-center justify-center'>
      <Button onClick={joinHiryChat} radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
        Join Hiry Chat
      </Button>
    </div>
  )
}

export default HomePage