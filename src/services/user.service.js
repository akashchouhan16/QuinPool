
import axios from 'axios';
//import { resolve } from 'core-js/fn/promise';
export const addUser = ({success, error,object})=>{
  console.log("inside register",object)
  const api ="http://10.30.1.91:8082/users/add" 

  axios
  .post(api,object)
  .then((response)=>{   
    
    console.log(response)
    success && success(response)      
  }).catch((e) => {
    console.log('service errror',e)
      error && error(e)
  })
}
