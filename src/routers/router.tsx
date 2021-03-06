import React from "react";
import {Redirect} from 'react-router-dom'
import {Home} from '../pages'
import {} from '../components'

const routerConfig = [
    {
        path: '/',
        exact: true,
        component: () => <Redirect to="/home"/>
    }
]
export default routerConfig