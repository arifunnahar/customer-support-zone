import React, { use, useState } from "react";
import Aside from "./Aside";
import IssueCard from "./IssueCard"; 
import CountCard from "./../CountCard/CountCard"


const Card = ({ ticket, setTicket, count, setCount }) => {
  



 console.log(count)

  

  return (
      <div className="bg-gray-100 ">
          
         
      <CountCard count={count} />
    


          
        <div className="max-w-[1200px] mx-auto">
              <h1 className="font-bold text-xl p-2 md:p-0 ml-5 md:ml-0">Customer Tickets</h1>
              
              <div className="grid grid-cols-3 md:grid-cols-12 gap-5 mt-3">
                  
                  
                  {/*------ Issues card side ------*/}
                  
                  <div className="col-span-9 grid grid-cols-1 md:grid-cols-2 gap-3 mb-4 p-5 md:p-0">
                      
                      {ticket.map((t) => (
                        <IssueCard key={t.id} count={count} setCount={setCount} t={t} ticket={ticket} setTicket={setTicket}></IssueCard>
                       
                    ))}
            
                  
                  
            </div>

                  {/*------------- Aside side-------------*/}
                 
          {
            count.map(item => <Aside key={item.id} item={item} /> )
        }
        </div>
      </div>
    </div>
  );
};

export default Card;
