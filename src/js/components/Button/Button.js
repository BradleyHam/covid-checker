import React from 'react'
import classes from '../Button/Button.module.scss';

function Button(props) {
    return (
        <div className={classes.Button}>
           {props.text}
        </div>
    )
}

export default Button
