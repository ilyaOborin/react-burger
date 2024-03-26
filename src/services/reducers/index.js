import {combineReducers} from "redux";
import {burgerIngredientsReducer} from './burder-ingredients-reducer';
import {currentIngredientReducer} from './current-ingredient-reducer';
import {orderReducer} from './order-reducer';
import {ingredientsReducer} from './ingredients-reducer';

export const rootReducer = combineReducers({
    burgerIngredients: burgerIngredientsReducer,
    order: orderReducer,
    currentIngredient: currentIngredientReducer,
    ingredients: ingredientsReducer,
})