import React from "react";
import Header from "../other/Header";
import CreateTask from "../other/CreateTask";
import AllTask from "../other/AllTask";

const AdminDashBoard = (props) => {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-gray-950 to-black p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-6">
          <Header changeUser={props.changeUser} />
        </header>
        <CreateTask />
        <AllTask />
      </div>
    </div>
  );
};

export default AdminDashBoard;
