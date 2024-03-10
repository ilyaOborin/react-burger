import {request} from '../../utils/request';
export const GET_ORDER_NUMBER_REQUEST = 'GET_ORDER_NUMBER_REQUEST';
export const GET_ORDER_NUMBER_SUCCESS = 'GET_ORDER_NUMBER_SUCCESS';
export const GET_ORDER_NUMBER_FAILED = 'GET_ORDER_NUMBER_FAILED';
export const CLOSE_MODAL_ORDER = 'CLOSE_MODAL_ORDER';

export function getOrderData(order) {
    return function (dispatch) {
        if(order.length === 0) {
            return;
        }
        dispatch({
            type: GET_ORDER_NUMBER_REQUEST
        });
        const orderElementsIds = order.map(ingredient => ingredient._id);
        const orderBody = {ingredients: orderElementsIds};
        request('/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(orderBody)
        })
            .then(data => {
                dispatch({
                    type: GET_ORDER_NUMBER_SUCCESS,
                    order: data,
                });
            })
            .catch(e => {
                dispatch({
                    type: GET_ORDER_NUMBER_FAILED,
                });
            });
    }
}

export function closeOrderModal() {
    return function(dispatch) {
        dispatch({
            type: CLOSE_MODAL_ORDER,
        })
    }
}