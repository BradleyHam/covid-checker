import React, { Component } from 'react'
import classes from './Header.module.scss'
import virus from '../../../assets/images/virus.png'
import { Button } from '@material-ui/core';
import Logo from '../MicroComponents/Logo/Logo'

export class Header extends Component {
    render() {
        return (
            <div className={classes.Header}>
            <div className={classes.nav}>
                 <Logo /> 
             </div>
                <div className={classes.hero}>
                        <div className={classes.left}>
                            <h1>COVID-19 Live Tracker</h1>
                            <p>The Coronavirus (COVID-19) was first reported in Wuhan, Hubei, China in December 2019, the outbreak was later recognized as a pandemic by the World Health Organization (WHO) on 11 March 2020.</p>
                            <div className={classes.buttons}>
                                <Button variant="contained" className={classes.button}>
                                     Donate
                                </Button>
                            </div>
                        </div>
                        <div className={classes.right}>
                            <img src={virus} alt='virus'/>
                        </div>
                </div>
            </div>
        )
    }
}

export default Header
