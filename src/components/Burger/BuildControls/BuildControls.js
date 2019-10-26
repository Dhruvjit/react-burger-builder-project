// build controls is also a functional dumb component
// it receives some props and it will return some js code in the end
import React from 'react';
import classes from './BuildControls.module.css'
import BuildControl from "./BuildControl/BuildControl";

const controls = [
    {label:'Salad', type:'salad'},
    {label:'Bacon', type:'bacon'},
    {label:'Cheese', type:'cheese'},
    {label:'Meat', type:'meat'}
];

const BuildControls = (props) => (
    <div className={classes.BuildControls}>
        {controls.map(ctrl=>(
            /* here key attribute if not mentioned will throw warning for not stating unique key */

            /*watch closely to the function below, there we have ingredientAdded(ctrl.type) passed as an argument
            * its purpose here is to execute ingredientAdded function in BurgerBuilder and pass type as an argument from
            * this class. This is best practice in order to achieve something like this
            *
            * added => this property needs to be connected to more button in BuildControl so make use of onClick property
            * as this should function when user clicks
            * */
            <BuildControl 
                        key={ctrl.label} 
                        label={ctrl.label} 
                        added={()=> props.ingredientAdded(ctrl.type)}/>
        ))}
    </div>
);

export default BuildControls;