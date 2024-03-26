import {request} from '../../utils/request';
export const GET_INGREDIENTS_LIST_REQUEST = 'GET_INGREDIENTS_LIST_REQUEST';
export const GET_INGREDIENTS_LIST_SUCCESS = 'GET_INGREDIENTS_LIST_SUCCESS';
export const GET_INGREDIENTS_LIST_FAILED = 'GET_INGREDIENTS_LIST_FAILED';

export function getIngredientsList() {
    return function (dispatch) {
        dispatch({
            type: GET_INGREDIENTS_LIST_REQUEST
        });
        request('/ingredients')
            .then(data => {
                dispatch({
                    type: GET_INGREDIENTS_LIST_SUCCESS,
                    ingredients: data.data
                });
            })
            .catch(e => {
                dispatch({
                    type: GET_INGREDIENTS_LIST_FAILED,
                });
            });
    }
}