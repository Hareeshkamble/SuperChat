import React from 'react'
import MessageContainer from '../MessagesBOX/MessageContainer'
import Sidebar from '../Chats/Sidebar'

export default function Home() {
  return (
    <div className=' lg:h-full flex sm:h-[450px] h-full md:h-[550px] w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100'>
    <Sidebar/>
    <MessageContainer/>

    </div>  
  )
}
