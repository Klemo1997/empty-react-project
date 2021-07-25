import React from 'react'
import { createContainer, ContainerTestInterface } from './domManipulators'
import App from '../src/App'

describe('App', () => {
    let domManipulator: ContainerTestInterface

    beforeEach(() => {
        domManipulator = createContainer()
    })

    it('renders a h1 header with specified text', () => {
        domManipulator.render(<App />)

        expect(
            domManipulator.container.querySelector('h1')?.textContent
        ).toEqual('Custom react template Application')
    })
})
