import React from 'react';
import classes from './BuildControl.module.css';

const BuildControl = (props) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>
            {/*choose any name you want, we chose label*/}
            {props.label}</div>
            <button className={classes.Less}>Less</button>
            <button className={classes.More} onClick={props.added}>More</button>
    </div>
);

export default BuildControl;