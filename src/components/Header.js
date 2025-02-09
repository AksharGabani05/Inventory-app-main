import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
      setUserRole(currentUser.role);
    }
  }, []);

  return (
    <header className="bg-white text-black shadow-md">
      <nav className="container mx-auto p-6 flex justify-between items-center">
       
        <Link to="/" className="text-4xl font-bold hover:text-orange-400 transition duration-300">
          inventaryApp
        </Link>

      
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
              />
            </svg>
          </button>
        </div>

        
        <ul className="hidden lg:flex items-center space-x-8 text-lg font-medium">
          <li>
            <Link to="/products" className="hover:text-orange-400 transition duration-300">
              Products
            </Link>
          </li>
          <li>
            <Link to="/cart" className="hover:text-orange-400 transition duration-300">
              Cart
            </Link>
          </li>
          
          {userRole === 'admin' && (
            <li>
              <Link to="/admin" className="hover:text-orange-400 transition duration-300">
                Admin Panel
              </Link>
            </li>
          )}
          <li>
            <button
              onClick={() => {
                localStorage.removeItem('currentUser');
                window.location.href = '/';
              }}
              className="hover:text-red-400 transition duration-300"
            >
              Logout
            </button>
          </li>
        </ul>
      </nav>

  
      {isOpen && (
        <ul className="lg:hidden bg-white text-black shadow-md rounded-md space-y-4 p-6 absolute top-16 left-0 right-0 z-50">
          <li>
            <Link to="/products" className="block hover:text-orange-400 transition">
              Products
            </Link>
          </li>
          <li>
            <Link to="/cart" className="block hover:text-orange-400 transition">
              Cart
            </Link>
          </li>
          
          
          {userRole === 'admin' && (
            <li>
              <Link to="/admin" className="block hover:text-orange-400 transition">
                Admin Panel
              </Link>
            </li>
          )}
          <li>
            <button
              onClick={() => {
                localStorage.removeItem('currentUser');
                window.location.href = '/';
              }}
              className="block hover:text-red-400 transition"
            >
              Logout
            </button>
          </li>
        </ul>
      )}
    </header>
  );
}

export default Header;
