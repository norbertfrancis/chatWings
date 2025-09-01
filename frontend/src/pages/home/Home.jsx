import Sidebar from "../../components/sidebar/Sidebar";
import MessageContainer from "../../components/messages/MessageContainer";
import MobileSidebar from "../../components/sidebar/MobileSidebar";

function Home() {
  return (
    <div className="relative flex h-screen w-screen md:h-[600px] md:w-[900px] rounded-lg overflow-hidden shadow-2xl bg-base-200">
      
      {/* Desktop Sidebar */}
      <div className="hidden md:flex w-1/3 border-r border-slate-700">
        <Sidebar />
      </div>

      {/* Mobile Sidebar (hamburger + overlay) */}
      <MobileSidebar />

      {/* Message Area */}
      <div className="flex-1">
        <MessageContainer />
      </div>
    </div>
  );
}

export default Home;
