import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Admin = () => {
  return (
    <div className="min-h-screen bg-black text-white flex">
      
      {/* Sidebar */}
      <aside className="w-64 bg-[#0f0f0f] border-r border-gray-800 p-6 hidden md:flex flex-col">
        <h2 className="text-2xl font-bold mb-10">Admin Panel</h2>

        <nav className="flex flex-col gap-3">
          <NavLink
            to="/admin"
            end
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg transition ${
                isActive
                  ? "bg-gradient-to-r from-purple-600 to-blue-600"
                  : "hover:bg-[#1a1a1a]"
              }`
            }
          >
            Projects
          </NavLink>

          <NavLink
            to="/admin/blogs"
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg transition ${
                isActive
                  ? "bg-gradient-to-r from-purple-600 to-blue-600"
                  : "hover:bg-[#1a1a1a]"
              }`
            }
          >
            Blogs
          </NavLink>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-10">
        <Outlet />
      </main>
    </div>
  );
};

export default Admin;