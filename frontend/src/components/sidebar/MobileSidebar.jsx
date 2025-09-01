import { useState } from "react";
import Sidebar from "./Sidebar";
import { IoMenu } from "react-icons/io5";
import useConversation from "../../zustand (store)/useConversation";

const MobileSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { setSelectedConversation } = useConversation();

  const handleSelectConversation = (conversation) => {
    setSelectedConversation(conversation);
    setIsOpen(false); // auto-close when selecting a chat
  };

  return (
    <div className="md:hidden">
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="absolute top-3 left-3 z-20 p-2 bg-gray-700 text-white rounded-full shadow"
      >
        <IoMenu size={22} />
      </button>

      {/* Fullscreen Sidebar Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-30 bg-gray-900">
          <Sidebar onSelectConversation={handleSelectConversation} />
        </div>
      )}
    </div>
  );
};

export default MobileSidebar;

