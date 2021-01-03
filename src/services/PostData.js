
const axios = require('axios');

 export function PostData(url,userData={}){  
     var header_token=null,Authorization=null;

          if(sessionStorage.getItem('userToken')){
            Authorization = `Bearer ${sessionStorage.getItem('userToken')}`
          }
                  return new Promise( (resolve, reject)=>{ 

                    axios({
                      method: 'post',
                      url: url,
                      data: JSON.stringify(userData),
                      headers: {
                    "Content-Type": "application/json",
                    'Module':'JW9tc0ByZWRsdGQl',
                    'Authorization':Authorization
                    
                }
                    })
                    .then( (responseJson) => { 
                      resolve(responseJson);
                    })
                    .catch( (error) => {
                      reject(error); 
                    })
                  });
}

