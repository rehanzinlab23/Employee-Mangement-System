import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  return (
    <div
      className="p-6 mt-5 bg-linear-to-br from-[#0b0f1a]/90 via-[#11162a]/80 to-[#0a0d18]/90
             rounded-2xl
             border border-white/10
             backdrop-blur-xl
             shadow-[0_0_80px_rgba(128,0,255,0.15)]"
    >
      <div className="flex rounded mb-4 justify-between px-4 py-2 bg-linear-to-r from-purple-600 to-cyan-500 text-white">
        <h2 className="text-lg font-medium w-1/5">Employee Name</h2>
        <h3 className="text-lg font-medium w-1/5">New Task</h3>
        <h5 className="text-lg font-medium w-1/5">Active Task</h5>
        <h5 className="text-lg font-medium w-1/5">Completed</h5>
        <h5 className="text-lg font-medium w-1/5">Failed</h5>
      </div>
      <div>
        {userData?.map((elem, idx) => {
          return (
            <div
              key={idx}
              className="flex rounded mb-4 justify-between px-4 py-2 border-2 border-cyan-500"
            >
              <h2 className="text-lg font-medium w-1/5">{elem.name}</h2>
              <h3 className="text-lg font-medium w-1/5 text-cyan-100">
                {elem.tasks.filter((task) => task.status === "New Task").length}
              </h3>
              <h5 className="text-lg font-medium w-1/5 text-cyan-500">
                {
                  elem.tasks.filter((task) => task.status === "Active Task")
                    .length
                }
              </h5>
              <h5 className="text-lg font-medium w-1/5">
                {
                  elem.tasks.filter((task) => task.status === "Completed")
                    .length
                }
              </h5>
              <h5 className="text-lg font-medium w-1/5 text-blue-400">
                {elem.tasks.filter((task) => task.status === "Failed").length}
              </h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
