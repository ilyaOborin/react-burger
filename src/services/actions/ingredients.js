export const GET_INGREDIENTS_LIST_REQUEST = 'GET_INGREDIENTS_LIST_REQUEST';
export const GET_INGREDIENTS_LIST_SUCCESS = 'GET_INGREDIENTS_LIST_SUCCESS';
export const GET_INGREDIENTS_LIST_FAILED = 'GET_INGREDIENTS_LIST_FAILED';

const INGREDIENTS_URL = 'https://norma.nomoreparties.space/api/ingredients';

export function getIngredientsList() {
    return function (dispatch) {
        dispatch({
            type: GET_INGREDIENTS_LIST_REQUEST
        });
        fetch(INGREDIENTS_URL)
            .then(res => {
                if(res.ok) {
                    return res.json()
                } else {
                    throw new Error("Ошибка выполнения запроса");
                }
            })
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