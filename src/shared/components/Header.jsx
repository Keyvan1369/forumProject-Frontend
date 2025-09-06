import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { login } from "../../redux/slice/authSlice";

export const Header = () => {
  /* const [isLogged, setIsLogged] = useState(false); */
  const isLogged = useSelector((state)=>state.authReducer.isLogged)
  const [user, setUser] = useState(null);
  const dispatcher = useDispatch()

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
     /*  setIsLogged(true); */
     
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));
      if (userInfo) {
        dispatcher(login(userInfo))
        
      }
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userInfo");
 /*    setIsLogged(false); */
 dispatcher(logout())
    
  };

  return (
    <div>
      <header className="flex justify-between items-center px-6 py-4 bg-white shadow">
        <h1 className="text-xl font-bold">alemhelp</h1>
        {isLogged ? (
          <div>
            <span className="me-3">Hello {user.username}</span>
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
