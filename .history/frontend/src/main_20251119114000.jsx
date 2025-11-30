
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {store} from "./redux/store.js"
import { Provider } from 'react-redux'
import { Route, RouterProvider, createRouterFromElements} from "react-router"
import { createBrowserRouter } from 'react-router-dom'

//auth

//restricted




createRoot(document.getElementById('root')).render(

    <App />

)
