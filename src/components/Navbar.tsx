import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <nav className='sticky top-0 z-20 border-b backdrop-blur-lg border-b-white/20 bg-gradient-to-br from-[#1B2C48] via-[#08172A] to-[#08172A]'>
      <div className='container mx-auto max-w-7xl flex justify-between items-center py-4 px-10'>
        <Link to={"/"} className='flex justify-center items-center gap-4'>
          <img src='./logo-white.png' className='h-20' alt='Logo' />
          <p className='logo-title text-white uppercase font-medium font-sans'>
            Thapar Polytechnic College
            <br />
            Patiala
          </p>
        </Link>

        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className='text-white xl:hidden'>
          <Menu className='w-8 h-8' />
        </button>

        <ul className='hidden xl:flex space-x-4 items-center'>
          {[
            { name: "HOME", path: "/" },
            { name: "ABOUT", path: "/about" },
            { name: "AGENDA", path: "/agenda" },
            { name: "VOICES OF INSPIRATION", path: "/speakers" },
            { name: "Wisdom Bites", path: "/wisdom-bites" },
          ].map((item) => (
            <li key={item.path} className='px-3 content-center relative'>
              <Link
                to={item.path}
                className={`uppercase text-white relative inline-block pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[4px] after:w-full after:rounded-sm ${location.pathname === item.path
                  ? "after:bg-gradient-to-r after:from-[#013E7D] after:to-[#985D9B]"
                  : "after:bg-transparent hover:after:bg-white/20 after:transition-opacity after:duration-300"
                  }`}>
                {item.name}
              </Link>
            </li>
          ))}
          <li className='content-center'>
            <Link
              to='https://docs.google.com/forms/d/e/1FAIpQLSf1MfY8H_wI_NBAeV1-wRQ_I5MzYGH88I9S-qBoG2POeg6WEA/viewform'
              target='_blank'
              className='px-5 py-3 font-semibold bg-gradient-to-br from-[#2073c6] via-[#07386a] to-[#985D9B] text-white rounded-md hover:from-[#2274c6] hover:via-[#062e56] hover:to-[#935496]'>
              Register Now
            </Link>
          </li>
        </ul>
      </div>

      {/* Sidebar for small screens */}
      {isSidebarOpen && (
        <div className='fixed top-0 left-0 h-screen w-full backdrop-blur-lg  bg-gradient-to-br from-[#1B2C48] via-[#08172A] to-[#08172A] text-white xl:hidden'>
          <div className='flex justify-between items-center p-4 border-b border-white/20'>
            <span className='text-lg font-semibold'>Menu</span>
            <button onClick={closeSidebar} className='text-white'>
              <X className='w-6 h-6' />
            </button>
          </div>
          <ul className='p-4 space-y-4'>
            {[
              { name: "HOME", path: "/" },
              { name: "ABOUT", path: "/about" },
              { name: "AGENDA", path: "/agenda" },
              { name: "VOICES OF INSPIRATION", path: "/speakers" },
              { name: "Wisdom Bites", path: "/wisdom-bites" },
            ].map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`uppercase block py-2 px-4 rounded hover:bg-white/20 ${location.pathname === item.path ? "bg-white/30" : ""
                    }`}
                  onClick={closeSidebar}>
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to='https://docs.google.com/forms/d/e/1FAIpQLSf1MfY8H_wI_NBAeV1-wRQ_I5MzYGH88I9S-qBoG2POeg6WEA/viewform'
                target='_blank'
                className='block py-3 px-4 bg-gradient-to-r from-[#2073c6] via-[#07386a] to-[#985D9B] text-white rounded-md hover:from-[#2274c6] hover:via-[#062e56] hover:to-[#935496]'
                onClick={closeSidebar}>
                Register Now
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
