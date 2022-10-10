import React from 'react'
import './SetUpRsrcAvil.css'

function SetUpRsrcAvil() {
  return (
    <div className='containerSR-1'>
      <header className='hCR'><h2>SETUP RESOURCE AVAILABILITY</h2></header>
      <form className='f-1'>
        <div className='d-6'>
          <label htmlFor='Month and year'>Month &#x26; Year</label>
          
          <select className="option-1" name="Select Month & year" id="Select Month & year">
                            <option disabled="disabled" selected="selected">Select Resource level</option>
                            <option value="Jan">Jan 2022</option>
                            <option value="Feb">Feb 2022</option>
                            <option value="Mar">mar 2022</option>
                            <option value="April">April 2022</option>

                        </select>
          </div>
          </form >
        </div>

        )
}

        export default SetUpRsrcAvil