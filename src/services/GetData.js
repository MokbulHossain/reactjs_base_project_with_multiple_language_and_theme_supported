const axios = require('axios');

export function GetData(url){
  
 let Authorization= `Bearer ${sessionStorage.getItem('userToken')}`
      
  return new Promise( (resolve, reject)=>{

     axios({
      method: 'GET',
      url: url,
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