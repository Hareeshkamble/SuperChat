// import React, { useState } from "react";
// import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
// import VisibilityIcon from "@mui/icons-material/Visibility";
// import GenderCheck from "./GenderCheck";
// import { Link, useNavigate } from "react-router-dom";
// import userSignup from "../../Hooks/userSignup"; 
// import toast, { Toaster } from 'react-hot-toast';


// export default function Signup() {
//   const [showPassword, setShowPassword] = useState(false);
//   let navigate=useNavigate()

//   const [input, setinput] = useState({
//     fullName: "",
//     userName: "",
//     password: "",
//     confirmPassword: "",
//     gender: "",
//   });

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };
//   let handlecheckBox=(gender)=>{
//     setinput({...input,gender})
//   }

//   let {loading, signup}=userSignup();
//   let handlesubmit = async(event) => {
//     event.preventDefault();
//     await signup(input)
//     if(input.gender==="rainbow"){
//         navigate("/notallowed")
//     }

//     console.log(input);
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto ">
//       <Toaster/>
//       <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 ">
//         <h1 className="text-3xl font-bold text-center text-gray-300">
//           Sign Up <b>To </b>
//           <span className="text-blue-600">SuperChat</span>
//         </h1>
//         <form method="post" onSubmit={handlesubmit}>
//           <div>
//             <label htmlFor="fullName" className="label p-2">
//               <span className="text-base label-text text-gray-50 opacity-50">
//                 Full Name
//               </span>
//             </label>
//             <input
//               id="fullName"
//               name="fullName"
//               className="w-full input input-bordered h-10"
//               type="text"
//               placeholder="Your Full Name "
//               value={input.fullName}
//               onChange={(e) =>
//                 setinput({ ...input, fullName: e.target.value })
//               }
//             />
//           </div>
//           <div>
//             <label htmlFor="username" className="label p-2">
//               <span className="text-base label-text text-gray-50 opacity-50">
//                 Username
//               </span>
//             </label>
//             <input
//               className="w-full input input-bordered h-10"
//               type="text"
//               placeholder="enter username "
//               value={input.userName}
//               onChange={(e) =>
//                 setinput({ ...input, userName: e.target.value })
//               }
//             />
//           </div>
//           <div>
//             <label htmlFor="password" className="label p-2">
//               <span className="text-base label-text text-gray-50 opacity-50">
//                 Password
//               </span>
//             </label>
//             <div className="relative w-full">
//               <input
//                 value={input.password}
//                 onChange={(e) =>
//                   setinput({ ...input, password: e.target.value })
//                 }
//                 className="w-full input input-bordered h-10 pr-10"
//                 type={showPassword ? "text" : "password"}
//                 placeholder="enter password"
//               />
//               <button
//                 type="button"
//                 className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-600"
//                 onClick={togglePasswordVisibility}>
//                 {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
//               </button>
//             </div>
//           </div>
//           <div>
//             <label htmlFor="password" className="label p-2">
//               <span className="text-base label-text text-gray-50 opacity-50">
//                 {" "}
//                 Confirm Password
//               </span>
//             </label>
//             <div className="relative w-full">
//               <input
//                 className="w-full input input-bordered h-10 pr-10"
//                 type="password"
//                 placeholder="enter password"
//                 value={input.confirmPassword}
//                 onChange={(e) =>
//                   setinput({ ...input, confirmPassword: e.target.value })
//                 }
//               />
//             </div>
//           </div>
//           {/* GEnder */}

//           <GenderCheck handlecheckBox={handlecheckBox}  valueGender={input.gender} />

//           <Link
//             to="/login"
//             className="text-sm hover:underline text-gray-50 opacity-75 hover:text-blue-600 mt-2 inline-block">
//             Already have an account ?
//           </Link>
//           <div>
//             <button
//               className="btn btn-primary btn-block btn-sm mt-2"
//               type="submit">
//               Sign Up
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// //! STARTER CODE FOR SIGNUP

// // import React, { useState } from 'react';
// // import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
// // import VisibilityIcon from '@mui/icons-material/Visibility';
// // import GenderCheck from './GenderCheck';

// // export default function Signup() {
// //     const [showPassword, setShowPassword] = useState(false);

// //     const togglePasswordVisibility = () => {
// //         setShowPassword(!showPassword);
// //     };
// //   return (
// // <div className='flex flex-col items-center justify-center min-w-96 mx-auto '>
// //             <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 ">
// //                 <h1 className="text-3xl font-bold text-center text-gray-300">Sign Up <b>To </b>
// //                     <span className="text-blue-600">SuperChat</span></h1>
// //                 <form method="post">
// //                 <div>
// //                         <label htmlFor="username" className='label p-2'>
// //                             <span className='text-base label-text text-gray-50 opacity-50'>Full Name</span>
// //                         </label>
// //                         <input className="w-full input input-bordered h-10" type="text" placeholder="Your Full Name " />
// //                     </div>
// //                     <div>
// //                         <label htmlFor="username" className='label p-2'>
// //                             <span className='text-base label-text text-gray-50 opacity-50'>Username</span>
// //                         </label>
// //                         <input className="w-full input input-bordered h-10" type="text" placeholder="enter username " />
// //                     </div>
// //                     <div>
// //                         <label htmlFor="password" className='label p-2'>
// //                             <span className='text-base label-text text-gray-50 opacity-50'>Password</span>
// //                         </label>
// //                         <div className="relative w-full">
// //                             <input
// //                                 className="w-full input input-bordered h-10 pr-10"
// //                                 type={showPassword ? 'text' : 'password'}
// //                                 placeholder="enter password"
// //                             />
// //                             <button
// //                                 type="button"
// //                                 className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-600"
// //                                 onClick={togglePasswordVisibility}
// //                             >
// //                                 {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
// //                             </button>
// //                         </div>
// //                     </div>
// //                     <div>
// //                         <label htmlFor="password" className='label p-2'>
// //                             <span className='text-base label-text text-gray-50 opacity-50'> Confirm Password</span>
// //                         </label>
// //                         <div className="relative w-full">
// //                             <input
// //                                 className="w-full input input-bordered h-10 pr-10"
// //                                 type='password'
// //                                 placeholder="enter password"
// //                             />

// //                         </div>
// //                     </div>
// //                     {/* GEnder */}

// //                     <GenderCheck/>

// //                     <a href="/" className="text-sm hover:underline text-gray-50 opacity-75 hover:text-blue-600 mt-2 inline-block">
// //                         Already have an account ?
// //                     </a>
// //                     <div>
// //                       <button className='btn btn-primary btn-block btn-sm mt-2' type='submit'>Login</button>
// //                     </div>
// //                 </form>
// //             </div>
// //         </div>
// //   )
// // }





import React, { useState } from "react";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import GenderCheck from "./GenderCheck";
import { Link, useNavigate } from "react-router-dom";
import userSignup from "../../Hooks/userSignup";
import toast, { Toaster } from 'react-hot-toast';

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  let navigate = useNavigate();

  const [input, setInput] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  let handlecheckBox = (gender) => {
    setInput({ ...input, gender });
  };
  let { loading, signup } = userSignup();

  let handleSubmit = async (event) => {
    event.preventDefault();
        await signup(input);

    
      if (input.gender === "rainbow") {
        navigate("/notallowed");
      } 
    
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
        <Toaster />

      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-bold text-center text-gray-300">
          Sign Up <b>To </b>
          <span className="text-blue-600">SuperChat</span>
        </h1>
        <form method="post" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="fullName" className="label p-2">
              <span className="text-base label-text text-gray-50 opacity-50">
                Full Name
              </span>
            </label>
            <input
              id="fullName"
              name="fullName"
              className="w-full input input-bordered h-10"
              type="text"
              placeholder="Your Full Name "
              value={input.fullName}
              onChange={(e) => setInput({ ...input, fullName: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="username" className="label p-2">
              <span className="text-base label-text text-gray-50 opacity-50">
                Username
              </span>
            </label>
            <input
              className="w-full input input-bordered h-10"
              type="text"
              placeholder="Enter username"
              value={input.username}
              onChange={(e) => setInput({ ...input, username: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="password" className="label p-2">
              <span className="text-base label-text text-gray-50 opacity-50">
                Password
              </span>
            </label>
            <div className="relative w-full">
              <input
                value={input.password}
                onChange={(e) => setInput({ ...input, password: e.target.value })}
                className="w-full input input-bordered h-10 pr-10"
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-600"
                onClick={togglePasswordVisibility}>
                {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </button>
            </div>
          </div>
          <div>
            <label htmlFor="confirmPassword" className="label p-2">
              <span className="text-base label-text text-gray-50 opacity-50">
                Confirm Password
              </span>
            </label>
            <div className="relative w-full">
              <input
                className="w-full input input-bordered h-10 pr-10"
                type="password"
                placeholder="Enter password"
                value={input.confirmPassword}
                onChange={(e) =>
                  setInput({ ...input, confirmPassword: e.target.value })
                }
              />
            </div>
          </div>
          {/* Gender */}
          <GenderCheck handlecheckBox={handlecheckBox} valueGender={input.gender} />

          <Link
            to="/login"
            className="text-sm hover:underline text-gray-50 opacity-75 hover:text-blue-600 mt-2 inline-block">
            Already have an account?
          </Link>
          <div>
            <button
              className="btn btn-primary btn-block btn-sm mt-2"
              type="submit" disabled={loading}>
              {loading?<span className="loading loading-spinner "/>:"Sign up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
