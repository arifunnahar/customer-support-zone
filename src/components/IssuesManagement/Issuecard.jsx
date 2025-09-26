import React, { useState } from "react";

const IssueCard = ({ t, count, setCount, setTicket, ticket }) => {
 

  
  


  const cardHandleAdd = (id) => {
    const newTicket = ticket.filter(item => item.id !== id) 
    const newComplete = count.filter(item => item.id !== id)
    
    setCount(newComplete)
    setTicket(newTicket)
   
  }
  
  

  return (
    <div 
      className="bg-white rounded-lg shadow p-2 cursor-pointer "onClick={()=>cardHandleAdd (t.id)} >
      <div className="flex justify-between items-start">
        <div className="">
          <h3 className="font-semibold text-gray-900">{t.title}</h3>
          <p className="text-sm text-gray-600 mt-2 line-clamp-1">
            {t.description}
          </p>
        </div>


        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${t.status === "Open" ? "bg-green-100" : "bg-yellow-100"}`}>
          <span className={`w-2 h-2 rounded-full ${t.status === "Open" ? "bg-green-600" : "bg-yellow-500"}`}></span>
          <span className={`text-[12px] font-medium whitespace-nowrap ${t.status === "Open" ? "text-green-600" : "text-yellow-600"}`}>
            {t.status}
          </span>
        </div>
      </div>

      <div className="mt-3 flex justify-between items-center text-sm text-gray-500">
        <div>
          <span className="text-[12px]">#{t.id}</span>
          <span className={`mx-2 ${t.priority === "High" ? "text-red-500"
            : t.priority ==="Medium"? "text-yellow-500" : "text-green-500"}`}>{t.priority}</span>
        </div>
        <div>
          <span className="mx-3 text-[12px] font-semibold">{t.customer}</span>
          <span className="text-[12px]">{t.createdAt}</span>
        </div>
      </div>
    </div>
  );
};

export default IssueCard;
