import React,{useState} from 'react'
import classes from './FAQ.module.scss'
import './FAQ.scss'

import Community from './Accordions/Community'
import Prevent from './Accordions/PreventAccordion'
import Spread from './Accordions/SpreadAccordion'
import Testing from './Accordions/TestingAccordion'

function FAQ() {
    let [activeOption, setActiveOption] = useState('Spread')

    function renderListItems(){
        let options = [
            "Spread",
            "Prevention",
            "Testing",
            "Community Mitigation"
        ]
        return options.map(option => (
            <li 
                className={activeOption === option && classes.active}
                onClick={()=>setActiveOption(option)}
                 >{option}</li>
        ))
    }

    function renderAccordion(){
        switch(activeOption) {
            
            case "Spread":
                return <Spread />
            case "Prevention":
                return <Prevent />
            case "Testing":
                return <Testing />
            case "Community Mitigation":
                return <Community />
            default:
                return <Spread />
          }
    }

    return (
        <div className={classes.FAQ}>
           <h1>FAQ</h1>
           <div className={classes.accordianContainer}>
               <div className={classes.accordianContainerLeft}>
                   <ul className={classes.accordianOptionList}>
                       {renderListItems()}
                   </ul>
               </div>
               <div className={classes.accordianContainerRight}>
                {renderAccordion()}
               </div>
           </div>
        </div>
    )
}

export default FAQ
