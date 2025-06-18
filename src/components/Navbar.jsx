import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b shadow-md">
        <div className="flex justify-between items-center px-4 py-2">
          <span className="text-lg font-bold tracking-tight">Memorise</span>
          <div className="flex space-x-4">
            <Link to="/albums" className="text-gray-700 hover:text-blue-500">
              Album
            </Link>
            <Link to="/file-input" className="text-gray-700 hover:text-blue-500">
              File Input
            </Link>
          </div>
        </div>
      </nav>
      <div className="pt-14"> {/* 56px если nav ~14 (tailwind pt-14) */}
        {/* основной контент */}
      </div>
    </>
  );
};

export default Navbar;