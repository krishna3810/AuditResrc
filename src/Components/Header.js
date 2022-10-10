import React from 'react'
import Logo from '../images/logo.png'

import { FaUserPlus } from 'react-icons/fa'


function Header() {
    return (
        <>
            <header className='main-header'>                

                <div className='logo-2'>                    
                    <img src={Logo} alt="SKS" />
                </div>

                <div className='mName'>                    
                    <h1>AUDIT RESOURCE PLANNER</h1>
                </div>

                <div className='user-login'>                
                    <span>UserLogin<FaUserPlus /></span>
                </div>
                
            </header>
            

        </>

    )
}

export default Header