import React, { useState } from "react";
import Hamburger from "hamburger-react";

function navbar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div>
        <header>
          <input
            type="checkbox"
            name="hbr"
            id="hbr"
            className="hbr peer"
            hidden
            aria-hidden="true"
          />
          <nav className="fixed z-20 w-full bg-white/80 :bg-gray-900/80 backdrop-blur navbar shadow-md shadow-gray-600/5 peer-checked:navbar-active md:relative md:bg-transparent :shadow-none">
            <div className="xl:container m-auto px-6 md:px-12">
              <div className="flex flex-wrap items-center justify-between gap-6 md:py-3 md:gap-0">
                <div className="w-full flex justify-between lg:w-auto">
                  <a
                    href="/"
                    aria-label="logo"
                    className="flex space-x-2 items-center"
                  >
                    {/* <div aria-hidden="true" className="flex space-x-1">
                      <div className="h-4 w-4 rounded-full bg-gray-900 :bg-gray-200"></div>
                      <div className="h-6 w-2 bg-indigo-500 "></div>
                    </div> */}
                    <span className="text-indigo-600 text-3xl font-bold leading-8">
                      W
                      <span className=" text-xl font-bold text-gray-600 ">
                        ayfinder.
                      </span>
                    </span>
                  </a>
                </div>
                <div className="navmenu hidden w-full flex-wrap justify-end items-center mb-16 space-y-8 p-6 border border-gray-100 rounded-3xl shadow-2xl shadow-gray-300/20 bg-white :bg-gray-800 lg:space-y-0 lg:p-0 lg:m-0 lg:flex md:flex-nowrap lg:bg-transparent lg:w-7/12 lg:shadow-none :shadow-none :border-gray-700 lg:border-0">
                  <div className="text-gray-600 :text-gray-300 lg:pr-4">
                    <ul className="space-y-6 tracking-wide font-medium text-base lg:text-sm lg:flex lg:space-y-0">
                      <li>
                        <a
                          href="/"
                          className="block md:px-4 transition hover:text-indigo-500"
                        >
                          <span>Home</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          className="block md:px-4 transition hover:text-indigo-500"
                        >
                          <span>Portfolio</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          className="block md:px-4 transition hover:text-indigo-500"
                        >
                          <span>Services</span>
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="w-full space-y-2 border-indigo-500 :border-gray-700 flex flex-col -ml-1 sm:flex-row lg:space-y-0 md:w-max lg:border-l">
                    <a
                      href="/"
                      className="relative flex h-9 ml-auto items-center justify-center sm:px-6 before:absolute before:inset-0 before:rounded-full focus:before:bg-indigo-500 :focus:before:bg-indigo-500 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
                    >
                      <span className="relative text-sm font-semibold text-indigo-500">
                        Sign Up
                      </span>
                    </a>
                    <a
                      href="/"
                      className="relative flex h-9 ml-auto items-center justify-center sm:px-6 before:absolute before:inset-0 before:rounded-full before:bg-indigo-500  before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
                    >
                      <span className="relative text-sm font-semibold text-white :text-gray-900">
                        Login
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
}

export default navbar;
