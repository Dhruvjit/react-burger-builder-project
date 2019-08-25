import React, { Component } from 'react'
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger'
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

// constant global class
// this handles price mapping for individual ingredients
const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.5,
    bacon: 0.5
};

class BurgerBuilder extends Component{

    /*one way of doing it*/
    // constructor(props){
    //     super(props)
    //     this.state = {
    //
    //     }
    // };
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        // base price €5
        totalPrice: 5
    }

    addIngredientHandler = (type) => {
        // to add ingredient we first need to know what were the old count of ingredient was
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount+1;
        // update state above in immutable way
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = priceAddition + oldPrice;
        this.setState({totalPrice:newPrice,ingredients:updatedIngredients});
    }

    removeIngredientHandler = (type) => {

    }

    render (){
        return <Aux>
            <Burger ingredients={this.state.ingredients}/>
            <BuildControls ingredientAdded={this.addIngredientHandler}/>
        </Aux>;
    }
}

export default BurgerBuilder;