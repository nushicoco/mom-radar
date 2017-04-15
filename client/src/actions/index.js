/**
 * Created by einavcarmon on 09/04/2017.
 */
import axios from 'axios';
export const CHANGE_USERNAME = 'CHANGE_USERNAME'
export function changeUserName(userName = "Mighty1617") {
    return {
        type:CHANGE_USERNAME,
        payload: userName
    };
}

// export const URL = '/users'
const PROFILE_URL = 'https://randomuser.me/api/'
export const FETCH_PROFILE = 'FETCH_PROFILE'
export function fetchProfile(profileEmail) {
    const request = axios.get(`${PROFILE_URL}?email=${profileEmail}`)
    return {
        type:FETCH_PROFILE,
        payload: request
    };
}

