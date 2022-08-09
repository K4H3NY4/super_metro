import React, { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

const api = axios.create({
    baseURL:'https://metro-card.herokuapp.com/'
    
})




function Register () {
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirm] = useState('');

    

    const handleSubmit = (e) => {
    e.preventDefault();

    if(password ===confirmPassword){
        api.post('/pass/register', {first_name,last_name,email,phone,password}).then(function (response) {
            const status = response.status
            if(status === 200){
                console.log(response.data);
                sessionStorage.setItem("token",response.data.token);
             }
            else {
                console.log('Email/Phone number already taken');
            }

           
         });
    
    }
  
}




return(

    <React.Fragment>
            
         <div className="container mt-5" align="center">  
            <div className="col-2"></div>

            <div className="mt-16 ml-16 mr-16"> 

             
            <input type="text" className="w-100"
                 placeholder="First Name"
                 value={first_name}
                 className="block w-full p-3 bg-gray-100 border-transparent rounded-md focus:border-gray-500 focus:bg-white focus:ring-0"
                 onChange={(e)=>setFirstName(e.target.value)}
                 
                 /> 
                 <br/>

                <input type="text" className="w-100" 
                placeholder="Last Name"                 
                value={last_name}
                className="block w-full p-3 bg-gray-100 border-transparent rounded-md focus:border-gray-500 focus:bg-white focus:ring-0"
                onChange={(e)=>setLastName(e.target.value)}
                /> 
                 <br/>


                <input type="email" className="w-100" 
                placeholder="E-mail"                 
                value={email}
                className="block w-full p-3 bg-gray-100 border-transparent rounded-md focus:border-gray-500 focus:bg-white focus:ring-0"
                onChange={(e)=>setEmail(e.target.value)}
                />

<br/>

                <input type="tel" className="w-100" 
                placeholder="2547XXXXXX"                 
                value={phone}
                className="block w-full p-3 bg-gray-100 border-transparent rounded-md focus:border-gray-500 focus:bg-white focus:ring-0"
                onChange={(e)=>setPhone(e.target.value)}
                
                /> 
 <br/>
  
                <input type="password" className="w-100" placeholder="Enter Password" 
                autoComplete="false"                
                value={password}
                className="block w-full p-3 bg-gray-100 border-transparent rounded-md focus:border-gray-500 focus:bg-white focus:ring-0"
                onChange={(e)=>setPassword(e.target.value)}
                
                /> 
 <br/>

                <input type="password" className="w-100" placeholder="Confirm Password"
                autoComplete="false"               
                value={confirmPassword}
                className="block w-full p-3 bg-gray-100 border-transparent rounded-md focus:border-gray-500 focus:bg-white focus:ring-0"
                onChange={(e)=>setConfirm(e.target.value)}
                
                /> 
                 <br/>

                 <button className="pt-3 pb-3 pl-16 pr-16 mt-16 text-white rounded-md bg-slate-900 hover:bg-slate-400 active:bg-slate-400 focus:outline-none focus:ring focus:ring-violet-300"  
                 onClick={handleSubmit } >Register</button> 



             


             <div className="mt-4 row">
                 <div className="text-left col-4 small"><Link href="/reset_password">Reset Password</Link></div>
                 <div className="text-right col-4 small"><Link href="/login">Login</Link></div>
             </div>



            </div>

            <div className="col-2"></div>

        </div> 


    
    


        <br/><br/><br/>
        </React.Fragment>
    )

}



export default Register;