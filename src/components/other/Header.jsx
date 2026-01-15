const Header = ({ data, changeUser }) => {
  const LoggedOutUser = () => {
    localStorage.setItem("loggedInUser", "");
    changeUser("");
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="h-12 w-12 rounded-full bg-linear-to-tr from-purple-600 to-blue-500 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-purple-500/20">
          {(data?.name || "A").charAt(0)}
        </div>
        <div>
          <h1 className="text-gray-400 text-sm font-medium tracking-wide uppercase">
            Welcome back,
          </h1>
          <div className="text-2xl font-bold text-white leading-tight">
            {data?.name || "Admin"} <span className="animate-pulse">👋</span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div className="hidden md:block text-right">
          <p className="text-xs text-gray-500 font-medium">System Status</p>
          <p className="text-xs text-emerald-400 flex items-center gap-1 justify-end">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>{" "}
            Online
          </p>
        </div>

        <button
          onClick={LoggedOutUser}
          className="px-6 py-2.5 bg-white/5 hover:bg-red-500/10 border border-white/10 hover:border-red-500/50 text-white hover:text-red-500 font-medium rounded-xl transition-all duration-300 active:scale-95 cursor-pointer shadow-sm whitespace-nowrap"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Header;
