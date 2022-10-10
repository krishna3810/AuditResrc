import React from 'react'
import Toggle from '../../Components/Toggle';
import './ViewUpdateRsrc.css'

function ViewUpdateRsrc() {
  return (
    <>
      <div className='containerUR'>
        <header className='UCR'><h2>AUDIT RESOURCE UPDATE</h2></header>
        <form className='uf-1'>
          <div className='u-1'>
            <label htmlFor='UID'>UID:</label>
            <input type='text' placeholder='UID' value='' onChange=''></input>

          </div>
          <div className='u-2'>
            <label htmlFor='Employee email'>Employee Email:</label>
            <input type='text' placeholder='abc@gmail.com' value='' onChange=''></input>

          </div>
          <div className='u-3'>
            <label htmlFor='Resource/ Employee Name'>Resource/ Employee Name:</label>
            <input type='text' placeholder='Employee One' value='' onChange=''></input>
            <input type='text1' placeholder='SKS100'></input>
          </div>
          <div className='u-4'>
            <label htmlFor='Resource Level'>Resource Level:</label>
            <select className="option-1" name="Resource Level" id="Resource Level">
              <option disabled="enabled" selected="selected">Auditor</option>
              <option value="Manager">Manager</option>
              <option value="Senior Auditor">Senior Auditor</option>
              <option value="Semi Senior Auditor">Semi Senior Auditor</option>
              <option value="Junior Auditor">Junior Auditor</option>

            </select>
            {/* <input type='text' placeholder='Resource Level' value='' onChange=''></input> */}
          </div>
          <div className='u-5'>
            <label htmlFor='Resource Location'>Resource Location:</label>
            {/* <input type='text' placeholder='Resource Location' value='' onChange=''></input> */}
            <select className="option-2" name="Resource Location" id="Resource Location">
              <option disabled="enabled" selected="selected">India</option>
              <option value="UK">UK</option>
              <option value="India">India</option>

            </select>
          </div>
          <div className='u-6'>
            <label htmlFor='Resource Reporting Manager'>Resource Reporting Manager:</label>
            <input type='text' placeholder='Employee N' value='' onChange=''></input>
            <input type="text1" placeholder='SKS100'></input>
          </div>
        </form>
        <br></br>      
        
        <Toggle/>
        
        <div className='btns'>
          <button className='Update'>Update</button>
          <button className='Cancel'>Cancel</button>
        </div>
        
        

        
      </div>
    </>
  )
}

export default ViewUpdateRsrc