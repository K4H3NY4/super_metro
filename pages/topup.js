import React, {useState} from 'react';
import Balance from '../components/Balance';
import useSWR from 'swr'
import axios from 'axios';
import PaymentHistory from '../components/allPayments';
import PayRide from '../components/payRide';
import TopupWallet from '../components/topUp';
import TopupHistory from '../components/allTopups';
import Menu from '../components/menu';




function Topup () {

    

return(

    <React.Fragment> 
    
 
        <div className="container p-0 m-0 mb-40 row" >  
         
            <div className="mt-5 col-12"> 
            <h1 className='p-5 mr-10 text-3xl font-medium ml-7 '>Top Up</h1>

             <Balance/>

             <TopupWallet />
              
             <h1 className='p-5 mr-10 text-lg font-medium ml-7'>Previous Top Ups</h1>
             <TopupHistory/>
                    
            
                         
            </div>

        </div> 

        <Menu/>
    </React.Fragment>
)


      }

export default Topup;