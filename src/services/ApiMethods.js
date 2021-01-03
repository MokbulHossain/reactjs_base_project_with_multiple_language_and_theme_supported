const axios = require('axios');
const Module = 'JW9tc0ByZWRsdGQl'
let Authorization= `Bearer ${sessionStorage.getItem('userToken')||null}`

module.exports = {

    GetData: (url,optional_Module=null,AuthorizationPass=null) =>{
        return new Promise( (resolve, reject)=>{
         
            let headers ={
                "Content-Type": "application/json",
                'Authorization':AuthorizationPass||Authorization
             }

             if(!optional_Module){headers.Module=Module} 

           axios({
                method: 'GET',
                url: url,
                headers: headers

                }).then( (responseJson) => { 
                         resolve(responseJson.data);
                    }).catch( (error) => {
                          reject(error.response);
                        })
            })
    },

    PostData:(url,userData={},AuthorizationPass=null,content_type=null) =>{

        return new Promise( (resolve, reject)=>{ 
                 axios({
                      method: 'post',
                      url: url,
                      data: !content_type?JSON.stringify(userData):userData,
                      headers: {
                                "Content-Type": content_type||"application/json",
                                'Module':Module,
                                'Authorization':AuthorizationPass||Authorization
                            }
                    })
                    .then( (responseJson) => { resolve(responseJson) })
                    .catch( (error) => {  reject(error.response)  })
                  })
     },
    
    PutData:(url,userData) =>{ 

          return new Promise( (resolve, reject)=>{ 
                 axios({
                    method: 'PUT',
                    url: url,
                    data: JSON.stringify(userData),
                    headers: {
                        "Content-Type": "application/json",
                        'Module':Module,
                        'Authorization':Authorization
                        }
                })    
                .then( (responseJson) => {resolve(responseJson.data) })
                .catch( (error) => { reject(error.response) })
            })
    },

   DeleteData:(url,userData={})=>{

          return new Promise( (resolve, reject)=>{ 
                axios({
                method: 'DELETE',
                url: url,
                data: JSON.stringify(userData),
                headers: {
                        "Content-Type": "application/json",
                        'Module':Module,
                        'Authorization':Authorization
                    }
                })
                .then( (responseJson) => { resolve(responseJson.data) })
                .catch( (error) => {reject(error) })
            })
   },

 }