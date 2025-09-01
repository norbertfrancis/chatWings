import { useEffect } from "react";
import useConversation from "../../zustand (store)/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";
import { useAuthContext } from "../../context/AuthContext";

const MessageContainer = () => {
  const {selectedConversation, setSelectedConversation} = useConversation()

  useEffect(() => {
      //cleanup function(unmount)
      return () => setSelectedConversation(null)
  },[setSelectedConversation])
  
  return (
<div className="flex flex-col h-full w-full max-h-screen overflow-hidden">
  {!selectedConversation ? (
    <NoChatSelected />
  ) : (
    <>
      <div className="bg-base-300 px-4 py-2 flex items-center justify-between shadow">
        <span className="font-semibold text-sm md:text-base ml-12">To: {selectedConversation.fullName}</span>
      </div>
      <div className="flex-1 overflow-y-auto px-2">
        <Messages />
      </div>
      <div className="p-2 border-t border-slate-600 bg-base-200 flex-shrink-0">
        <MessageInput />
      </div>
    </>
  )}
</div>
  );
};
export default MessageContainer;

const NoChatSelected = () => {
  const {authUser}= useAuthContext()
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 🙌 {authUser.fullName}</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div> 
    </div>
  );
};

//STARTER CODE SNIPPET

// import MessageInput from "./MessageInput"
// import Messages from "./Messages"

// const MessageContainer = () => {
//   return (
//     <div className="md:min-w-[450px] flex flex-col">
//         <>
//         {/* Header */}
//             <div className="bg-slate-500 px-4 py-2 mb-2">
//                 <span className="label-text">To:</span>
//                 <span className="text-gray-900 font-bold"> Travis Scot</span>
//             </div>
//           <Messages/>
//           <MessageInput/>
//         </>

//     </div>
//   )
// }

// export default MessageContainer
