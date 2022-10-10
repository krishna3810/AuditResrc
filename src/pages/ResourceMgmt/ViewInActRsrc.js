import React from 'react'
import './ViewInActRsrc.css'

function ViewInActRsrc() {
  return (
    <div className='containerVAR'>
      <header className='hCR' > <h2>ACTIVE RESOURCE MASTER LIST</h2></header>

      <button className='rightbtn'>Add Reosurce</button>
      <div className='app-container'>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>UID</th>
              <th>Emp. Email</th>
              <th>Emp Name</th>
              <th>Emp. Name</th>
              <th>Resource Level</th>
              <th>Location</th>
              <th>Reporting Manager</th>
              <th>Reporting Manager ID</th>
              <th>Resource Active</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Edit</td>
              <td>1</td>
              <td>abc@gmail.com</td>
              <td>Employee One</td>
              <td>SKS001</td>
              <td>Auditor</td>
              <td>India</td>
              <td>Employee N</td>
              <td>SKS100</td>
              <td>Y</td>
              <td>Save</td>
            </tr>

            <tr>
              <td>Edit</td>
              <td>2</td>
              <td>abc@gmail.com</td>
              <td>ABC</td>
              <td>SKS001</td>
              <td>Sr. Auditor</td>
              <td>UK</td>
              <td>ZZZ</td>
              <td>SKS100</td>
              <td>N</td>
              <td>Draft</td>
            </tr>

            <tr>
              <td>Edit</td>
              <td>3</td>
              <td>abc@gmail.com</td>
              <td>YYY</td>
              <td>SKS001</td>
              <td>Sr. Auditor</td>
              <td>UK</td>
              <td>Employee N</td>
              <td>SKS100</td>
              <td>Y</td>
              <td>Save</td>
            </tr>

            <tr>
              <td>Edit</td>
              <td>4</td>
              <td>abc@gmail.com</td>
              <td>Employee two</td>
              <td>SKS001</td>
              <td>Auditor</td>
              <td>India</td>
              <td>Employee N</td>
              <td>SKS100</td>
              <td>N</td>
              <td>Draft</td>
            </tr>

          </tbody>
        </table>
      </div>
    </div >
  )
}

export default ViewInActRsrc