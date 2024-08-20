import React from 'react'
import Avatar from '../ui/Avatar'

const ChatCard = ({name, lastSeen, lastText, gender, isLastMessageSentByYou}) => {
  return (
    <article className='transition-all duration-500 ease-in-out hover:bg-[#FEE7E2] bg-white cursor-pointer p-4 flex items-start gap-3 border-b hover:border-b-orange-500'>
        <Avatar />
        <div className='flex-1 flex flex-col items-start'>
            <div className='flex items-center gap-2'>
                <h3 className='text-[#202020] font-semibold text-[14px]'>{name}</h3>
                <span className='h-[5px] w-[5px] rounded-full bg-[#C4C4C4]'/>
                <p className='text-[#C4C4C4] text-[14px]'>{lastSeen} Days Ago</p>
            </div>
            <p className='text-[#444444] text-[16px] line-clamp-1 overflow-hidden text-ellipsis leading-tight'>
                <span className='text-[#878686]'>{isLastMessageSentByYou ? "You" :gender === "male" ? "Him" : "Her"}: </span> {lastText}
            </p>
        </div>
    </article>
  )
}

export default ChatCard