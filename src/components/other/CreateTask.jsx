import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDesc, setTaskDesc] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");

  const SubmitHandler = (e) => {
    e.preventDefault();
    if (!assignTo) {
      toast.error("Assign task to employee.", {
        style: {
          background: "#111827",
          color: "#fff",
          borderRadius: "12px",
          fontWeight: "600",
        },
      });
      return;
    } else {
      toast.success("Task created successfully!", {
        style: {
          background: "#111827",
          color: "#fff",
          borderRadius: "12px",
          fontWeight: "600",
        },
      });
    }
    const newTask = {
      id: crypto.randomUUID(),
      title: taskTitle,
      description: taskDesc,
      date: taskDate,
      category: category,
      status: "New Task",
    };

    setUserData((prevUserData) => {
      const updatedEmployees = prevUserData.map((emp) => {
        if (emp.name === assignTo) {
          return {
            ...emp,
            tasks: [...emp.tasks, newTask],
          };
        }
        return emp;
      });
      localStorage.setItem("employees", JSON.stringify(updatedEmployees));
      return updatedEmployees;
    });

    setTaskTitle("");
    setTaskDesc("");
    setTaskDate("");
    setAssignTo("");
    setCategory("");
  };

  return (
    <div className="w-full">
      <form
        onSubmit={SubmitHandler}
        className="flex flex-wrap w-full items-start justify-between p-8 bg-white/2 border border-white/10 backdrop-blur-md rounded-2xl shadow-2xl"
      >
        <div className="w-full lg:w-1/2 space-y-5">
          <div className="group">
            <label className="block mb-2 text-sm font-semibold text-gray-400 uppercase tracking-wider group-focus-within:text-blue-400 transition-colors">
              Task Title
            </label>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-xl text-white outline-none focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 transition-all placeholder:text-gray-600"
              type="text"
              placeholder="Ex: UI Design for Dashboard"
            />
          </div>

          <div className="flex gap-4">
            <div className="w-1/2 group">
              <label className="block mb-2 text-sm font-semibold text-gray-400 uppercase tracking-wider group-focus-within:text-blue-400 transition-colors">
                Date
              </label>
              <input
                value={taskDate}
                onChange={(e) => setTaskDate(e.target.value)}
                className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-xl text-white outline-none focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 transition-all [&::-webkit-calendar-picker-indicator]:invert"
                type="date"
              />
            </div>
            <div className="w-1/2 group">
              <label className="block mb-2 text-sm font-semibold text-gray-400 uppercase tracking-wider group-focus-within:text-blue-400 transition-colors">
                Category
              </label>
              <input
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-xl text-white outline-none focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 transition-all placeholder:text-gray-600"
                type="text"
                placeholder="Design, Dev, etc."
              />
            </div>
          </div>

          <div className="group">
            <label className="block mb-2 text-sm font-semibold text-gray-400 uppercase tracking-wider group-focus-within:text-blue-400 transition-colors">
              Assign To
            </label>
            <input
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-xl text-white outline-none focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 transition-all placeholder:text-gray-600"
              type="text"
              placeholder="Employee Name"
            />
          </div>
        </div>
        <div className="w-full lg:w-[45%] flex flex-col mt-6 lg:mt-0">
          <label className="block mb-2 text-sm font-semibold text-gray-400 uppercase tracking-wider">
            Description
          </label>
          <textarea
            value={taskDesc}
            onChange={(e) => setTaskDesc(e.target.value)}
            className="w-full h-56 px-4 py-3 bg-black/30 border border-white/10 rounded-xl text-white outline-none focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 transition-all resize-none placeholder:text-gray-600"
            placeholder="Detailed description of the task..."
          ></textarea>

          <button
            type="submit"
            className="w-full py-4 mt-6 bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold rounded-xl shadow-lg shadow-blue-500/20 active:scale-[0.98] transition-all duration-200 cursor-pointer"
          >
            Create Task
          </button>
        </div>
      </form>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default CreateTask;
