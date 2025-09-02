import React, { useEffect, useState } from "react";
import { Link } from "react-router";

export const Header = () => {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLogged(true);
    }
  }, []);
 
    if (localStorage.getItem("token")) {
      const userInfo = JSON.parse(localStorage.getItem("userInfo"))
      setUser(false);
    }

   if(localStorage.removeItem("userInfo")) {

   }
    const logout = () => {
   
  };
  return (
    <div>
      <header className="flex justify-between items-center px-6 py-4 bg-white shadow">
        <h1 className="text-xl font-bold">alemhelp</h1>
        {isLogged ? (
          <div>
            <span>Hello</span>
            <button
              onClick={logout}
              className="bg-gray-100 px-4 py-2 rounded border hover:bg-gray-200"
            >
              Logout
            </button>
          </div>
        ) : (
          <div>
            <Link
              to={"/signup"}
              className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-600"
            >
              Register
            </Link>
            <Link
              to={"/login"}
              className="bg-gray-100 px-4 py-2 rounded border hover:bg-gray-200"
            >
              Login
            </Link>
          </div>
        )}
      </header>
    </div>
  );
};
