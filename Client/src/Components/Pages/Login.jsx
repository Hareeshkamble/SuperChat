import React, { useState } from 'react';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto '>
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 ">
                <h1 className="text-3xl font-bold text-center text-gray-300">Login <b>To </b>
                    <span className="text-blue-600">SuperChat</span></h1>
                <form method="post">
                    <div>
                        <label htmlFor="username" className='label p-2'>
                            <span className='text-base label-text text-gray-50 opacity-50'>Username</span>
                        </label>
                        <input className="w-full input input-bordered h-10" type="text" placeholder="enter username " />
                    </div>
                    <div>
                        <label htmlFor="password" className='label p-2'>
                            <span className='text-base label-text text-gray-50 opacity-50'>Password</span>
                        </label>
                        <div className="relative w-full">
                            <input
                                className="w-full input input-bordered h-10 pr-10"
                                type={showPassword ? 'text' : 'password'}
                                placeholder="enter password"
                            />
                            <button
                                type="button"
                                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-600"
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                            </button>
                        </div>
                    </div>
                    <a href="/" className="text-sm hover:underline text-gray-50 opacity-75 hover:text-blue-600 mt-2 inline-block">
                        Don't have an account?
                    </a>
                    <div>
                      <button className='btn btn-primary btn-block btn-sm mt-2' type='submit'>Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
}



//! STARTER CODE FOR LOGIN
// import React, { useState } from 'react';
// import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
// import VisibilityIcon from '@mui/icons-material/Visibility';

// export default function Login() {
//     const [showPassword, setShowPassword] = useState(false);

//     const togglePasswordVisibility = () => {
//         setShowPassword(!showPassword);
//     };

//     return (
//         <div className='flex flex-col items-center justify-center min-w-96 mx-auto '>
//             <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 ">
//                 <h1 className="text-3xl font-bold text-center text-gray-300">Login <b>To </b>
//                     <span className="text-blue-600">SuperChat</span></h1>
//                 <form method="post">
//                     <div>
//                         <label htmlFor="username" className='label p-2'>
//                             <span className='text-base label-text text-gray-50 opacity-50'>Username</span>
//                         </label>
//                         <input className="w-full input input-bordered h-10" type="text" placeholder="enter username " />
//                     </div>
//                     <div>
//                         <label htmlFor="password" className='label p-2'>
//                             <span className='text-base label-text text-gray-50 opacity-50'>Password</span>
//                         </label>
//                         <div className="relative w-full">
//                             <input
//                                 className="w-full input input-bordered h-10 pr-10"
//                                 type={showPassword ? 'text' : 'password'}
//                                 placeholder="enter password"
//                             />
//                             <button
//                                 type="button"
//                                 className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-600"
//                                 onClick={togglePasswordVisibility}
//                             >
//                                 {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
//                             </button>
//                         </div>
//                     </div>

//                     {/* Gender  */}
                    

//                     <a href="/" className="text-sm hover:underline text-gray-50 opacity-75 hover:text-blue-600 mt-2 inline-block">
//                         Don't have an account?
//                     </a>
//                     <div>
//                       <button className='btn btn-primary btn-block btn-sm mt-2' type='submit'>Login</button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// }

