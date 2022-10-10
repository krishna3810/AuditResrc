import React, { useState } from 'react'
import '../Toggle.css'

function Toggle() {
    const [toggleButton, setToggleButton] = useState(true);
    const handleClick = () => {
        setToggleButton(!toggleButton)
        
    }
    return (
        <>
            <div className='toggle_name'>
                <div onClick={handleClick} className='toggle'>
                    {toggleButton ? <div className='toggle_left'></div> :
                        <div className='toggle_right'></div>}


                </div>
                <div className='toggle-1'><h4>Employee is Active?</h4></div>
            </div>


        </>
    )
}

export default Toggle