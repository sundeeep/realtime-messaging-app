import React from 'react'
import Avatar from '../components/ui/Avatar'

const ChatRoom = () => {
  return (
    <section className="flex flex-col items-stretch h-full lg:w-[70%]">
        <header className="bg-[#F6F6F6] h-[10vh] border-b flex items-center justify-between px-4">
          <article className="flex gap-4 items-center">
            <Avatar />
            <div>
              <div className="flex items-center gap-3">
                <h3 className="font-semibold text-lg text-black dark:text-white">Sundeeep Dasari</h3>
                <div className="h-[8px] w-[8px] rounded-full bg-green-600"/>
              </div>
              <p className="text-[#EF6144]/60 font-semibold text-sm">Typing...</p>
            </div>
          </article>
        </header>

        <main className="flex-1">

        </main>

        <div className="w-full sticky bottom-0 inset-x-0 h-[10vh] flex items-center p-4">
          <form className="bg-[#F6F6F6]rounded-lg w-full">
            <label htmlFor="search-input" className="h-full w-full flex items-center gap-3 bg-[#F6F6F6] p-3 rounded-lg">
              <input id="search-input" type="text" placeholder="Type Message Here..." required className="flex-1 outline-none border-0 font-semibold bg-transparent"/>
              <button className="p-1 rounded-md hover:bg-[#FEE7E2] flex items-center justify-center font-bold uppercase">A</button>
              <button type="submit" className="bg-[#FEE7E2] hover:bg-[#EF6144]/50 p-1 rounded-md flex items-center justify-center font-bold uppercase">S</button>
            </label>
          </form>
        </div>
      </section>
  )
}

export default ChatRoom