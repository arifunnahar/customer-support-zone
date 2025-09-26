import React from "react";

const IssueCard = ({ issue }) => {


  return (
    <div className="bg-white rounded-lg shadow p-2 ">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-semibold text-gray-900">{issue.title}</h3>
          <p className="text-sm text-gray-600 mt-2 line-clamp-1">
            {issue.description}
          </p>
        </div>


        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${issue.status === "Open" ? "bg-green-100" : "bg-yellow-100"}`}>
          <span className={`w-2 h-2 rounded-full ${issue.status === "Open" ? "bg-green-600" : "bg-yellow-500"}`}></span>
          <span className={`text-[12px] font-medium whitespace-nowrap ${issue.status === "Open" ? "text-green-600" : "text-yellow-600"}`}>
            {issue.status}
          </span>
        </div>
      </div>

      <div className="mt-3 flex justify-between items-center text-sm text-gray-500">
        <div>
          <span className="text-[12px]">#{issue.id}</span>
          <span className={`mx-2 ${issue.priority === "High" ? "text-red-500"
            : issue.priority ==="Medium"? "text-yellow-500" : "text-green-500"}`}>{issue.priority}</span>
        </div>
        <div>
          <span className="mx-3 text-[12px] font-semibold">{issue.customer}</span>
          <span className="text-[12px]">{issue.createdAt}</span>
        </div>
      </div>
    </div>
  );
};

export default IssueCard;
