import {API_URL} from './url';
export function request(endpoint, options) {
    return fetch(API_URL + endpoint, options).then(checkResponse)
}
function checkResponse(res) {
    if(res.ok) {
        return res.json()
    } else {
        throw new Error("Ошибка выполнения запроса");
    }
}