import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import {Toaster} from 'react-hot-toast'
import { useAuthContext } from "./context/AuthContext";

function App() {
  const {authUser} = useAuthContext();
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <Routes>
        <Route path="/" element={authUser ? <Home /> : <Navigate to={'/login'}/>} />
        <Route path="/login" element={authUser ? <Navigate to={'/'}/> :<Login />} />
        <Route path="/signup" element={authUser ? <Navigate to='/' /> : <SignUp/>} />
      </Routes>
      <Toaster/>
    </div>
  );
}
export default App;

