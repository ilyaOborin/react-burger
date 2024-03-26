import {
    GET_ORDER_NUMBER_REQUEST,
    GET_ORDER_NUMBER_SUCCESS,
    GET_ORDER_NUMBER_FAILED, CLOSE_MODAL_ORDER
} from "../actions/order";

const initialState = {
    order: [],
    setIsOpen: false,
    orderRequest: false,
    orderFailed: false,
}
export const orderReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_ORDER_NUMBER_REQUEST: {
            return {
                ...state,
                orderRequest: true,
            }
        }
        case GET_ORDER_NUMBER_SUCCESS: {
            return {
                ...state,
                order: action.order,
                orderRequest: false,
                orderFailed: false,
                setIsOpen: true
            }
        }
        case GET_ORDER_NUMBER_FAILED: {
            return {
                ...state,
                orderRequest: false,
                orderFailed: true
            }
        }
        case CLOSE_MODAL_ORDER: {
            return {
                ...state,
                setIsOpen: false
            }
        }
        default: {
            return state
        }
    }
}