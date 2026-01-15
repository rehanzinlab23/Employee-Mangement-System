const Header = ({ data, changeUser }) => {
  const LoggedOutUser = () => {
    localStorage.setItem("loggedInUser", "");
    changeUser("");
  };

  return (
    <div className="flex items-center justify-between gap-6">
      <div>
        <h1 className="text-white text-2xl font-medium">Hello,</h1>
        <div className="text-3xl font-semibold text-white/95">
          <span>{data?.name || "Admin"}👋</span>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-md"></div>
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={LoggedOutUser}
          type="submit"
          className="w-full py-3 px-4 bg-linear-to-r from-purple-600 to-cyan-500 text-white font-semibold rounded-xl shadow-lg cursor-pointer whitespace-nowrap"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Header;
