import React from 'react'
import classes from './Logo.module.scss'
import logo from '../../../../assets/images/Group 17 Copy.png'

function Logo() {
    return (
        <div>
               <div className={classes.logo}>
                    <img src={logo} alt='logo'/> 
                    <h6>COVID-19</h6>
                </div>
        </div>
    )
}

export default Logo
