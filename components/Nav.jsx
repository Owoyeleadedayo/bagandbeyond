"use client"
import React, { useState } from 'react';
import { HiBars3 } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { LiaTimesSolid } from "react-icons/lia";
import Link from "next/link";
import Search from './Search';

const Nav = () => {
  const [nav, setNav] = useState(false); 
  const [showDropdown, setShowDropDown] = useState(false)
  return (
    <nav className="shadow-lg pb-2  top-0 left-0 right-0  w-full z-[100]">
      <div className="lg:flex justify-between items-center mt-5 md:px-[100px] px-4 hidden">
        <div className="md:block hidden" />
        <div className="flex justify-center items-center">
          <p className="md:text-[38px] text-[24px] font-primary">
            Bag & Beyond
          </p>
        </div>
        <div className="md:pl[20px]">
          <button type="button" className="black_btn font-Quick">
            Sign In
          </button>
        </div>
      </div>
      <div className="lg:flex justify-between items-center md:px-[100px] px-4 pt-4 md:my-6 cursor-pointer hidden">
        <Search />
        <div className="flex-1 justify-center mr-20 px-18">
          <ul className="flex justify-center gap-4 items-center nav_menu">
            <li className="text-xl font-Rale font-semibold transition ease-in delay-400">
              <Link href="/Home" className="text-gray-700 hover:text-black">
                Home
              </Link>
            </li>
            <li className="text-xl font-Rale font-semibold">
              <Link href="/BackPack" className="text-gray-700 hover:text-black">
                BackPack
              </Link>
            </li>
            <li className="text-xl font-Rale font-semibold">
              <Link
                href="/MessengerBag"
                className="text-gray-700 hover:text-black"
              >
                Messenger-Bags
              </Link>
            </li>
            <li className="text-xl font-Rale font-semibold">
              <Link href="/Totes" className="text-gray-700 hover:text-black">
                Totes
              </Link>
            </li>
            <li className="text-xl font-Rale font-semibold">
              <Link
                href="/BriefCase"
                className="text-gray-700 hover:text-black"
              >
                BriefCase
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center">
          <p className="text-xl font-Rale font-semibold">cart</p>
          <span className="round_btn px-4 md:mx-2">0</span>
        </div>
      </div>
      <div className="lg:hidden">
        <div className="flex px-4 justify-between items-center">
          <p className="text-[20px] font-primary">Bag & Beyond</p>
          <div
            className="flex justify-center items-center gap-2"
            onClick={() => setShowDropDown(!showDropdown)}
          >
            <CiSearch />
            {showDropdown ? <LiaTimesSolid /> : <HiBars3 />}
          </div>
        </div>
        {showDropdown && (
          <div className="w-full h-auto">
            <ul className="mt-4 px-4">
              <li className="text-md  font-Rale font-semibold py-2">
                <Link href="/Home">Home</Link>
              </li>
              <li className="text-md  font-Rale font-semibold py-2">
                <Link href="/BackPack">BackPack</Link>
              </li>
              <li className="text-md  font-Rale font-semibold py-2">
                <Link href="/MessengerBag">Messenger-Bags</Link>
              </li>
              <li className="text-md  font-Rale font-semibold py-2">
                <Link href="/Totes">Totes</Link>
              </li>
              <li className="text-md  font-Rale font-semibold py-2">
                <Link href="/BriefCase">BriefCase</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Nav
