import ReactDOM from 'react-dom'

export interface ContainerTestInterface {
    render: (component: JSX.Element) => void
    container: HTMLDivElement
}

export const createContainer = (): ContainerTestInterface => {
    const container = document.createElement('div')

    return {
        render: (component: JSX.Element) => {
            ReactDOM.render(component, container)
        },
        container,
    }
}
