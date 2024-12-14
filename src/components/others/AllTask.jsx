import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const AuthData = useContext(AuthContext);

  return (
    <>
      <div className="bg-[#1c1c1c]  rounded mt-10">
        <div className="bg-red-400  mt-2 py-2 px-4 flex justify-between rounded">
          <h2 className="w-1/5 text-lg font-medium" >Employee Name</h2>
          <h2 className="w-1/5 text-lg font-medium">New Task</h2>
          <h2 className="w-1/5 text-lg font-medium">Active Task</h2>
          <h2 className="w-1/5 text-lg font-medium">Completed</h2>
          <h2 className="w-1/5 text-lg font-medium">Failed</h2>
        </div>
      </div>
      <div className="p-2">
        {AuthData.employees.map((e,i) => {
          return (
            <div key={i} className=" border border-emerald-400  mt-2 py-2 px-4 flex justify-between rounded">
              <h2 className="w-1/5 text-lg font-medium text-white ">{e.firstName}</h2>
              <h3 className="w-1/5 text-lg font-medium text-blue-400 ml-10">{e.taskCounts.newTask}</h3>
              <h5 className="w-1/5 text-lg font-medium text-yellow-400">{e.taskCounts.active}</h5>
              <h5 className="w-1/5 text-lg font-medium text-purple-400">{e.taskCounts.completed}</h5>
              <h5 className="w-1/5 text-lg font-medium text-red-400">{e.taskCounts.failed}</h5>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AllTask;
