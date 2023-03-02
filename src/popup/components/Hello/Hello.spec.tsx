/**
 * @jest-environment jsdom
 */

import React from "react"
import { Hello } from "./Hello"
import { render } from '@testing-library/react'

global.chrome = null

describe("Hello tests", () => {
    it("Should render", () => {
        render(<Hello name={'test'} />)
    })
})