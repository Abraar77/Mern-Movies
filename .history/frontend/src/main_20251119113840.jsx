
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {store} from "./redux/store.js"
import { Provider } from 'react-redux'
import { Route, RouterProvider, createRouterFromElements}
createRoot(document.getElementById('root')).render(

    <App />

)
