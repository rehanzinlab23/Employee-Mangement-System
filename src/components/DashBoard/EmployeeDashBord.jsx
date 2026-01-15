import Header from "../other/Header";
import TaskListNumber from "../other/TaskListNumber";
import TaskList from "../Tasklist/TaskList";

const EmployeeDashBord = (props) => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-emerald-500/30">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-emerald-900/10 blur-[120px]" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-blue-900/10 blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-8 md:px-10">
        <header className="mb-10 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-xl">
          <Header data={props.data} changeUser={props.changeUser} />
        </header>

        <main className="space-y-10">
          {/* Stats Section */}
          <section className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="text-sm font-medium text-gray-400 uppercase tracking-widest mb-4 ml-1">
              Task Overview
            </h2>
            <TaskListNumber data={props.data} />
          </section>

          {/* Task List Section */}
          <section className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="flex items-center justify-between mb-4 ml-1">
              <h2 className="text-sm font-medium text-gray-400 uppercase tracking-widest">
                Active Tasks
              </h2>
              <span className="px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs border border-emerald-500/20">
                Live Updates
              </span>
            </div>
            <div className="rounded-2xl bg-white/2 border border-white/5 p-2">
              <TaskList employee={props.data} />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default EmployeeDashBord;
