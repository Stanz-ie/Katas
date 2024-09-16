import { test, expect } from 'vitest'
import { solution } from './script.js'

test ('reverse_a_string', () => {
    expect (solution("word")).toBe ("drow")
    expect (solution ("world")).toBe ("dlrow")
})