import React, { useState } from "react";
// import Sidebar from "./components/Sidebar";
import Sidebar2 from "./components/Sidebar2";

const AdminPage = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex gap-5">
      <Sidebar2 />
      <main className="max-w-5xl flex-1 ml-72 py-4">{children}</main>
      {/* <main className={`max-w-5xl flex-1 py-6 ${!isOpen ? "ml-72" : "ml-32"}}`}>
        {children}
      </main> */}
    </div>
  );
};

export default AdminPage;
