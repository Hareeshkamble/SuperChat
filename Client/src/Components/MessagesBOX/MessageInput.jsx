import React from 'react'
import SendIcon from '@mui/icons-material/Send';

export default function MessageInput() {
  return (
   <form action="" className="px-4 my-3 ">
    <div className="w-full relative">
        <input type="text" placeholder='Send a Message' className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white "/>
        <button type="submit" className='absolute inset-y-0 end-0 flex items-center pe-3'>
            <SendIcon />
        </button>
    </div>
   </form>
  )
}


// starter code

// import React from 'react'
// import SendIcon from '@mui/icons-material/Send';

// export default function MessageInput() {
//   return (
//    <form action="" className="px-4 my-3 ">
//     <div className="w-full">
//         <input type="text" placeholder='Send a Message' className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white "/>
//         <button type="submit" className='absolute inset-y-0 end-0 flex items-center pe-3'>
//             <SendIcon />
//         </button>
//     </div>
//    </form>
//   )
// }
