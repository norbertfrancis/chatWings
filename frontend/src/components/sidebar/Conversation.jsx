import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../zustand (store)/useConversation";

const Conversation = ({conversation,lastIdx,emoji,onSelectConversation}) => {
  const {selectedConversation,setSelectedConversation} = useConversation(); 
  const isSelected = selectedConversation?._id === conversation._id;
  const {onlineUsers} = useSocketContext()
  const isOnline = onlineUsers.includes(conversation._id)

  const handleClick = () => {
    setSelectedConversation(conversation);
    if (onSelectConversation) onSelectConversation(conversation); // auto-close on mobile
  };

return (
  <>
    <div
      className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer ${
        isSelected ? "bg-sky-400" : ""
      }`}
      onClick={handleClick}
    >
      <div className="relative">
        <div className="avatar">
          <div className="w-12 rounded-full">
            <img src={conversation.profilePic} alt="user avatar" />
          </div>
        </div>
        {isOnline && (
          <span className="absolute bottom-0 right-0 block w-3 h-3 bg-green-500 rounded-full ring-2 ring-gray-900"></span>
        )}
      </div>

      <div className="flex flex-col flex-1">
        <div className="flex gap-3 justify-between">
          <p className="font-bold text-gray-200">{conversation.fullName}</p>
          <span className="text-xl">{emoji}</span>
        </div>
      </div>
    </div>
    {!lastIdx && <div className="divider my-0 py-0 h-1" />}
  </>
);


};

export default Conversation;



//Starter code snippet 
// const Conversation = () => {
//   return (
//     <>
//       <div className="flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer">
//         <div className="avatar online">
//           <div className="w-12 rounded-full">
//             <img
//               src="https://img.daisyui.com/images/profile/demo/gordon@192.webp"
//               alt="user avatar"
//             />
//           </div>
//         </div>

//         <div className="flex flex-col flex-1">
//           <div className="flex gap-3 justify-between">
//             <p className="font-bold text-gray-200"> Travis Scot</p>
//             <span className="text-xl">😊</span>
//           </div>
//         </div>
//       </div>
//       <div className="divider my-0 py-0 h-1" />
//     </>
//   );
// };

// export default Conversation;
