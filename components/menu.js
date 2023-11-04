import React, {useState} from 'react';
import axios from 'axios';
import useSWR from 'swr';
import { getCookie } from 'cookies-next';
import Router, { useRouter } from 'next/router';
import Link from 'next/link';


function Menu () {
    const token =(getCookie('token'));
    const fetcher = (url) => axios.get(url,
        {
            headers:{
                Authorization:`Bearer ${token}`,
                'Content-Type' : 'application/json',
                'Accept': 'application/json'}
            } ).then(res=>res.data)
    const {data, error} = useSWR('https://metro-card.p.rapidapi.com/pass/profile',fetcher,
    {
       refreshInterval: 500,
        shouldRetryOnError: true,
        
        });

        
       // console.log(data.email);
       //var email = JSON.stringify(data.email);
       // console.log(email);
       try {
        if(!error)
        {console.log('loading');
         }
        
        else{
           
            Router.push('/login');
        }
       } catch (error) {
    console.log('some error');
           
       }
        
        


   return(
    <>
   
  <div className="fixed bottom-0 z-50 flex flex-row w-full pt-6 pb-6 mt-10 bg-white border-t-2 drop-shadow-md" align="center">
  <Link  href="/pay"><div className="basis-1/4">Pay</div></Link>
  <Link  href="/topup"><div className="basis-1/4">Top Up</div></Link>
  <Link  href="/messages"><div className="basis-1/4">Messages</div></Link>
  <Link href="/more"><div className="basis-1/4" >More</div></Link>
  </div>

    </>
   )
}

    export default Menu;
