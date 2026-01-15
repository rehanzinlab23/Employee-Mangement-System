import Header from "../other/Header";
import CreateTask from "../other/CreateTask";
import AllTask from "../other/AllTask";

const AdminDashBoard = (props) => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-blue-500/30">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[35%] h-[35%] rounded-full bg-blue-600/10 blur-[100px]" />
        <div className="absolute bottom-[5%] left-[-5%] w-[30%] h-[30%] rounded-full bg-purple-600/10 blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-8 md:px-10">
        <header className="mb-8 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg shadow-2xl">
          <Header changeUser={props.changeUser} />
        </header>

        <main className="grid grid-cols-1 gap-8">
          <section className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center gap-3 mb-4 ml-1">
              <div className="h-4 w-1 bg-blue-500 rounded-full"></div>
              <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-widest">
                Task Management
              </h2>
            </div>
            <div className="bg-white/3 border border-white/10 rounded-2xl p-2 shadow-inner">
              <CreateTask />
            </div>
          </section>
          <section className="animate-in fade-in slide-in-from-bottom-6 duration-700">
            <div className="flex items-center justify-between mb-4 ml-1">
              <div className="flex items-center gap-3">
                <div className="h-4 w-1 bg-purple-500 rounded-full"></div>
                <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-widest">
                  Employee Database
                </h2>
              </div>
              <span className="text-[10px] bg-white/10 px-2 py-1 rounded border border-white/10 text-gray-400">
                ADMIN ACCESS ONLY
              </span>
            </div>

            <div className="bg-white/2 border border-white/5 rounded-2xl overflow-hidden shadow-lg">
              <AllTask />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default AdminDashBoard;
