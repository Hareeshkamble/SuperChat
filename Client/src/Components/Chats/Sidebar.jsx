import React from 'react'
import Convo_rsations from './Convo_rsations'
import LogoutButton from './LogoutButton'
import SerachInput from './SerachInput'

export default function Sidebar() {
  return (
    <div className='border-r border-slate-500 flex flex-col'>
        <SerachInput/>
        <div className="divider px-3"></div>
        <Convo_rsations/>
        <LogoutButton/>
    </div>
  )
}
