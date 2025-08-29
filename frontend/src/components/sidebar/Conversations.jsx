import useGetConversations from "../../hooks/useGetConversation"; 
import { getRandomEmojis } from "../../utils/emojis";
import Conversation from "./Conversation";

const Conversations = () => {
  const {loading, conversations} = useGetConversations();
  console.log(conversations)

  return (
    <div className="py-2 flex flex-col overflow-auto" >

      {conversations.map((conversation,idx) => (
        <Conversation
        key={conversation._id}
        conversation={conversation}
        emoji={getRandomEmojis()}
        lastIdx={idx === conversations.length -1}
        />
      ))}
      {!loading ? <span className="loading loading-spinner mx-auto"></span> : null}
    </div>
  );
};

export default Conversations;

//Starter code snippet 
// import React from "react";
// import Conversation from "./Conversation";

// const Conversations = () => {
//   return (
//     <div className="py-2 flex flex-col overflow-auto">
//       <Conversation />
//       <Conversation />
//       <Conversation />
//       <Conversation />
//       <Conversation />
//     </div>
//   );
// };

// export default Conversations;