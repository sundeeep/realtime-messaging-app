import React from 'react'
import ChatCardContainer from '../components/ChatCardContainer';
import { Outlet } from 'react-router-dom';

const ChatPage = () => {
  return (
    <main className="flex w-[100vw] h-[100vh]">
      <section className="flex flex-col h-full lg:w-[30%] border border-r">
        <header className="w-full">
          {/* Search Area */}
          <div className="sticky top-0 inset-x-0 flex items-center justify-center w-full h-[10vh] bg-white border-b px-8">
            <form className="rounded-lg border border-[#DEDEDE] w-full p-3 flex items-center gap-3">
              <label htmlFor="search"><span>S</span></label>
              <input id="search" type="search" required placeholder="Search for users here..."
               className="outline-none w-full font-semibold"/>
            </form>
          </div>
          {/* Filters: All, Blocked, Archieved */}
          <div className="flex items-center justify-start gap-3 w-full h-[7vh] bg-white px-8">
            <button className="rounded-full py-1 px-2 text-sm font-semibold text-white order border-[#EF6144] bg-[#EF6144]">All</button>
            <button className="rounded-full py-1 px-2 text-sm font-semibold text-[#5E5E5E] border bg-white">Unread</button>
            <button className="rounded-full py-1 px-2 text-sm font-semibold text-[#5E5E5E] border bg-white">Archived</button>
            <button className="rounded-full py-1 px-2 text-sm font-semibold text-[#5E5E5E] border bg-white">Blocked</button>
          </div>
        </header>

        <ChatCardContainer />
      </section>
      <Outlet />
    </main> 
  )
}

export default ChatPage