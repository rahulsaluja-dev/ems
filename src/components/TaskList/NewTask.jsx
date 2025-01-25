import React from "react";

const NewTask = ({data}) => {
  return (
    <div className="h-full flex-shrink-0  w-[300px] bg-yellow-400 p-4 rounded-xl">
      <div className="flex justify-between items-center ">
        <h3 className="bg-red-500 text-sm  px-3 py-1 rounded">{data.category}</h3>
        <h4 className="text-sm"> {data.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-xl font-semibold "> {data.taskTitle}</h2>
      <p className="text-sm mt-2">{data.taskDescription} </p>
      <div className="mt-4">
        <button>Accept Task</button>
      </div>
    </div>
  );
};

export default NewTask;
