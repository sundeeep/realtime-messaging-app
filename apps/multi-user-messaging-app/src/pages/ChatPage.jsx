import React from 'react'
import ChatCardContainer from '../components/ChatCardContainer';
import { Outlet } from 'react-router-dom';

const ChatPage = () => {
  return (
    <main className="flex w-[100vw] h-[100vh]">
      <section className="flex flex-col h-full lg:w-[30%] border border-r">
        <header className="w-full">
          {/* Search Area */}
          <div className="sticky top-0 inset-x-0 flex items-center justify-center w-full bg-white border-b px-8 py-[9px]">
            <form className="rounded-lg border bg-[#F6F6F6] border-[#D1D1D1] w-full p-3 flex items-center gap-3">
              <label htmlFor="search"><span>
                <svg className='cursor-pointer' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.5 17.5L13.875 13.875M9.16667 5C11.4679 5 13.3333 6.86548 13.3333 9.16667M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z" stroke="#6E6D6D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                </span>
              </label>
              <input id="search" type="search" required placeholder="Search for users here..."
               className="outline-none w-full bg-transparent"/>
            </form>
          </div>
          {/* Filters: All, Blocked, Archieved */}
          <div className="flex items-center justify-start gap-3 w-full h-[7vh] bg-white px-8">
            <button className="rounded-full py-[2px] px-[8px] text-sm font-semibold text-white border border-[#EF6144] bg-[#EF6144]">All</button>
            <button className="rounded-full py-[2px] px-[8px] text-sm font-semibold text-[#5E5E5E] border bg-white hover:border-[#EF6144] hover:bg-[#EF6144] hover:text-white">Unread</button>
            <button className="rounded-full py-[2px] px-[8px] text-sm font-semibold text-[#5E5E5E] border bg-white hover:border-[#EF6144] hover:bg-[#EF6144] hover:text-white">Archived</button>
            <button className="rounded-full py-[2px] px-[8px] text-sm font-semibold text-[#5E5E5E] border bg-white hover:border-[#EF6144] hover:bg-[#EF6144] hover:text-white">Blocked</button>
          </div>
        </header>

        <ChatCardContainer />
      </section>
      <Outlet />
    </main> 
  )
}

export default ChatPage;