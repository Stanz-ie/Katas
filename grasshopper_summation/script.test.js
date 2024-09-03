import { test, expect } from 'vitest'
import { summation } from './script'

test ('summation of every number from 1 to num', () => {
expect (summation([1])).toBe(1)
expect (summation([2])).toBe(3)
expect (summation([8])).toBe(36)
});