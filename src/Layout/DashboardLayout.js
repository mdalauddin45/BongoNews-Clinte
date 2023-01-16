import React, { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router";
import { getRole } from "../api/auth";
import Menubar from "../Components/Dashboard/Menubar";
import { AuthContext } from "../Contexts/AuthProvider/AuthProvider";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    getRole(user?.email).then((data) => {
      setRole(data);
      setLoading(false);
    });
  }, [user]);
  console.log(role);
  // useEffect(() => {
  //   fetch(`http://localhost:5000/user/${user?.email}`)
  //     .then((res) => res.json())
  //     .then((data) => setRole(data));
  // }, []);
  // console.log(role);
  return (
    <div className="relative min-h-screen md:flex lg:flex    lg:py-20  ">
      <Menubar role={role}></Menubar>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
