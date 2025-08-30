import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand (store)/useConversation";

const Message = ({message}) => {
  const {authUser} = useAuthContext();
  const {selectedConversation } = useConversation();
  const fromMe = message.senderId === authUser._id;
  const chatClassName = fromMe ? 'chat-end' : 'chat-start';
  const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
  const bubbleBgColor = fromMe ? 'bg-blue-500' : "";




  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind css chat bubble component"
            src={profilePic}
          />
        </div>
      </div>
      <div className={`chat-bubble text-white bg-blue-500 ${bubbleBgColor} `}>{message.message}</div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">12:42 </div>
    </div>
  );
};

export default Message;


// STARTER CODE SNIPPET 

// const Message = () => {
//   return (
//     <div className="chat chat-end">
//       <div className="chat-image avatar">
//         <div className="w-10 rounded-full">
//           <img
//             alt="Tailwind css chat bubble component"
//             src={
//               "https://img.daisyui.com/images/profile/demo/spiderperson@192.webp"
//             }
//           />
//         </div>
//       </div>
//       <div className={"chat-bubble text-white bg-blue-500 "}>Hi are you there</div>
//       <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">12:42 </div>
//     </div>
//   );
// };

// export default Message;
