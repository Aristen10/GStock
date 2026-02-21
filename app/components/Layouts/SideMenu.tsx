
import React, { useContext } from "react";
import { LuHandCoins, LuLayoutDashboard, LuLogOut, LuWalletMinimal } from "react-icons/lu";


const SideMenu = ({ onClose }) => {
 
   const SIDE_MENU_DATA = [
  {
    id: "01",
    label: "Dashboard",
    icon: LuLayoutDashboard,
    path: "/dashboard",
  },
  {
    id: "02",
    label: "Income",
    icon: LuWalletMinimal,
    path: "/income",
  },
  {
    id: "03",
    label: "Expense",
    icon: LuHandCoins,
    path: "/expense",
  },
  {
    id: "06",
    label: "Logout",
    icon: LuLogOut,
    path: "logout",
  },
];
 
  

  return (
    <div className="w-64 h-full bg-white border-r border-gray-200 p-5 z-10 sticky">
      {SIDE_MENU_DATA.map((item, index) => {
        const isActive = location.pathname === item.path;

        return (
          <button
            key={index}
            onClick={() => handleClick(item.path)}
            className={`w-full flex items-center gap-4 text-sm py-3 px-5 rounded-lg mb-2 transition
              ${
                isActive
                  ? "bg-green-700 text-white"
                  : "text-slate-600 hover:bg-green-100 hover:text-green-700"
              }
            `}
          >
            <item.icon className="text-lg" />
            {item.label}
          </button>
        );
      })}
    </div>
  );
};

export default SideMenu;
