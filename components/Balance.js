import React, {useState} from 'react';
import axios from 'axios';
import useSWR from 'swr';
import { getCookie } from 'cookies-next';






function Balance () {
     
   
    const token =(getCookie('token'));
    const fetcher = (url) => axios.get(url,{headers:{Authorization:`Bearer ${token}`,'Content-Type' : 'application/json','Accept': 'application/json'}}).then(res=>res.data.balance)
    const {data, error} = useSWR('https://metro-card.onrender.com/pass/balance',fetcher,
    {
        refreshInterval: 500,
        shouldRetryOnError: true,
        
        });

   var newData = JSON.stringify(data);
   console.log(data);

return(

        

                <div className="p-5 mb-10 ml-10 mr-10 border border-solid shadow-md rounded-xl border-slate-100">
                    
                    <p className='text-lg font-bold' >Wallet</p>
                    <p className='text-sm font-thin'>Balance</p>
                    
                    <p className='text-xl font-thin'>Ksh {data} </p>
                </div>


)


      }

export default Balance;
