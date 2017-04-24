/**
 * Created by einavcarmon on 12/04/2017.
 */
import Profile from './containers/profile_page';
import Interested from "./components/interested";


export const routes = [

    {
        'path':'/',
        'component': Interested,
        'exact' : true
    },
    {
        'path':'/profile',
        'component': Profile
    },
    // {
    //     'pattern':'/coco',
    //     'component': App,
    // },
]