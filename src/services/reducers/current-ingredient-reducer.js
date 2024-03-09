import {CLEAR_INGREDIENT_DATA, SET_INGREDIENT_DATA} from "../actions/current-ingredient";

const initialState = {
    currentIngredient: null,
}

export const currentIngredientReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INGREDIENT_DATA: {
            return {
                ...state,
                currentIngredient: action.currentIngredient
            }
        }
        case CLEAR_INGREDIENT_DATA: {
            return {
                ...state,
                currentIngredient: null
            }
        }
        default: {
            return state
        }
    }
}