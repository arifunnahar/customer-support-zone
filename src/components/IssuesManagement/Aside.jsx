import React, { useState } from "react";

const Aside = ({ item }) => {
    // console.log(item)
  return (
    <div className=" col-span-5 md:col-span-3  mb-4  ml-15  md:ml-0">
      <div className=" ">
        <h1 className="font-semibold text-gray-800 text-xl mb-2">
          Task Status
        </h1>
        <div className="bg-white p-3 ">
                  <h3 className="font-semibold">{item.title}</h3>
          <button className="btn bg-green-600 w-full text-white mt-2">Complete</button>
        </div>
      </div>

      <div className="mt-2 mb-2">
        <h1 className="font-semibold text-gray-800 text-xl mb-2">
          Resolved Task
        </h1>
        <div className="bg-white p-3 mb-2">
          <h3 className="font-semibold">Payment Failed - Card Declined</h3>
          <button className="btn bg-green-600 w-full text-white mt-2">
            Complete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Aside;
