const axios = require('axios');
const metFun  = require('./api');
jest.mock('axios');

describe('api', () => {
  
test('should fetch users', () => {
  const user = {

    userId: 0,
    id: 1,
    title: 'delectus aut autem',
    completed: false  
};
  const resp = { data: user };
  axios.get.mockResolvedValue(Promise.resolve(resp));
  return metFun().then((data) => {
    expect(data).toEqual(user);
  });
});

});