import React from 'react'
import classes from './Symptoms.module.scss'
import handSvg from '../../../assets/images/washing-hands.svg'
import homeSvg from '../../../assets/images/home.svg'
import distanceSvg from '../../../assets/images/distance.svg'
import maskSvg from '../../../assets/images/coronavirus.svg'

function Symptoms() {
    return (
        <div className={classes.Symptoms}>
            <h1>Symptoms of Corona Virus</h1>
            <div className={classes.symptomsRow}>
                <div>
                <img src={handSvg} alt="" style={{height: '100px', width: '100px'}}/>
                    <h3>Wash your hands regularly with soap</h3>
                    <p>Handwashing is one of the best ways to protect yourself and your family from getting sick. Learn when and how you should wash your hands to stay healthy.</p>
                </div>
                <div>
                <img src={homeSvg} alt="" style={{height: '100px', width: '100px'}}/>
                    <h3>Stay home if you feel unwell.</h3>
                    <p>Most people with COVID-19 have mild illness and are able to recover at home without medical care. Do not leave your home, except to get medical care.</p>
                </div>
                <div>
                <img src={distanceSvg} alt="" style={{height: '100px', width: '100px'}}/>
                    <h3>Avoid touching your face.</h3>
                    <p>To help prevent infections, keep your hands away from your eyes, nose, and mouth. Why? Touching the mucous membranes on your face.</p>
                </div>
                <div>
                <img src={maskSvg} alt="" style={{height: '100px', width: '100px'}}/>
                    <h3>Cover your mouth and nose</h3>
                    <p>Cover your mouth and nose with a tissue when you cough or sneeze. Put your used tissue in a waste basket. If you don't have a tissue, cough or sneeze into your.</p>
                </div>
              
            </div>
        </div>
    )
}

export default Symptoms
