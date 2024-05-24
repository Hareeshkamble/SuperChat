import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

export default function SerachInput() {
  return (
    <form className='flex items-center gap-2 p-2 '>
      <input type="text" placeholder='search..' className='input input-bordered rounded-full' />
      <button className='bg-primary p-2 rounded-full hover:bg-info'><SearchIcon fontSize="medium" className='text-white'/></button>
    </form>
  )
}











//! STARTER CODE
// import React from 'react'
// import SearchIcon from '@mui/icons-material/Search';

// export default function SerachInput() {
//   return (
//     <form className='flex items-center gap-2 p-2 '>
//       <input type="text" placeholder='search..' className='input input-bordered rounded-full' />
//       <button className='bg-primary p-2 rounded-full hover:bg-info'><SearchIcon fontSize="medium" className='text-white'/></button>
//     </form>
//   )
// }
