import React from 'react'
import Avatar from '../components/ui/Avatar'

const ChatRoom = () => {
  return (
    <section className="flex flex-col items-stretch h-full lg:w-[70%]">
        <header className="bg-[#F6F6F6] border-b flex items-center justify-between px-[24px] py-[12px]">
          <article className="flex gap-4 items-center">
            <Avatar />
            <div>
              <div className="flex items-center gap-3">
                <h3 className="font-semibold text-[16px] text-black dark:text-white">Sundeeep Dasari</h3>
                <div className="h-[8px] w-[8px] rounded-full bg-green-600"/>
              </div>
              <p className="text-[#EF6144]/60 font-semibold text-[14px]">Typing...</p>
            </div>
          </article>
        </header>

        <main className="flex-1">

        </main>

        <div className="border-t-[#F6F6F6] bg-white/70 w-full sticky bottom-0 inset-x-0 flex items-center px-[23px] py-[20px]">
          <form className="bg-[#F6F6F6] rounded-lg w-full">
            <label htmlFor='search-input' className="h-full w-full flex items-end gap-[10px] bg-[#F6F6F6] p-4 rounded-lg">
              <input id="search-input" type="text" placeholder="Type Message Here..." required className="flex-1 outline-none border-0 font-semibold bg-transparent p-1"/>
              <div className='flex items-center gap-[12px] bg-transparent'>
                <button className="rounded-md hover:bg-[#FEE7E2] flex items-center justify-center font-bold uppercase p-1">A</button>
                <button type="submit" className="bg-[#FEE7E2] hover:bg-[#EF6144]/50 rounded-md flex items-center justify-center font-bold uppercase p-1">S</button>
              </div>
            </label>
          </form>
        </div>
      </section>
  )
}

export default ChatRoom