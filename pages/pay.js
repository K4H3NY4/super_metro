import React, {useState} from 'react';
import Balance from '../components/Balance';
import useSWR from 'swr'
import axios from 'axios';
import PaymentHistory from '../components/allPayments';
import PayRide from '../components/payRide';
import Menu from '../components/menu';





function Pay () {
    

    

return(

    <React.Fragment> 
    
 
        <div className="container p-0 m-0 mb-40 row" >  
         
            <div className="mt-5 col-12"> 
            <h1 className='p-5 mr-10 text-3xl font-medium ml-7 '>Pay Ride</h1>

             <Balance/>

             <h1 className='p-5 mr-10 text-lg font-medium ml-7'>Enter Vehicle Details</h1>
             <PayRide />
              
             <h1 className='p-5 mr-10 text-lg font-medium ml-7'>Previous Payments</h1>
             <PaymentHistory/>
                    
            
                         
            </div>

        </div> 


<Menu/>
    </React.Fragment>
)


      }

export default Pay;