import React from "react";
import {createContainer, ContainerTestInterface} from "./domManipulators";
import App from "../src/App";

describe('App', () => {
    let domManipulator: ContainerTestInterface

    beforeEach(() => {
        domManipulator = createContainer()
    })

    it('renders a hello world div', () => {
        domManipulator.render(<App/>)

        expect(domManipulator.container.querySelector('h1')?.textContent).toEqual('Custom react template Application')
    });
})