const TaskListNumber = ({ data }) => {
  const tasksData = [
    {
      num: data.tasks.filter((task) => task.status === "New Task").length,
      heading: "New Task",
      accent: "from-purple-600 to-indigo-500",
    },
    {
      num: data.tasks.filter((task) => task.status === "Completed").length,
      heading: "Completed Task",
      accent: "bg-gray-800/60",
    },
    {
      num: data.tasks.filter((task) => task.status === "Active Task").length,
      heading: "Accepted Task",
      accent: "from-blue-400 to-cyan-500",
    },
    {
      num: data.tasks.filter((task) => task.status === "Failed").length,
      heading: "Failed Task",
      accent: "from-red-400 to-red-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
      {tasksData.map((data) => (
        <div
          key={data.heading}
          className={`group p-5 rounded-xl border border-gray-800/60 flex flex-col gap-3 justify-between bg-linear-to-br ${data.accent} backdrop-blur-md transition-all duration-300 ease-out
  hover:-translate-y-2 hover:scale-[1.02]
  hover:shadow-[0_20px_80px_rgba(128,0,255,0.35)]`}
        >
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-3xl font-bold text-white">{data.num}</h2>
              <h3 className="text-sm text-gray-200/80">{data.heading}</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskListNumber;
