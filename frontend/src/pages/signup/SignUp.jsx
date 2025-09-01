import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";

function SignUp() {

  const [inputs, setInputs] = useState ({
    fullName:'',
    username: '',
    password:'',
    confirmPassword:'',
    gender:''
  });

  const {loading, signup} = useSignup()

  const handleCheckboxChange = (gender) => {
    setInputs({...inputs, gender})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await signup(inputs)
  }

  return (
  <div className="flex items-center justify-center min-h-screen bg-base-200">
    <div className="w-full max-w-sm sm:max-w-md p-10 sm:p-8 bg-base-100 rounded-none sm:rounded-2xl shadow-none sm:shadow-xl">
      <h1 className="text-3xl font-bold text-center mb-6 text-primary">
        Sign Up <span className="text-secondary">chatWings</span>
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="label">
            <span className="label-text">Full Name</span>
          </label>
          <input
            type="text"
            placeholder="Travis Scott"
            className="input input-bordered w-full placeholder:opacity-20"
            value={inputs.fullName}
            onChange={(e) =>
              setInputs({ ...inputs, fullName: e.target.value })
            }
          />
        </div>

        <div>
          <label className="label">
            <span className="label-text">Username</span>
          </label>
          <input
            type="text"
            placeholder="travisscot"
            className="input input-bordered w-full placeholder:opacity-20"
            value={inputs.username}
            onChange={(e) =>
              setInputs({ ...inputs, username: e.target.value })
            }
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
            value={inputs.password}
            onChange={(e) =>
              setInputs({ ...inputs, password: e.target.value })
            }
          />
        </div>

        <div>
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input
            type="password"
            placeholder="Confirm password"
            className="input input-bordered w-full placeholder:opacity-20"
            value={inputs.confirmPassword}
            onChange={(e) =>
              setInputs({ ...inputs, confirmPassword: e.target.value })
            }
          />
        </div>

        <GenderCheckbox
          onCheckboxChange={handleCheckboxChange}
          selectedGender={inputs.gender}
        />

        <Link
          to="/login"
          className="text-sm link link-hover text-primary block text-right"
        >
          Already have an account?
        </Link>

        <button
          type="submit"
          className="btn btn-primary w-full mt-2"
          disabled={loading}
        >
          {loading ? (
            <span className="loading loading-spinner"></span>
          ) : (
            "Sign Up"
          )}
        </button>
      </form>
    </div>
  </div>
);

}

export default SignUp;



//starter code for the signup component

// import React from "react";
// import GenderCheckbox from "./GenderCheckBox";

// function SignUp() {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//       <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//         <h1 className="text-3xl font-semibold text-center text-gray-300">
//           Sign Up
//           <span className="text-blue-500"> chatWings</span>
//         </h1>
//         <form>
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text"> Full Name</span>
//             </label>
//             <input
//               type="text"
//               placeholder="Travis scot"
//               className="w-full input input-bordered h-10"
//             />
//           </div>

//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text">username</span>
//             </label>
//             <input
//               type="text"
//               placeholder="travisscot"
//               className="w-full input input-bordered h-10"
//             />
//           </div>
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text">Password</span>
//             </label>
//             <input
//               type="password"
//               placeholder="Enter Password"
//               className="w-full input input-bordered h-10"
//             />
//           </div>
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text">Confirm Password</span>
//             </label>
//             <input
//               type="password"
//               placeholder="Confirm password "
//               className="w-full input input-bordered h-10 mb-2"
//             />
//           </div>

//           <GenderCheckbox />

//           <a
//             className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
//             href="#"
//           >
//             Already have an account?
//           </a>

//           <div>
//             <button className="btn  btn-block btn-sm mt-1 border border-slate-700">
//               Sign Up
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default SignUp;

