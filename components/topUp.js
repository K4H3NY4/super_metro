import React, {useState} from 'react';
import axios from 'axios';
import { getCookie } from 'cookies-next';






function TopupWallet () {
    const token =(getCookie('token'));

    const [amount, setAmount] = useState('');
    const [reg_no, setRegNo] = useState('');
    const [message, setMessage] = useState('');

    axios.defaults.headers.common.Authorization = token;

    const api = axios.create({
        baseURL:'https://metro-card.onrender.com',
            headers:{
    Authorization:`Bearer ${token}`,
    'Content-Type' : 'application/json',
    'Accept': 'application/json'
    }
})

    const handlePay = (e) => {
        e.preventDefault();
    
            api.post('/pass/topup',{reg_no,amount}).then(function (response){ 
                //const balance = setBalance(response.data.balance)
               console.log(response)
           try{
               if(response.data === 'Top Up successful'){
                function hideMessage() {
                    
                    document.getElementById("topmessage").innerHTML="<p></p>";
                }
                document.getElementById("topmessage").innerHTML="<div align='center' id='toast-success' class='flex items-center p-4 mb-4 w-full max-w-xs text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800' role='alert'><div class='inline-flex flex-shrink-0 justify-center items-center w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200'><svg aria-hidden='true' class='w-5 h-5' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clip-rule='evenodd'></path></svg><span class='sr-only'>Check icon</span></div><div class='ml-3 text-sm font-normal'>Top Up Successful</div><button type='button' class='ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700' data-dismiss-target='#toast-success' aria-label='Close'><span class='sr-only'>Close</span></button></div>";
                setTimeout(hideMessage, 1500)

               } 
               
               if(response.data === 'Error: Amount must be greater than 0'){
                function hideMessage() {
                    
                    document.getElementById("topmessage").innerHTML="<p></p>";
                }
                document.getElementById("topmessage").innerHTML='<div id="toast-simple" class="flex items-center p-4 space-x-4 w-full max-w-xs text-gray-500 bg-white rounded-lg divide-x divide-gray-200 shadow dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800" role="alert"><svg aria-hidden="true" class="w-5 h-5 text-blue-600 dark:text-blue-500" focusable="false" data-prefix="fas" data-icon="paper-plane" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M511.6 36.86l-64 415.1c-1.5 9.734-7.375 18.22-15.97 23.05c-4.844 2.719-10.27 4.097-15.68 4.097c-4.188 0-8.319-.8154-12.29-2.472l-122.6-51.1l-50.86 76.29C226.3 508.5 219.8 512 212.8 512C201.3 512 192 502.7 192 491.2v-96.18c0-7.115 2.372-14.03 6.742-19.64L416 96l-293.7 264.3L19.69 317.5C8.438 312.8 .8125 302.2 .0625 289.1s5.469-23.72 16.06-29.77l448-255.1c10.69-6.109 23.88-5.547 34 1.406S513.5 24.72 511.6 36.86z"></path></svg> <div class="pl-4 text-sm font-normal">Enter positive digits</div> </div>';

               }
               setTimeout(hideMessage, 1500)
                if(response.data === 'Something went wrong or mpesa code exists'){
                    function hideMessage() {
                    
                        document.getElementById("topmessage").innerHTML="<p></p>";
                    }
                    document.getElementById("topmessage").innerHTML='<div id="toast-warning" class="mt-5 flex items-center p-4 w-full max-w-xs text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert"><div class="inline-flex flex-shrink-0 justify-center items-center w-8 h-8 text-orange-500 bg-orange-100 rounded-lg dark:bg-orange-700 dark:text-orange-200"><svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg><span class="sr-only">Warning icon</span></div><div class="ml-3 text-sm font-normal">Something went wrong</div><button type="button" class="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-warning" aria-label="Close"><span class="sr-only">Close</span></button></div>';
                    setTimeout(hideMessage, 1500)

                }
              
            }
            catch (error){
                document.getElementById("topmessage").innerHTML="No internet connection";

            }
                   
            
            })
           
}


    
return(

    <React.Fragment>

<div  className="ml-10 mr-10" align="center">


<input type="number"
placeholder="Amount"
 value = {amount}
 onChange={(e)=>setAmount(e.target.value)}
 className="block w-full p-3 bg-gray-100 border-transparent rounded-md focus:border-gray-500 focus:bg-white focus:ring-0" />
<br/>
 <button className="pt-3 pb-3 pl-16 pr-16 mb-5 text-white rounded-md bg-slate-900 hover:bg-slate-400 active:bg-slate-400 focus:outline-none focus:ring focus:ring-violet-300"
  onClick={handlePay}>Top Up</button>

    <div>
        <p className="text-center alert alert-successful" id="topmessage">{message}</p>
    </div>

</div>


</React.Fragment>

)


      }

export default TopupWallet;

