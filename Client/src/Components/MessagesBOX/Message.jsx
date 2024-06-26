import React from 'react'

export default function Message() {
  return (
    <div className="chat chat-end ">
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
            <img alt="Tailwind CSS chat bubble component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
        </div>
        <div className="chat-bubble text-white bg-blue-500 ">Hi Babe?</div>
        <div className="chat-footer text-white  opacity-50 text-xs flex gap-1 items-center">12:45
        </div>
    </div>
  )
}
