import { useState } from 'react';
import {BsSend} from 'react-icons/bs'
import useSendMessage from '../../hooks/useSendMessage';

const MessageInput = () => {
  const [message, setMessage] = useState("")
  const {loading, sendMessage} =  useSendMessage()
  const handleSubmit = async (e) => {
      e.preventDefault();
      if(!message) return;
      await sendMessage(message);
      setMessage("");

  }
  return (
    <form onSubmit={handleSubmit} className="p-1 flex items-center gap-2 w-full">
  <input 
    type="text" 
    className="input input-bordered w-full rounded-full text-sm bg-base-200" 
    placeholder="Type a message…" 
    value={message}
    onChange={(e) => setMessage(e.target.value)}
  />
  <button type="submit" className="btn btn-circle btn-sm bg-sky-500 border-none">
    {loading ? <span className="loading loading-spinner"></span> : <BsSend className="text-white" />}
  </button>
</form>

  )
}

export default MessageInput


// STARTER CODE SNIPPET

// import {BsSend} from 'react-icons/bs'

// const MessageInput = () => {
//   return (
//     <form className='px-4 my-3'>
//         <div className='w-full'>
//             <input type="text" className='border text-sm rounded-lg block w-full p-2.5 bg-gray-600 text-white' placeholder='Send a message' />
//             <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
//                 <BsSend />
//             </button>

//         </div>
//     </form>
//   )
// }

// export default MessageInput
