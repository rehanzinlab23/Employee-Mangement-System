import React from "react";
import Header from "../other/Header";
import TaskListNumber from "../other/TaskListNumber";
import TaskList from "../Tasklist/TaskList";

const EmployeeDashBord = (props) => {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-gray-950 to-black p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-6">
          <Header data={props.data} changeUser={props.changeUser} />
        </header>

        <section className="mb-6">
          <TaskListNumber data={props.data} />
        </section>

        <section className="mt-6">
          <TaskList employee={props.data} />
        </section>
      </div>
    </div>
  );
};

export default EmployeeDashBord;
