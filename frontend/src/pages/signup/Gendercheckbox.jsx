import React from 'react'

const Gendercheckbox = ({onCheckboxChange,selectedGender}) => {
  return (
    <div className='flex mt-1 '>
      <div className='form-control mt-0.5 p-2'>
        <label className={`label gap-2 cursor-pointer ${selectedGender==="male" ? "selected" : ""}`}>
            <span className='label-text text-white'>Male</span>
            <input type="checkbox" className='checkbox checkbox-primary' 
                checked={selectedGender === "male"}
                onChange={()=> onCheckboxChange("male")}
            />
        </label>
         </div>

        <div className='form-control mt-0.5 p-2'>
        <label className={`label gap-2 cursor-pointer ${selectedGender==="female" ? "selected" : ""}`}>
            <span className='label-text text-white'>Female</span>
            <input type="checkbox" className='checkbox checkbox-secondary' 
                checked={selectedGender === "female"}
                onChange={()=> onCheckboxChange("female")} 
            />
        </label>
      </div>
    </div>
  )
}

export default Gendercheckbox
