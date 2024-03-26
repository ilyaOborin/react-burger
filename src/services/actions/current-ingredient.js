export const SET_INGREDIENT_DATA = 'SET_INGREDIENT_DATA';
export const CLEAR_INGREDIENT_DATA = 'CLEAR_INGREDIENT_DATA';

export function setIngredientData(ingredient) {
    return function(dispatch) {
        dispatch({
            type: SET_INGREDIENT_DATA,
            currentIngredient: ingredient
        })
    }
}

export function clearIngredientData() {
    return function (dispatch) {
        dispatch({
            type: CLEAR_INGREDIENT_DATA,
        })
    }
}