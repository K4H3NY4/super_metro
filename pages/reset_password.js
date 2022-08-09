import React, { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';


const api = axios.create({
    baseURL:'https://metro-card.herokuapp.com/'
    
})




        



function Reset_password () {
       
    const [email, setEmail] = useState('');
  


    const handleSubmit = (e) => {
        //e.preventDefault();
      api.put('/pass/forgot-password', {email}).then(function (response){    
         
            // wrong password
            console.log(response);

            //testpass@gmail.com
            //kivgyjc

            document.getElementById("message").innerHTML="<p class=' rounded-md bg-lime-100 mt-5 p-3 ml-16 mr-16 ring-2 ring-lime-500 text-lime-500'>Password Sent to Email</p> ";  
       
    
              
    
    });
     
       
    }



    return (
       
  
      
        <React.Fragment>
        



         <div className="mt-16 ml-16 mr-16" align="center">  
            <div className="col-2"></div>

            <div className=" col-10"> 
                
             

               
                <input
                type="email"
                id="email" 
                className="block w-full p-3 bg-gray-100 border-transparent rounded-md focus:border-gray-500 focus:bg-white focus:ring-0"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
               
                placeholder="Email" /> 
                <br/>

                

                <div>
                    
        <p id="message"></p>
    </div>


                 <button className="pt-3 pb-3 pl-16 pr-16 text-white rounded-md bg-slate-900 hover:bg-slate-400 active:bg-slate-400 focus:outline-none focus:ring focus:ring-violet-300"  
                 onClick={handleSubmit} >Reset Password</button> 



             


             <div className="mt-4 row">
                 <div className="text-left col-6 small"><Link href="/login">Login</Link></div>
                 <div className="text-right col-6 small"><Link href="/register">Register </Link></div>
             </div>



            </div>

            <div className="col-2"></div>

        </div> 

        
    
    



        </React.Fragment>
    )

}




export default Reset_password;