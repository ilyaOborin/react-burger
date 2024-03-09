import {
    DELETE_INGREDIENT_FROM_BURGER, MOVE_INGREDIENT_IN_BURGER,
    SET_INGREDIENT_TO_BURGER,
} from "../actions/burgerIngredients";

const initialState = {
    burgerIngredients: [],
}

export const burgerIngredientsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_INGREDIENT_TO_BURGER: {
            if (action.ingredient.type === 'bun') {
                const ingredientBun = state.burgerIngredients.findIndex(item => item.type === 'bun');
                if (ingredientBun !== -1) {
                    const updatedIngredients = [...state.burgerIngredients];
                    updatedIngredients[ingredientBun] = action.ingredient;
                    return {
                        ...state,
                        burgerIngredients: updatedIngredients
                    };
                } else {
                    return {
                        ...state,
                        burgerIngredients: [...state.burgerIngredients, action.ingredient]
                    };
                }
            } else {
                return {
                    ...state,
                    burgerIngredients: [...state.burgerIngredients, action.ingredient]
                };
            }
        }
        case DELETE_INGREDIENT_FROM_BURGER: {
            const indexToRemove = state.burgerIngredients.findIndex(item => item._id === action.ingredient._id);
            if (indexToRemove !== -1) {
                const updatedIngredients = [...state.burgerIngredients];
                updatedIngredients.splice(indexToRemove, 1);
                return {
                    ...state,
                    burgerIngredients: updatedIngredients
                };
            }
            return state
        }
        case MOVE_INGREDIENT_IN_BURGER: {
            const updatedCards = [...state.burgerIngredients];
            const [draggedCard] = updatedCards.splice(action.payload.dragIndex, 1);
            updatedCards.splice(action.payload.hoverIndex, 0, draggedCard);
            return {
                ...state,
                burgerIngredients: updatedCards
            };
        }
        default: {
            return state
        }
    }
}