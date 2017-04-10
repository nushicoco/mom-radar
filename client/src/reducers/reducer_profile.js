/**
 * Created by einavcarmon on 09/04/2017.
 */
export default function  (store = {}, action) {
    switch (action.type) {
        case 'CHANGE_USERNAME':
            return action.payload;
        default:
            return store;
    }
}