
describe('makePoniesPink', () => {
    beforeAll(() => {
      /* Runs before all tests */
    })
    afterAll(() => {
      /* Runs after all tests */
    })
    beforeEach(() => {
      /* Runs before each test */
    })
    afterEach(() => {
      /* Runs after each test */
    })
  
    test('make each pony pink', () => {
      const actual = fn(['Alice', 'Bob', 'Eve'])
      expect(actual).toEqual(['Pink Alice', 'Pink Bob', 'Pink Eve'])
    })
  })
  test.skip('skip', () => {

})

test.only('skip', () => {

})

  
expect(42).toBe(42) // Strict equality (===)
expect(42).not.toBe(3) // Strict equality (!==)
expect([1, 2]).toEqual([1, 2]) // Deep equality

// Matches anything that an if statement treats as true (not false, 0, '', null, undefined, NaN)
expect('foo').toBeTruthy()
// Matches anything that an if statement treats as false (false, 0, '', null, undefined, NaN)
expect('').toBeFalsy()
// Matches only null
expect(null).toBeNull()
// Matches only undefined
expect(undefined).toBeUndefined()
// The opposite of toBeUndefined
expect(7).toBeDefined()
// Matches true or false
expect(true).toEqual(expect.any(Boolean))

expect(2).toBeGreaterThan(1)
expect(1).toBeGreaterThanOrEqual(1)
expect(1).toBeLessThan(2)
expect(1).toBeLessThanOrEqual(1)
expect(0.2 + 0.1).toBeCloseTo(0.3, 5)
expect(NaN).toEqual(expect.any(Number))

expect('long string').toMatch('str')
expect('string').toEqual(expect.any(String))
expect('coffee').toMatch(/ff/)
expect('pizza').not.toMatch('coffee')
expect(['pizza', 'coffee']).toEqual([expect.stringContaining('zz'), expect.stringMatching(/ff/)])
expect([]).toEqual(expect.any(Array))
expect(['Alice', 'Bob', 'Eve']).toHaveLength(3)
expect(['Alice', 'Bob', 'Eve']).toContain('Alice')
expect([{ a: 1 }, { a: 2 }]).toContainEqual({ a: 1 })
expect(['Alice', 'Bob', 'Eve']).toEqual(expect.arrayContaining(['Alice', 'Bob']))
expect({ a: 1 }).toHaveProperty('a')
expect({ a: 1 }).toHaveProperty('a', 1)
expect({ a: { b: 1 } }).toHaveProperty('a.b')
expect({ a: 1, b: 2 }).toMatchObject({ a: 1 })
expect({ a: 1, b: 2 }).toMatchObject({
  a: expect.any(Number),
  b: expect.any(Number),
})
expect([{ a: 1 }, { b: 2 }]).toEqual([
  expect.objectContaining({ a: expect.any(Number) }),
  expect.anything(),
])

const fn = () => { throw new Error('Out of cheese!') }
expect(fn).toThrow()
expect(fn).toThrow('Out of cheese')
expect(fn).toThrowErrorMatchingSnapshot()