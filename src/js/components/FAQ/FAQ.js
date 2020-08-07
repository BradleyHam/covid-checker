import React from 'react'
import classes from './FAQ.module.scss'
import CovidAccordion from './Accordions/CovidAccordion'

function FAQ() {
    return (
        <div className={classes.FAQ}>
           <h1>FAQ</h1>
           <div className={classes.accordianContainer}>
               <div className={classes.accordianContainerLeft}>
                   <ul className={classes.accordianOptionList}>
                       <li>COVID-19</li>
                       <li>How it Spreads</li>
                       <li>How to protect yourself</li>
                       <li>Symptoms and testing</li>
                       <li>Community</li>
                   </ul>
               </div>
               <div className={classes.accordianContainerRight}>
                <CovidAccordion />
               </div>
           </div>
        </div>
    )
}

export default FAQ
