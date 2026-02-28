import React, { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router";

const Navbar = () => {

    const navigate = useNavigate();

    const [showMenu, setShowMenu] = useState(false);
    const [token, setToken] = useState(true);

  return (
    <div className="flex items-center justify-between text-sm py-4 border-b mb-5 border-b-gray-500">
      <div className="flex justify-left text-center items-center cursor-pointer">
        <img className="w-12" src={assets.logo} alt="" />
        <span className="font-semibold text-xl">Healthora</span>
      </div>
      <ul className="hidden md:flex items-start gap-5 font-medium">
        <NavLink to="/">
          {({ isActive }) => (
            <li className="py-1">
              HOME
              {isActive && (
                <hr className="border-none outline-none h-0.5 bg-[#1E3A8A] w-3/5 m-auto" />
              )}
            </li>
          )}
        </NavLink>

        <NavLink to="/doctors">
          {({ isActive }) => (
            <li className="py-1">
              ALL DOCTORS
              {isActive && (
                <hr className="border-none outline-none h-0.5 bg-[#1E3A8A] w-3/5 m-auto" />
              )}
            </li>
          )}
        </NavLink>

        <NavLink to="/about">
          {({ isActive }) => (
            <li className="py-1">
              ABOUT
              {isActive && (
                <hr className="border-none outline-none h-0.5 bg-[#1E3A8A] w-3/5 m-auto" />
              )}
            </li>
          )}
        </NavLink>

        <NavLink to="/contact">
          {({ isActive }) => (
            <li className="py-1">
              CONTACT
              {isActive && (
                <hr className="border-none outline-none h-0.5 bg-[#1E3A8A] w-3/5 m-auto" />
              )}
            </li>
          )}
        </NavLink>
      </ul>
      <div className="flex items-center gap-4">
       {
        token ? <div className="flex items-center gap-2 cursor-pointer group relative">
            <img className="w-8 rounded-full" src={assets.profile_pic} alt="" />
            <img className="w-2.5" src={assets.dropdown_icon} alt="" />
            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
                <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                    <p onClick={()=>navigate('my-profile')} className="hover:text-black cursor-pointer">My Profile</p>
                    <p onClick={()=>navigate('my-appointments')} className="hover:text-black cursor-pointer">My Appointments</p>
                    <p onClick={()=>setToken(false)} className="hover:text-black cursor-pointer">Logout</p>
                </div>
            </div>
        </div>
        :  <button onClick={()=>navigate('/login')} className="bg-[#1E3A8A] text-white px-8 py-3 rounded-full font-light hidden md:block cursor-pointer">
          Create Account
        </button>
       }
      </div>
    </div>
  );
};

export default Navbar;
