import React from 'react'

export default function GenderCheck() {
  return (
    <div className='flex '>
      <div className="form-control ">
  <label className="label gap-2 cursor-pointer">
    <span className="label-text text-gray-200 opacity-75">Male</span> 
    <input type="checkbox"  className="checkbox checkbox-primary" />
  </label>
</div>
<div className="form-control">
  <label className="label gap-2 cursor-pointer">
    <span className="label-text text-gray-200 opacity-75">female</span> 
    <input type="checkbox"  className="checkbox checkbox-primary" />
  </label>
</div>
<div className="form-control">
  <label className="label gap-2 cursor-pointer">
    <span className="label-text text-gray-200 opacity-75">Rainbow</span> 
    <input type="checkbox"  className="checkbox checkbox-secondary" />
  </label>
</div>
    </div>
  )
}
