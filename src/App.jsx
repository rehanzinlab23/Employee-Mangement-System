import { useContext, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Login from "./components/Auth/Login";
import EmployeeDashBord from "./components/DashBoard/EmployeeDashBord";
import AdminDashBoard from "./components/DashBoard/AdminDashBoard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);

  const [userData, setUserData] = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data);
    }
  }, []);

  useEffect(() => {
    if (user === "employee" && userData && loggedInUserData) {
      const updatedLoggedInUserData = userData.find(
        (emp) => emp.id === loggedInUserData.id
      );
      if (updatedLoggedInUserData) {
        setLoggedInUserData(updatedLoggedInUserData);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: updatedLoggedInUserData })
        );
      }
    }
  }, [userData]);

  const handleLogin = (email, password) => {
    if (email == "admin@example.com" && password == 123) {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
      toast.success("Logged in successfully!", {
        style: {
          background: "#111827",
          color: "#fff",
          borderRadius: "12px",
          fontWeight: "600",
        },
      });
    } else if (userData) {
      const employee = userData.find(
        (e) => email == e.email && e.password == password
      );
      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee })
        );
        toast.success("Logged in successfully!", {
          style: {
            background: "#111827",
            color: "#fff",
            borderRadius: "12px",
            fontWeight: "600",
          },
        });
      } else {
        toast.error("Invalid email or password!.", {
          style: {
            background: "#111827",
            color: "#fff",
            borderRadius: "12px",
            fontWeight: "600",
          },
        });
      }
    } else {
      toast.error("Invalid email or password!.", {
        style: {
          background: "#111827",
          color: "#fff",
          borderRadius: "12px",
          fontWeight: "600",
        },
      });
    }
  };

  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user === "admin" ? (
        <AdminDashBoard changeUser={setUser} />
      ) : user === "employee" ? (
        <EmployeeDashBord data={loggedInUserData} changeUser={setUser} />
      ) : null}
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};

export default App;
