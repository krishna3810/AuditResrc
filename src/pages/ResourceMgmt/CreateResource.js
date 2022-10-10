import React from 'react'
import './CreateResource.css'


function CreateResource () {
    return (
        
            <div className='containerCR'>
                <header className='hCR'><h2>AUDIT RESOURCE ENTRY</h2></header>
                <form className='f-1'>
                    <div className='d-1'>
                        <label htmlFor='EmployeeEmail'>Employee Email:</label><br/>
                        <input id="int" type='text' placeholder='Enter Employee Email' value='' onChange=''></input>

                    </div>
                    <div className='d-2'>
                        <label htmlFor='Resource/ Employee Name'>Resource/ Employee Name:</label><br/>
                        <input type='text' placeholder='Enter First Name and last Name' value='' onChange=''></input>
                        <input type='text1' placeholder='Employee Code'></input>
                    </div>
                    <div className='d-3'>
                        <label htmlFor='Resource Level'>Resource Level:</label><br/>
                        <select className="option-1" name="Resource Level" id="Resource Level">
                            <option disabled="disabled" selected="selected">Select Resource level</option>
                            <option value="Manager">Manager</option>
                            <option value="Senior Auditor">Senior Auditor</option>
                            <option value="Semi Senior Auditor">Semi Senior Auditor</option>
                            <option value="Junior Auditor">Junior Auditor</option>

                        </select>
                        
                    </div>
                    <div className='d-4'>
                        <label htmlFor='Resource Location'>Resource Location:</label><br/>
                        
                        <select className="option-2" name="Resource Location" id="Resource Location">
                            <option disabled="disabled" selected="selected">Select Resource Location</option>
                            <option value="UK">UK</option>
                            <option value="India">India</option>

                        </select>
                    </div>
                    <div className='d-5'>
                        <label htmlFor='Resource Reporting Manager'>Resource Reporting Manager:</label><br/>
                        <input type='text' placeholder='Enter First Name and last Name' value='' onChange=''></input>
                        <input type="text1" placeholder='Employee Code'></input>
                    </div>
                </form>

                <div className='btns'>
                    <button className='SaveAsDraft'>Save As Draft</button>
                    <button className='Submit'>Submit</button>
                    <button className='Cancel'>Cancel</button>
                </div>
            </div>


        
    )
}

export default CreateResource;
