import React, {useState} from 'react';
import axios from 'axios';
import { getCookie } from 'cookies-next';






function PayRide () {
    const token =(getCookie('token'));

    const [amount, setAmount] = useState('');
    const [reg_no, setRegNo] = useState('');
    const [message, setMessage] = useState('');

    axios.defaults.headers.common.Authorization = token;

    const api = axios.create({
        baseURL:'https://metro-card.p.rapidapi.com',
            headers:{
    Authorization:`Bearer ${token}`,
    'Content-Type' : 'application/json',
    'Accept': 'application/json'
    }
})

    const handlePay = (e) => {
        e.preventDefault();
    
            api.post('/pass/pay',{reg_no,amount}).then(function (response){ 
                //const balance = setBalance(response.data.balance)
               console.log(response.data)
           try{
               if(response.data.message === 'payment successful'){

                function hideMessage() {
                    
                    document.getElementById("message").innerHTML="<p></p>";
                }
                document.getElementById("message").innerHTML="<div align='center' id='toast-success' class='flex items-center p-4 mb-4 w-full max-w-xs text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800' role='alert'><div class='inline-flex flex-shrink-0 justify-center items-center w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200'><svg aria-hidden='true' class='w-5 h-5' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clip-rule='evenodd'></path></svg><span class='sr-only'>Check icon</span></div><div class='ml-3 text-sm font-normal'>Payment Successful</div><button type='button' class='ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700' data-dismiss-target='#toast-success' aria-label='Close'><span class='sr-only'>Close</span></button></div>";

                setTimeout(hideMessage, 1500)

               } 
               
               if(response.data.message === 'payment failed'){
                document.getElementById("message").innerHTML="<p class='rounded-md bg-red-100  mb-5 p-3 ml-16 mr-16 ring-2 ring-red-100 text-red-500'>Payment Failed</p>";

               }
              
            }
            catch (error){
                document.getElementById("message").innerHTML="No internet connection";

            }
                   
            
            })
           
}


    
return(

    <React.Fragment>

<div  className="ml-10 mr-10" align="center">

<input type="text" 
placeholder="KGC 214X" 
className="block w-full p-3 bg-gray-100 border-transparent rounded-md focus:border-gray-500 focus:bg-white focus:ring-0"
value = {reg_no}
 onChange={(e)=>setRegNo(e.target.value)}

/>
<br/>

<input type="number"
placeholder="Amount"
 value = {amount}
 onChange={(e)=>setAmount(e.target.value)}
 className="block w-full p-3 bg-gray-100 border-transparent rounded-md focus:border-gray-500 focus:bg-white focus:ring-0" />
<br/>
 <button className="pt-3 pb-3 pl-16 pr-16 mb-5 text-white rounded-md bg-slate-900 hover:bg-slate-400 active:bg-slate-400 focus:outline-none focus:ring focus:ring-violet-300"
  onClick={handlePay}>Pay Ride</button>

    <div>
        <p className="text-center alert alert-successful" id="message">{message}</p>
    </div>

</div>


</React.Fragment>

)


      }

export default PayRide;

