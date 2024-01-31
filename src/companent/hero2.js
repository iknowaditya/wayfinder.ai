import React, { useState, useEffect } from "react";
import { Popover } from "@headlessui/react";

// icons/illus importing..
import { MdOutlineEditLocation } from "react-icons/md";
import { RiSearch2Line } from "react-icons/ri";
import { HiMiniCalendarDays } from "react-icons/hi2";
import { MdOutlineClose } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
import { IoChevronDown } from "react-icons/io5";

// images importing..
import illu from "../assets/bg-illu.svg";
import img1 from "../assets/airbnb.svg";
import img2 from "../assets/amex.svg";
import img3 from "../assets/book.svg";
import img4 from "../assets/forbes.svg";

function hero2() {
  const [selectedDays, setSelectedDays] = useState(0);
  const [inputValue, setInputValue] = useState("");
  // const [autocompleteResults, setAutocompleteResults] = useState([]);

  // useEffect(() => {
  //   // Fetch autocomplete results when inputValue changes
  //   if (inputValue.trim() !== "") {
  //     const api_key = "ge-5cc35bc75a998bab";
  //     const url = `https://api.geocode.earth/v1/autocomplete?api_key=${api_key}&text=${inputValue}`;

  //     fetch(url, {
  //       method: "GET",
  //       headers: {
  //         Accept: "application/json",
  //       },
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         // Process the data and set autocompleteResults
  //         setAutocompleteResults(data.features);
  //       })
  //       .catch((error) => console.error("Error:", error));
  //   } else {
  //     // Clear autocomplete results when inputValue is empty
  //     setAutocompleteResults([]);
  //   }
  // }, [inputValue]);

  // // places result selection options..
  // const handleResultSelect = (result) => {
  //   // Clear autocomplete results
  //   setAutocompleteResults([]);

  //   // Update inputValue
  //   setInputValue(result.properties.label);
  // };

  ////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////

  // counter increment & decrement functionality..
  const incrementCounter = () => {
    if (selectedDays < 10) {
      setSelectedDays((prevDays) => prevDays + 1);
    }
  };

  const decrementCounter = () => {
    if (selectedDays > 0) {
      setSelectedDays((prevDays) => prevDays - 1);
    }
  };

  // input value change functionality..
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // clear input value functionality..
  const handleClearInput = () => {
    setInputValue("");
  };

  return (
    <div>
      <div className="pt-32 md:py-12 xl:container m-auto px-6 md:px-12 ">
        <div
          aria-hidden="true"
          className="absolute inset-0 my-auto w-96 h-32 rotate-45 bg-gradient-to-r from-indigo-500 to-secondaryLight blur-3xl opacity-50 :opacity-20"
        ></div>
        <div className="relative lg:flex lg:items-center lg:gap-12">
          <div className="text-center lg:text-left md:mt-12 lg:mt-0 sm:w-10/12 md:w-2/3 sm:mx-auto lg:mr-auto lg:w-6/12">
            <h1 className="text-gray-900 font-bold text-4xl md:text-6xl lg:text-5xl xl:text-6xl :text-white">
              Let AI Design Your Travel{" "}
              <span className="text-indigo-500">Itinerary.</span>
            </h1>
            <p className="mt-8 text-gray-600 :text-gray-300">
              Discover a new era of travel planning with AI precision. Our
              algorithms craft itineraries personalized to your preferences,
              revealing unique experiences and local treasures. Start your
              AI-guided journey with Wayfinder.
            </p>
            <div>
              {/* Search form for destination and days */}
              <form action="" className="w-full  mt-12">
                <div className="relative flex items-center px-2 p-1 rounded-full bg-white :bg-gray-900 border :border-gray-700 border-indigo-500 shadow-md md:p-2 lg:pr-3 ">
                  {/* destination icons */}
                  <div className="pl-2 py-3 ">
                    <MdOutlineEditLocation className="h-6 w-6 m-auto fill-blue-900/60 " />
                  </div>

                  {/* Input for destination */}
                  <div className="relative w-full">
                    <input
                      autoComplete="destination"
                      placeholder="Desired destination"
                      className="w-full p-4 border focus:outline outline-neutral-400 border-neutral-300 rounded-full placeholder-gray-600  bg-transparent"
                      type="destination"
                      value={inputValue}
                      onChange={handleInputChange}
                    />

                    {inputValue && (
                      <button
                        className="absolute top-1/2 right-4 transform -translate-y-1/2 "
                        onClick={handleClearInput}
                      >
                        <MdOutlineClose className="text-xl text-neutral-600 hover:text-neutral-950 border border-neutral-800 rounded-full" />
                      </button>
                    )}

                    {/* Autocomplete results */}
                    {/* {autocompleteResults.length > 0 && (
                      <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-md shadow-lg">
                        {autocompleteResults.slice(0, 5).map((result) => (
                          <li
                            key={result.properties.id}
                            className={`px-4 py-2 hover:bg-gray-100 cursor-pointer ${
                              result.selected ? "bg-blue-500 text-white" : ""
                            }`}
                            onClick={() => handleResultSelect(result)}
                          >
                            {result.properties.layer === "country" ? (
                              <span className="font-bold text-blue-500">
                                {result.properties.label}
                              </span>
                            ) : result.properties.layer === "region" ? (
                              <span className="font-semibold text-green-500">
                                {result.properties.label}
                              </span>
                            ) : (
                              <span className="text-pink-500">
                               
                                {result.properties.label}
                              </span>
                            )}
                          </li>
                        ))}
                      </ul>
                    )} */}
                  </div>

                  {/* Days icons */}
                  <div className="pl-2 py-3 mr-1">
                    <HiMiniCalendarDays className="h-6 w-6 m-auto fill-blue-900/60 " />
                  </div>

                  {/* Popover for selecting days */}
                  <Popover className="relative w-full ">
                    {({ open }) => (
                      <>
                        <Popover.Button className="flex flex-wrap justify-between items-center w-full p-4 border text-start text-gray-600 focus:outline-none outline-neutral- border-neutral-300 rounded-full placeholder-gray-600  bg-transparent ">
                          {selectedDays
                            ? `${selectedDays} Days`
                            : "Select Date"}
                          <IoChevronDown className="hidden sm:block" />
                        </Popover.Button>

                        <Popover.Panel className="absolute z-10 w-36 md:w-48 mt-2 bg-white border rounded-md shadow-lg ">
                          <div className="flex flex-row items-center justify-between px-2 py-2 md:px-4 md:py-4 rounded-full">
                            {/* Decrease Button */}
                            <button
                              type="button"
                              onClick={decrementCounter}
                              className="text-blue-500 focus:outline-none border border-gray-300 px-2 py-1 rounded flex items-center justify-center text-xl shadow hover:border-gray-400"
                            >
                              <FiMinus className="text-indigo-500" />
                            </button>

                            {/* Selected Days Display */}
                            <span className="text-lg md:text-xl text-gray-600">
                              {selectedDays}
                            </span>

                            {/* Increase Button */}
                            <button
                              type="button"
                              onClick={incrementCounter}
                              className="text-blue-500 focus:outline-none border border-gray-300 px-2 py-1 rounded flex items-center justify-center text-xl shadow hover:border-gray-400 "
                            >
                              <FaPlus className="text-indigo-500" />
                            </button>
                          </div>
                        </Popover.Panel>
                      </>
                    )}
                  </Popover>

                  {/* Search button */}
                  <div className="px-1 md:px-1.5 lg:pr-0">
                    <button
                      type="button"
                      title="search"
                      className="relative flex items-center justify-center  text-2xl h-12 w-12 md:w-16 ml-auto sm:px-6  before:absolute before:inset-0 before:rounded-full before:bg-indigo-500  before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
                    >
                      <RiSearch2Line className="relative  text-white" />
                    </button>
                  </div>
                </div>
              </form>
            </div>

            {/* Logos */}
            <div className="mt-12 flex gap-6 lg:gap-12 justify-between items-center grayscale :grayscale-0">
              <img src={img1} className="h-8 sm:h-10 w-auto lg:h-16" alt="" />
              <img src={img2} className="h-8 sm:h-10 w-auto lg:h-16" alt="" />
              <img src={img3} className="h-3 sm:h-3 w-auto lg:h-6 mt-" alt="" />
              <img src={img4} className="h-8 sm:h-10 w-auto lg:h-16" alt="" />
            </div>
          </div>

          {/* Illustration */}
          <div className="overflow-hidden w-full lg:w-[35rem] lg:-mr-10">
            <img src={illu} alt="project illustration" height="" width="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default hero2;
