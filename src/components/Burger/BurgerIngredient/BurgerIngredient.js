// this will always be a stateless component
// propTypes can also be implemented in functional component, but for simplicity of its implementation, max chose
// to go with class based component
import React,{ Component } from 'react'
import classes from './BurgerIngredient.module.css'
import propTypes from 'prop-types'

class BurgerIngredient extends Component{
    render() {
        let ingredient = null;
        switch (this.props.type){
            case('bread-bottom'):
                ingredient = <div className={classes.BreadBottom} key="0"></div>;
                break;

            case('bread-top'):
                ingredient = (
                    <div className={classes.BreadTop} key="1">
                        <div className={classes.Seeds1} key="2"></div>
                        <div className={classes.Seeds2} key="3"></div>
                    </div>
                );
                break;

            case('meat'):
                ingredient = <div className={classes.Meat} key="4"></div>;
                break;

            case('cheese'):
                ingredient = <div className={classes.Cheese} key="5"></div>;
                break;

            case('bacon'):
                ingredient = <div className={classes.Bacon} key="6"></div>;
                break;

            case('salad'):
                ingredient = <div className={classes.Salad} key="7"></div>;
                break;

            default:
                ingredient=null;
        }
        return ingredient;
    }
}

// this is for props validation of this class, so using BurgerIngredient class without passing props will throw an error
BurgerIngredient.propTypes={
    type: propTypes.string.isRequired
};

export default BurgerIngredient;