import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {loading, login} = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password)
  }

  return (
  <div className="flex items-center justify-center min-h-screen bg-base-200 px-4">
    <div className="w-full max-w-sm sm:max-w-md p-10 bg-base-100 rounded-none sm:rounded-2xl shadow-none sm:shadow-xl">
      <h1 className="text-3xl font-bold text-center mb-6 text-primary">
        Login <span className="text-secondary">chatWings</span>
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="label">
            <span className="label-text">Username</span>
          </label>
          <input
            type="text"
            placeholder="Enter username"
            className="input input-bordered w-full placeholder:opacity-20"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div>
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="Enter password"
            className="input input-bordered w-full placeholder:opacity-20"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <Link
          to="/signup"
          className="text-sm link link-hover text-primary block text-right"
        >
          Don’t have an account?
        </Link>

        <button
          type="submit"
          className="btn btn-primary w-full"
          disabled={loading}
        >
          {loading ? <span className="loading loading-spinner"></span> : "Login"}
        </button>
      </form>
    </div>
  </div>
);

}

export default Login;



//STARTER CODE FOR THIS FILE
// function Login() {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//       <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//         <h1 className="text-3xl font-semibold text-center text-gray-300">
//           login
//           <span className="text-blue-500"> ChatApp</span>
//         </h1>
//         <form>
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text">username</span>
//             </label>
//             <input
//               type="text"
//               placeholder="Enter username"
//               className="w-full input input-bordered h-10"
//             />
//           </div>

//           <div>
//             <label className="label">
//               <span className="text-base label-text">password</span>
//             </label>
//             <input
//               type="text"
//               placeholder="Enter password"
//               className="w-full input input-bordered h-10"
//             />
//           </div>
//           <a href="#" className="text-sm hover:text-blue-600 mt-2 inline-block">
//             {"Don't"} have an account?
//           </a>
//           <div>
//             <button className="btn btn-block btn-sm mt-2">login</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;