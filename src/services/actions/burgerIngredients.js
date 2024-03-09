export const SET_INGREDIENT_TO_BURGER = 'SET_INGREDIENT_TO_BURGER';
export const DELETE_INGREDIENT_FROM_BURGER = 'DELETE_INGREDIENT_FROM_BURGER';
export const MOVE_INGREDIENT_IN_BURGER = 'MOVE_INGREDIENT_IN_BURGER';


export function setIngredientToBurger(ingredient) {
    return function (dispatch) {
        dispatch({
            type: SET_INGREDIENT_TO_BURGER,
            ...ingredient
        })
    }
}

export function deleteIngredientFromBurger(ingredient) {
    return function (dispatch) {
        dispatch({
            type: DELETE_INGREDIENT_FROM_BURGER,
            ingredient
        })
    }
}

export function moveIngredientsInBurger({dragIndex, hoverIndex}) {
    return function (dispatch) {
        dispatch({
            type: MOVE_INGREDIENT_IN_BURGER,
            payload: {dragIndex, hoverIndex}
        })
    }
}