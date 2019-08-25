// burger class that we render to the screen
// its a stateless functional component
import React from 'react'
import classes from './Burger.module.css'
import BurgerIngredient from '../Burger/BurgerIngredient/BurgerIngredient'

const burger = (props) => {

    // convert setState object to array
    // get arrays of keys e.g. ["salad", "bacon", "meat"]
    const transformedIngredients = Object.keys(props.ingredients);
    let ingredients = [];

    // this helps in making our burger builder dynamic, so user can dynamically add ingredients
    for (let i = 0; i < transformedIngredients.length; i++) {
        for (let j = 0; j < props.ingredients[transformedIngredients[i]]; j++) {
            ingredients.push(<BurgerIngredient type={transformedIngredients[i]} />);
        }
    }
    // this reduce method helps us to get the sum of ingredients
    // with reduce we assign previousvalue as empty [] at first and then
    // currentValue contains each element of the ingredients array which will be pushed to previousValue in loop behind
    // the scenes by js
    ingredients.reduce((previousValue, currentValue) => {
        return previousValue.concat(currentValue);
    },[]);

    if(ingredients===0){
        ingredients = <p>Please start adding ingredients!</p>
    }
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {ingredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burger;