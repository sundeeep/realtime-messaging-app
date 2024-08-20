import ChatCard from "./reusable/ChatCard";

const ChatCardContainer = () => {
  return (
    <div className="flex flex-col items-stretch flex-1 w-full overflow-y-auto">
        {Array(20).fill(null).map(()=>(
            <ChatCard isLastMessageSentByYou={true} gender={"male"} name='Sundeeep Dasari' lastSeen={2} lastText='Your code will only be used to evaluate you, and will not be used in any production application. We look forward to seeing your work, have a great day! 😁'/>
        ))}
    </div>
  )
}

export default ChatCardContainer;