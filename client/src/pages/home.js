import React from "react";
import "./home.css";
import Design from "../components/Design/desgin";
import Navbar from "../components/Navbar/navbar"


function Home () {
    return (
      <div>
        <Navbar />
        <div>
          <br></br> <br></br>
          <br></br> <br></br>
          <br></br>
        </div>
        <div className="Blurb">
          <div className="text-start w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
            <h1 className="title">
              <span className="block">Renaissance </span>
            </h1>
            <h3>
              <span className="text">
                Welcome to the spot where New Yorkers come to get inspired, move
                and enjoy the arts. If you are an aritist or an enthusiast this
                is the place to be.
              </span>
            </h3>
            <div className="lg:mt-0 lg:flex-shrink-0">
              <div className="mt-12 inline-flex rounded-md shadow">
                <button
                  type="button"
                  className="explore py-4 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-black w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                >
                  Explore
                </button>
              </div>
            </div>
          </div>
        </div>

        <Design />
      </div>
    );
};

export default Home;