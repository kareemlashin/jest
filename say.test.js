const { add, mul, sub, div, all } = require('./say');
// ^ test block
test('add', () => {
  expect(add(2, 3)).toBe(5);
  expect(add(1, 3)).toBe(4);
});

test('multiple', () => {
  expect(mul(3, 4)).toBe(12);
  //    expect(mul(3, 2)).toBe(6);
});

test('sub', () => {
  expect(sub(5, 6)).toBe(-1);
});

test('div', () => {
  expect(div(8, 4)).toBe(2);
});

beforeAll(() => {
  // ? before start all tests
});
beforeEach(() => {
  // ? before each test
});

afterAll(() => {
  // ? after  all tests
});
afterEach(() => {
  // ? after each test
});
test('length value', () => {
  expect(all).toHaveLength(7);
});
test('length kareem', () => {
    expect('kareem').toHaveLength(6);
  });

  test('if array have 3', () => {
    expect(all).toContain(3);
  });
  
  test('if array not have 3', () => {
    expect(all).not.toContain(100);
  });

  test('toBeFalsy', () => {
    expect(false).toBeFalsy();
  });

  test('toBeTruthy', () => {
    expect(true).toBeTruthy();
  });
  test('toBeGreaterThan', () => {
    expect(5).toBeGreaterThan(4);
  });

  test('match', () => {
    expect('5').toMatch(/^[0-9]{1}$/);
  });


// ^ method
// ~ test(name,function,time)
// ~ it(name,function,time)
// ~ Describe
// ~ test.Only
// ~ test.skip
// ~ beforeAll(fn,time)
// ~ beforeEach(fn,time)
// ~ afterAll
// ~ afterEach
// ~ not
/* 
 * Matchers 
 & https://jestjs.io/docs/expect
 ! toHaveLength
 ! toContain
 ! not
 ! toBeFalsy
 ! toBeTruthy
 ! toBeGreaterThan
*/

// field refactor (fix)

// & coverage
// ~ npm test -- --coverage