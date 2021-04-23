import React from "react";
import "./explore.css";
import Navbar from "../components/Navbar/navbar";
import ExploreCard from "../components/Card/explorecard";



function Explore () {
  
    return (
      <div style={{backgroundColor:"white"}}>
        <Navbar />
        <h1 style={{fontSize:"60px"}}>Welcome to Renaissance</h1>
        <div className="buttons">
          <button
            type="button"
            className="jobs py-4 px-6  bg-pink-600 hover:bg-pink-700 focus:ring-pink-500 focus:ring-offset-pink-200 text-black w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  "
          >
            Job Postings
          </button>

          <button
            type="button"
            className="events py-4 px-6  bg-pink-600 hover:bg-pink-700 focus:ring-pink-500 focus:ring-offset-pink-200 text-black w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  "
          >
            Events
          </button>

          <button
            type="button"
            className="projects py-4 px-6  bg-pink-600 hover:bg-pink-700 focus:ring-pink-500 focus:ring-offset-pink-200 text-black w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  "
          >
            Projects
          </button>
          <div className="search relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                className="w-5 h-5 text-gray-400"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </span>

            <input
              type="text"
              className="w-full py-3 pl-10 pr-4 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              placeholder="Search"
            />
          </div>
        </div>
        {/* Cards */}
        <div className="flex flex-wrap -m-4">

          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <ExploreCard />
          </div>

          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <ExploreCard />
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <ExploreCard />
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
           <ExploreCard />
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <ExploreCard />
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <ExploreCard />
          </div>
        </div>
      </div>
    );
};

export default Explore;