import React from 'react'
import { useNavigate } from 'react-router-dom'


export default function GenderCheck({handlecheckBox,valueGender}) {
  return (
    <div className='flex '>
      <div className="form-control ">
  <label className={`label gap-2 cursor-pointer ${valueGender==="male"?"selected":""}`}>
    <span className="label-text text-gray-200 opacity-75">Male</span> 
    <input type="checkbox"  className="checkbox checkbox-primary" checked={valueGender==="male"} onChange={()=>handlecheckBox("male")}/>
  </label>
</div>
<div className="form-control">
  <label className={`label gap-2 cursor-pointer ${valueGender==="female"?"selected":""}`}>
    <span className="label-text text-gray-200 opacity-75">female</span> 
    <input type="checkbox"  className="checkbox checkbox-primary" checked={valueGender==="female"} onChange={()=>handlecheckBox("female")} />
  </label>
</div>
<div className="form-control">
  <label className={`label gap-2 cursor-pointer ${valueGender==="rainbow"?"selected":""}`}>
    <span className="label-text text-gray-200 opacity-75">Rainbow</span> 
    <input type="checkbox"  className="checkbox checkbox-secondary" checked={valueGender==="rainbow"} onChange={()=>handlecheckBox("rainbow")}/>
  </label>
</div>
    </div>
  )
}
