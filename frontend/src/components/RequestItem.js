import React from "react";

const RequestItem = ({ request }) => {
  console.log(request.text);
  return (
    <div className="bg-gray-300 mx-[10%] rounded ">
      <div className="flex flex-col   items-center pt-5 font-semibold  text-center">
        {new Date(request.createdAt).toLocaleString("en-US")}
      </div>
      <h2 className="text-center my-5 font-bold pb-5">{request.text}</h2>
    </div>
  );
};

export default RequestItem;
