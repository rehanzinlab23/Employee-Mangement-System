import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  return (
    <div className="mt-5 overflow-hidden rounded-2xl border border-white/10 bg-white/2 backdrop-blur-md shadow-2xl">
      <div className="flex items-center justify-between px-6 py-4 bg-white/5 border-b border-white/10 text-gray-400 uppercase tracking-wider text-xs font-bold">
        <div className="w-1/5">Employee</div>
        <div className="w-1/5 text-center">New</div>
        <div className="w-1/5 text-center">Active</div>
        <div className="w-1/5 text-center">Completed</div>
        <div className="w-1/5 text-center">Failed</div>
      </div>
      <div className="max-h-112.5 overflow-y-auto scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
        {userData?.map((elem, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between px-6 py-5 border-b border-white/3 hover:bg-white/4 transition-colors duration-200 group"
          >
            <div className="w-1/5 flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
              <h2 className="text-base font-semibold text-white/90 group-hover:text-white transition-colors">
                {elem.name}
              </h2>
            </div>

            {/* Status Counts - Using pill-style or colored typography */}
            <div className="w-1/5 text-center font-bold text-lg text-blue-400">
              {elem.tasks.filter((task) => task.status === "New Task").length}
            </div>

            <div className="w-1/5 text-center font-bold text-lg text-amber-400">
              {
                elem.tasks.filter((task) => task.status === "Active Task")
                  .length
              }
            </div>

            <div className="w-1/5 text-center font-bold text-lg text-emerald-400">
              {elem.tasks.filter((task) => task.status === "Completed").length}
            </div>

            <div className="w-1/5 text-center font-bold text-lg text-red-500">
              {elem.tasks.filter((task) => task.status === "Failed").length}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
