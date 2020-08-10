import React from 'react';
import classes from './Statistics.module.scss';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import internet from '../../../assets/images/internet.svg'


function StatsRow(props) {
    let formatter = new Intl.NumberFormat();
    let {cases, deaths, recovered} = props.stats;
    let {countries} = props; 

    const handleChange = (event) => {
      props.setLocation(event.target.value);
    };
  
    return (
        <div className={classes.statRow}>
            <div className={classes.stat}>
                <div className={classes.locationContainer}>
                <img src={internet} className={classes.globe}/>
                <FormControl className={classes.formControl} style={{width:" 150px"}}>
                <InputLabel id="demo-simple-select-label">Location</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={props.location}
                        onChange={handleChange}
                     >
                     {props.countries && countries.map(({country}) => <MenuItem key={country} value={country}>{country}</MenuItem>)}
                    </Select>
                 </FormControl>
</div>

            </div>
            <div className={classes.stat}>
                <p >Cases</p>
                <h3 className={classes.cases}>{formatter.format(cases)}</h3>
            </div>
            <div className={`${classes.stat} ${classes.deaths}`}>
                <p>Deaths</p>
                <h3 className={classes.deaths}>{formatter.format(deaths)}</h3>
            </div>
            <div className={`${classes.stat} ${classes.recovered}`}>
                <p>Recovered</p>
                <h3 className={classes.recovered}>{formatter.format(recovered)}</h3>
            </div>
          
        </div>
    )
}

export default StatsRow
