const axios= require('axios')

function Users() {

    return axios.get('https://jsonplaceholder.typicode.com/todos/1').then(resp => resp.data);
  
}

module.exports= Users;