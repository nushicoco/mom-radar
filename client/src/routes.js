/**
 * Created by einavcarmon on 12/04/2017.
 */
import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './App';
export const routes = [
    {
        'pattern':'/',
        'component': App,
        'exactly': true
    },
    // {
    //     'pattern':'/coco',
    //     'component': App,
    // },
]