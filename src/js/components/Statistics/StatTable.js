import React from 'react'
import classes from './Statistics.module.scss'

function StatTable(props) {
    let formatter = new Intl.NumberFormat();
    let {countries} = props;
    let sortedCountries = countries && countries.sort((a,b)=> b.cases - a.cases)
    
    return (
        <div className={classes.statTable}>
             <table className={classes.table}>
               <tr>
                   <th>Country</th>
                   <th>Deaths</th>
               </tr>
                {countries && sortedCountries.map(country => (
                    <tr>
                        <td>{country.country}</td>
                        <td>{formatter.format(country.cases)}</td>
                    </tr>
                ))}
            </table>
        </div>
    )
}

export default StatTable
