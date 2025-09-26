import React, { use, useState } from "react";
import Aside from "./Aside";
import IssueCard from "./IssueCard"; 
import CountCard from "./../CountCard/CountCard"


const Card = ({ fetchPromise }) => {

  const initialData = use(fetchPromise);

    const [data, setData] = useState(initialData);
    console.log(data)

  return (
      <div className="bg-gray-100 ">
          
          <CountCard data={data} setData={setData}></CountCard>
          



          
        <div className="max-w-[1200px] mx-auto">
              <h1 className="font-bold text-xl p-2 md:p-0 ml-5 md:ml-0">Customer Tickets</h1>
              
              <div className="grid grid-cols-3 md:grid-cols-12 gap-5 mt-3">
                  
                  
                  {/*------ Issues card side ------*/}
                  
                  <div className="col-span-9 grid grid-cols-1 md:grid-cols-2 gap-3 mb-4 p-5 md:p-0">
                      
                      {initialData.map((issue, ind) => (
                        <IssueCard  key={ind}  issue={issue}></IssueCard>
                       
                    ))}
            
                  
                  
            </div>

                  {/*------------- Aside side-------------*/}
                  <Aside></Aside>
        
        </div>
      </div>
    </div>
  );
};

export default Card;
