import React from 'react'
import classes from './Footer.module.scss'
import Logo from '../MicroComponents/Logo/Logo'
import Send from '../../../assets/images/send.svg'

function Footer() {
    return (
        <div className={classes.Footer}>
        <div className={classes.footerContainer}>
            <form action="">
                <div className={classes.emailContainer}>
                    <input type="text" placeholder='Enter Email for more information...'/>    
                    <div className={classes.button}>
                        <img src={Send} alt=""/>
                    </div>
                </div>
            </form>
            <Logo />
            </div>
        </div>
    )
} 

export default Footer
