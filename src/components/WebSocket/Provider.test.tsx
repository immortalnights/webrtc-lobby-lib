import {
    type RenderOptions,
    render as reactRender,
    screen,
} from "@testing-library/react"
import { expect, test } from "vitest"
import { type ReactElement, useEffect } from "react"
import { useWebSocket } from "./useWebSocket"
import { WebSocketProvider } from "./Provider"

const render = (ui: ReactElement, options: RenderOptions = {}) => {
    return reactRender(ui, { wrapper: WebSocketProvider, ...options })
}

test("Disconnected", () => {
    const Component = () => {
        const { state } = useWebSocket()

        return <div>{state}</div>
    }
    render(<Component />)
    expect(screen.getByText("disconnected")).toBeInTheDocument()
})

test("Connecting", () => {
    const Component = () => {
        const { state, connect } = useWebSocket()

        useEffect(() => {
            connect()
        }, [connect])

        return <div>{state}</div>
    }
    render(<Component />)
    expect(screen.getByText("connecting")).toBeInTheDocument()
})

test("Connected", () => {
    // const Component = () => {
    //     const
    // }
})
