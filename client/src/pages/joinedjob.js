import React from "react";
// import "./newjob.css";

function NewJob() {
  return (
    <section className="h-screen bg-gray-100 bg-opacity-50">
      <form className="container max-w-2xl mx-auto shadow-md md:w-3/4">
        <div className="p-4 bg-gray-100 border-t-2 border-indigo-400 rounded-lg bg-opacity-5">
          <div className="max-w-sm mx-auto md:w-full md:mx-0">
            <div className="inline-flex items-center space-x-4">
              <h1 className="text-gray-600" style={{ fontSize: "55px" }}>
                Create New Job
              </h1>
            </div>
          </div>
        </div>
        <div className="space-y-6 bg-white">
          <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
            <h2 className="max-w-sm mx-auto md:w-1/3">Position</h2>
            <div className="max-w-sm mx-auto md:w-2/3">
              <div className=" relative ">
                <input
                  type="text"
                  name="position"
                  value={state.position}
                  onChange={onInputChange}
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Project Name"
                />
              </div>
            </div>
          </div>
          <hr />
          <div className="items-center w-full p-8 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
            <h2 className="max-w-sm mx-auto md:w-4/12">Team</h2>
            <div className="max-w-sm mx-auto space-y-5 md:w-2/3">
              <div className=" relative ">
                <input
                  type="text"
                  name="team"
                  value={state.team}
                  onChange={onInputChange}
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Location"
                />
              </div>
            </div>
          </div>
          <hr />
          <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
            <h2 className="max-w-sm mx-auto md:w-1/3">Description</h2>
            <div className="max-w-sm mx-auto space-y-5 md:w-2/3">
              <div>
                <div className=" relative ">
                  <textarea
                    class="block w-full h-40 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                    placeholder="Description"
                    name="description"
                    value={state.description}
                    onChange={onInputChange}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="items-center w-full p-8 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
            <h2 className="max-w-sm mx-auto md:w-4/12">Location</h2>
            <div className="max-w-sm mx-auto space-y-5 md:w-2/3">
              <div className=" relative ">
                <input
                  type="text"
                  name="location"
                  value={state.location}
                  onChange={onInputChange}
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Location"
                />
              </div>
            </div>
          </div>
          <hr />
          <div className="items-center w-full p-8 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
            <h2 className="max-w-sm mx-auto md:w-4/12">Date</h2>
            <div className="max-w-sm mx-auto space-y-5 md:w-1/3">
              <div className=" relative ">
                <input
                  type="datetime-local"
                  name="from"
                  value={
                    state.from &&
                    new Date(state.from).toISOString().slice(0, 16)
                  }
                  onChange={onInputChange}
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="From"
                />
              </div>
            </div>
            <div className="max-w-sm mx-auto space-y-5 md:w-1/3">
              <div className=" relative ">
                <input
                  type="datetime-local"
                  name="to"
                  value={
                    state.to && new Date(state.to).toISOString().slice(0, 16)
                  }
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="To"
                />
              </div>
            </div>
          </div>
          <hr />
          <div className="w-full px-4 pb-4 ml-auto text-gray-500 md:w-1/3">
            <button
              type="submit"
              className="py-2 px-4  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            >
              {isUpdateJob ? "Update" : "Submit"}
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}

export default NewJob;
