/**
 * @jest-environment jsdom
 */

import React from "react"
import { render } from '@testing-library/react'
import { HomeWidget } from "./home"

global.chrome = null

describe("Hello tests", () => {
    it("Should render", () => {
        render(<HomeWidget />)
    })
})