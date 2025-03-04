import React from "react";
import Sidebar from "./components/Sidebar";

const AdminPage = ({ children }) => {
  return (
    <div className="flex gap-5">
      <Sidebar />
      <main className="max-w-5xl flex-1 ml-72 py-4">{children}</main>
    </div>
  );
};

export default AdminPage;
