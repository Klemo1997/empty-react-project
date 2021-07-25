import React from "react"
import './styles/App.scss'

const App = (): React.ReactElement => (
    <div className="main-container">
        <h1>Custom react template Application</h1>
        <h4>Currently supports:</h4>
        <ul className="support-list">
            <li>Typescript</li>
            <li>Hot reloading</li>
            <li>Jest testing</li>
            <li>SCSS/SASS importing</li>
        </ul>
        <div>
            <img className="react-logo" src="/react-logo.png" alt="React logo"/>
        </div>
    </div>
)

export default App