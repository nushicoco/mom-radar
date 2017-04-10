/**
 * Created by einavcarmon on 09/04/2017.
 */
export function changeUserName(userName = "Mighty1617") {
    return {
        type:'CHANGE_USERNAME',
        payload: userName
    };
}