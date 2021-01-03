const axios = require('axios');

export function PutData(url,userData){ 

let Authorization= `Bearer ${sessionStorage.getItem('userToken')}`

  return new Promise( (resolve, reject)=>{ 

       axios({
        method: 'PUT',
        url: url,
        data: JSON.stringify(userData),
        headers: {
          "Content-Type": "application/json",
        'Module':'JW9tc0ByZWRsdGQl',
        'Authorization':Authorization
          
        }
      })    
    .then( (responseJson) => {
      resolve(responseJson.data);
    })
    .catch( (error) => {
      reject(error);
    })
  });
}