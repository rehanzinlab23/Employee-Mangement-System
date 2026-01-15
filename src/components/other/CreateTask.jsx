import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDesc, setTaskDesc] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");

  const SubmitHandler = (e) => {
    e.preventDefault();
    const newTask = {
      id: Date.now(),
      title: taskTitle,
      description: taskDesc,
      date: taskDate,
      category: category,
      status: "New Task",
    };
    const updatedEmployees = userData.map((emp) => {
      if (emp.name === assignTo) {
        return {
          ...emp,
          tasks: [...emp.tasks, newTask],
        };
      }
      return emp;
    });
    setUserData(updatedEmployees);
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
    setTaskTitle("");
    setTaskDesc("");
    setTaskDate("");
    setAssignTo("");
    setCategory("");
  };

  return (
    <div>
      <form
        onSubmit={SubmitHandler}
        className="flex w-full flex-wrap items-start justify-between p-6 bg-linear-to-br from-[#0b0f1a]/90 via-[#11162a]/80 to-[#0a0d18]/90
        rounded-2xl border border-white/10 backdrop-blur-xl shadow-[0_0_80px_rgba(128,0,255,0.15)]"
      >
        <div className="w-1/2">
          <div>
            <h3 className="mb-3 mt-4 text-[20px] font-medium text-gray-300">
              Task Title
            </h3>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              type="text"
              placeholder="Make a UI Design"
              className="w-full px-4 py-3 bg-gray-800/60 border border-gray-700 rounded-xl text-gray-100"
            />
          </div>

          <div>
            <h3 className="mb-3 mt-4 text-[20px] font-medium text-gray-300">
              Date
            </h3>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              type="date"
              className="w-full px-4 py-3 bg-gray-800/60 border border-gray-700 rounded-xl
             [&::-webkit-datetime-edit]:text-gray-400
             [&:focus::-webkit-datetime-edit]:text-gray-100
             focus:outline-none focus:ring-2 focus:ring-purple-500 transition
             [&::-webkit-calendar-picker-indicator]:invert
             [&::-webkit-calendar-picker-indicator]:opacity-80
             [&::-webkit-calendar-picker-indicator]:cursor-pointer"
            />
          </div>

          <div>
            <h3 className="mb-3 mt-4 text-[20px] font-medium text-gray-300">
              Assign To
            </h3>
            <input
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              type="text"
              placeholder="Employee Name (exact)"
              className="w-full px-4 py-3 bg-gray-800/60 border border-gray-700 rounded-xl text-gray-100"
            />
          </div>

          <div>
            <h3 className="mb-3 mt-4 text-[20px] font-medium text-gray-300">
              Category
            </h3>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              type="text"
              placeholder="design, dev, etc"
              className="w-full px-4 py-3 bg-gray-800/60 border border-gray-700 rounded-xl text-gray-100"
            />
          </div>
        </div>

        <div className="w-2/5 flex flex-col">
          <h3 className="mb-3 text-[20px] font-medium text-gray-300">
            Description
          </h3>
          <textarea
            value={taskDesc}
            onChange={(e) => setTaskDesc(e.target.value)}
            rows={10}
            className="w-full px-4 py-2 bg-gray-800/60 border border-gray-700 rounded text-gray-100"
          ></textarea>

          <button
            type="submit"
            className="w-full py-3 mt-8 bg-linear-to-r from-purple-600 to-cyan-500 text-white font-semibold rounded-xl cursor-pointer"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
