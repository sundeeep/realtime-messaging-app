import React from 'react'
import Avatar from '../ui/Avatar'

const ChatCard = ({name, lastSeen, lastText}) => {
  return (
    <article className='cursor-pointer p-4 flex items-start gap-3 border-b'>
        <Avatar />
        <div className='flex-1 flex flex-col items-start'>
            <div className='flex items-center gap-2'>
                <h3 className='text-[#202020] font-semibold text-sm'>{name}</h3>
                <span className='h-[5px] w-[5px] rounded-full bg-[#C4C4C4]'/>
                <p className='text-[#C4C4C4] text-sm'>{lastSeen} Days Ago</p>
            </div>
            <p className='text-[#444444] text-md line-clamp-3 overflow-hidden text-ellipsis leading-tight'>
                <span className='text-[#878686]'>{name}: </span> {lastText}
            </p>
        </div>
    </article>
  )
}

export default ChatCard