const TaskListNumber = ({ data }) => {
  const tasksData = [
    {
      num: data.tasks[0].newTask,
      heading: "New Task",
      accent: "from-purple-600 to-indigo-500",
    },
    {
      num: data.tasks[0].completed,
      heading: "Completed Task",
      accent: "bg-gray-800/60",
    },
    {
      num: data.tasks[0].active,
      heading: "Accepted Task",
      accent: "from-blue-400 to-cyan-500",
    },
    {
      num: data.tasks[0].failed,
      heading: "Failed Task",
      accent: "from-red-400 to-red-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
      {tasksData.map((data) => (
        <div
          key={data.num}
          className={`group p-5 rounded-xl shadow-md border border-gray-800/60 flex flex-col gap-3 justify-between bg-linear-to-br ${data.accent} hover:scale-[1.02] transition-transform`}
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
