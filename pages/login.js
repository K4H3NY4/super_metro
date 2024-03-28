import React, { useState } from 'react';
import axios from 'axios';
import { setCookie } from 'cookies-next';
import Router, { useRouter } from 'next/router';
import Image from 'next/image'
import Link from 'next/link';


const api = axios.create({
    baseURL:'https://metro-card.onrender.com/'
    
})




        



function Login () {
       
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [token, setToken] = useState('')


    const handleSubmit = (e) => {
        //e.preventDefault();
      api.post('/pass/login', {email, password}).then(function (response){    
        if( response.data.message === 'Authentication failed'){    
            // wrong password
            console.log(response);

            //testpass@gmail.com
            // vfcuzjd

          }    
       
        if( response.data.message === 'ok'){
          
            console.log('hapo sawa');
            localStorage.setItem("token",response.data.access_token);
            setCookie('token',response.data.access_token);
            Router.push('/pay');
           
         
         
        } else{
            function hideMessage() {
                    
                document.getElementById("message").innerHTML="<p></p>";
            }
            document.getElementById("message").innerHTML='<div id="toast-warning" class="mt-5 flex items-center p-4 w-full max-w-xs text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert"><div class="inline-flex flex-shrink-0 justify-center items-center w-8 h-8 text-orange-500 bg-orange-100 rounded-lg dark:bg-orange-700 dark:text-orange-200"><svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg><span class="sr-only">Warning icon</span></div><div class="ml-3 text-sm font-normal">Incorrect Password/Email</div><button type="button" class="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-warning" aria-label="Close"><span class="sr-only">Close</span></button></div> ';
            setTimeout(hideMessage, 1500)

        }
              
    
    });
     
       
    }



    return (
       
  
      
        <React.Fragment>
        

       

         <div className="mt-48 ml-16 mr-16" align="center">  
         <Image
      
      src="/supermetro.jpg"
      alt="Picture of the author"
      width={100}
      height={100}
    />
            <div className="col-2"></div>

            <div className="col-10"> 
                
             

               
                <input
                type="email"
                id="email" 
                className="block w-full p-3 bg-gray-100 border-transparent rounded-md focus:border-gray-500 focus:bg-white focus:ring-0"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
               
                placeholder="Email" /> 
                <br/>

                

                <input 
                type="password"  
                id="password"  
                className="block w-full p-3 bg-gray-100 border-transparent rounded-md focus:border-gray-500 focus:bg-white focus:ring-0"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                autoComplete="false"
                placeholder="Password" /> 
                

                <div>
                    
        <p id="message"></p>
    </div>


                 <button className="pt-3 pb-3 pl-16 pr-16 mt-5 text-white rounded-md bg-slate-900 hover:bg-slate-400 active:bg-slate-400 focus:outline-none focus:ring focus:ring-violet-300"  
                 onClick={handleSubmit} >Login</button> 



             


             <div className="mt-4 row">
                 <div className="text-left col-6 small"><Link href="/reset_password">Reset Password</Link></div>
                 <div className="text-right col-6 small"><Link href="/register">Register </Link></div>
             </div>



            </div>

            <div className="col-2"></div>

        </div> 

        
    
    



        </React.Fragment>
    )

}




export default Login;
