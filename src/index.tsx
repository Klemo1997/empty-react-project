import React from 'react'
import ReactDOM from 'react-dom'
import { hot } from 'react-hot-loader'
import App from './App'

const HotLoadedApp = hot(module)(App)

ReactDOM.render(<HotLoadedApp />, document.getElementById('root'))
