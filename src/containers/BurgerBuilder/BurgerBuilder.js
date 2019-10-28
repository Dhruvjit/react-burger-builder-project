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
        totalPrice: 5,
        purchasable: false
    }

    updatePurchaseState = (ingredients) => {
        const sum = Object.keys(ingredients).map(igkey=>{
                        return ingredients[igkey]
                    }).reduce((sum,el)=>{
                        return sum+el
                    },0)
        // set purchasable as true or false if its greater than 0                    
        this.setState({purchasable: sum>0})
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
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        // to remove ingredient we first need to know what were the old count of ingredient was
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount-1;
        // dont allow arithmetic operations in negative
        if(oldCount <= 0){
            return;
        }
        // update state above in immutable way
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = priceAddition - oldPrice;
        this.setState({totalPrice:newPrice,ingredients:updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
    }

    render (){
        const DISABLED_PROP = {...this.state.ingredients};
        for(let key in DISABLED_PROP){
            // update DISABLED_PROP array with true and false for key that is less than or equal to zero
            DISABLED_PROP[key] = DISABLED_PROP[key]<=0
        }
        return <Aux>
            <Burger ingredients={this.state.ingredients}/>
            <BuildControls ingredientAdded={this.addIngredientHandler} 
                    ingredientRemoved={this.removeIngredientHandler}
                    price={this.state.totalPrice}
                    disabledProp={DISABLED_PROP}
                    purchasable={this.state.purchasable}
            />
            </Aux>;
    }
}

export default BurgerBuilder;