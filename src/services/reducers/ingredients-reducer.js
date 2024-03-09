import {
    GET_INGREDIENTS_LIST_FAILED,
    GET_INGREDIENTS_LIST_REQUEST,
    GET_INGREDIENTS_LIST_SUCCESS
} from "../actions/ingredients";

const initialState = {
    ingredients: [],
    ingredientsRequest: false,
    ingredientsFailed: false,
}

export const ingredientsReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_INGREDIENTS_LIST_REQUEST: {
            return {
                ...state,
                ingredientsRequest: true,
            }
        }
        case GET_INGREDIENTS_LIST_SUCCESS: {
            return {
                ...state,
                ingredients: action.ingredients,
                ingredientsRequest: false,
                ingredientsFailed: false
            }
        }
        case GET_INGREDIENTS_LIST_FAILED: {
            return {
                ...state,
                ingredientsRequest: false,
                ingredientsFailed: true
            }
        }
        default: {
            return state
        }
    }
}