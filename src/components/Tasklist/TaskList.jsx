import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const TaskList = ({ employee }) => {
  const [userData, setUserData] = useContext(AuthContext);
  const currentEmployee = userData?.find((emp) => emp.id === employee.id);

  if (!currentEmployee || !currentEmployee.tasks.length) {
    return <p className="text-white">No tasks found.</p>;
  }

  const updateStatus = (taskId, newStatus) => {
    const updatedEmployees = userData.map((emp) => {
      if (emp.id === employee.id) {
        const updatedTasks = emp.tasks.map((task) => {
          if (task.id === taskId) {
            // Only allow status change if task is not already completed or failed
            if (task.status !== "Completed" && task.status !== "Failed") {
              return { ...task, status: newStatus };
            }
          }
          return task;
        });
        return { ...emp, tasks: updatedTasks };
      }
      return emp;
    });
    setUserData(updatedEmployees);
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
      {currentEmployee.tasks.map((t) => {
        const isDone = t.status === "Completed" || t.status === "Failed";
        return (
          <div
            key={t.id}
            className={`p-5 rounded-xl border border-white/10 flex flex-col justify-between transition-all ${
              t.status === "Completed"
                ? "bg-green-900/20 border-green-500/50"
                : t.status === "Failed"
                ? "bg-red-900/20 border-red-500/50"
                : "bg-gray-800/70"
            }`}
          >
            <div>
              <div className="flex justify-between items-start">
                <h3 className="text-white font-bold wrap-break-word pr-2">
                  {t.title}
                </h3>

                <span
                  className={`text-xs font-bold uppercase ${
                    t.status === "Completed"
                      ? "text-green-400"
                      : t.status === "Failed"
                      ? "text-red-400"
                      : t.status === "Active Task"
                      ? "text-cyan-400"
                      : "text-purple-400"
                  }`}
                >
                  {t.status}
                </span>
              </div>
              <p className="text-gray-400 text-sm mt-2 wrap-break-word">
                {t.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-4">
              {t.status === "New Task" && (
                <button
                  onClick={() => updateStatus(t.id, "Active Task")}
                  className="px-3 py-2 rounded text-sm font-bold flex-1 min-w-fit transition-all bg-cyan-500 hover:bg-cyan-600 text-white cursor-pointer"
                >
                  Accept Task
                </button>
              )}
              {t.status === "Active Task" && (
                <>
                  <button
                    onClick={() => updateStatus(t.id, "Completed")}
                    className={`px-3 py-2 rounded text-sm font-bold flex-1 min-w-fit transition-all bg-green-500 hover:bg-green-600 text-white cursor-pointer`}
                  >
                    Mark as Completed
                  </button>

                  <button
                    onClick={() => updateStatus(t.id, "Failed")}
                    className={`px-3 py-2 rounded text-sm font-bold flex-1 min-w-fit transition-all bg-red-500 hover:bg-red-600 text-white cursor-pointer`}
                  >
                    Mark as Failed
                  </button>
                </>
              )}
              {isDone && (
                <p className="text-sm text-gray-500 w-full text-center">
                  Task is final.
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TaskList;
