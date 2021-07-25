import React from "react"
import ReactDOM from "react-dom"
import App from './App'
import {hot} from 'react-hot-loader'

const HotLoadedApp = hot(module)(App)

ReactDOM.render(<HotLoadedApp/>, document.getElementById('root'))