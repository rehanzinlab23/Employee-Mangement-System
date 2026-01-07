import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const TaskList = ({ employee }) => {
  const [userData, setUserData] = useContext(AuthContext);
  const currentEmployee = userData?.find((emp) => emp.id === employee.id);

  if (!currentEmployee || !currentEmployee.tasks.length) {
    return <p className="text-white">No tasks found.</p>;
  }

  const updateStatus = (index, status) => {
    const updatedEmployees = userData.map((emp) => {
      if (emp.id === employee.id) {
        const updatedTasks = emp.tasks.map((task, i) => {
          if (i === index) {
            if (task.completed || task.failed) return task;

            return {
              ...task,
              active: false,
              newTask: false,
              completed: status === "completed",
              failed: status === "failed",
            };
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
      {currentEmployee.tasks.map((t, index) => {
        const isDone = t.completed || t.failed;
        return (
          <div
            key={index}
            className={`p-5 rounded-xl border border-white/10 flex flex-col justify-between transition-all ${
              t.completed
                ? "bg-green-900/20 border-green-500/50"
                : t.failed
                ? "bg-red-900/20 border-red-500/50"
                : "bg-gray-800/70"
            }`}
          >
            <div>
              <div className="flex justify-between items-start">
                <h3 className="text-white font-bold wrap-break-word pr-2">
                  {t.title}
                </h3>

                {t.completed && (
                  <span className="text-green-400 text-xs font-bold uppercase">
                    Completed
                  </span>
                )}
                {t.failed && (
                  <span className="text-red-400 text-xs font-bold uppercase">
                    Failed
                  </span>
                )}
              </div>
              <p className="text-gray-400 text-sm mt-2 wrap-break-word">
                {t.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-4">
              <button
                disabled={isDone}
                onClick={() => updateStatus(index, "completed")}
                className={`px-3 py-2 rounded text-sm font-bold flex-1 min-w-fit transition-all ${
                  isDone
                    ? "bg-gray-700 text-gray-500 cursor-not-allowed"
                    : "bg-green-500 hover:bg-green-600 text-white cursor-pointer"
                }`}
              >
                {t.completed ? "Completed" : "Mark as Completed"}
              </button>

              <button
                disabled={isDone}
                onClick={() => updateStatus(index, "failed")}
                className={`px-3 py-2 rounded text-sm font-bold flex-1 min-w-fit transition-all ${
                  isDone
                    ? "bg-gray-700 text-gray-500 cursor-not-allowed"
                    : "bg-red-500 hover:bg-red-600 text-white cursor-pointer"
                }`}
              >
                {t.failed ? "Failed" : "Mark as Failed"}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TaskList;
