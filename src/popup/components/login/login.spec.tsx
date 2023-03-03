/**
 * @jest-environment jsdom
 */

import React from "react"
import { LoginWidget } from "./login"
import { render } from '@testing-library/react'

global.chrome = null

describe("Hello tests", () => {
    it("Should render", () => {
        render(<LoginWidget />)
    })
})