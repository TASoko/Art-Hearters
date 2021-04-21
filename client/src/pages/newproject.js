import React from "react";
import "./newproject.css";

function NewProject (){
    return (
      <section className="h-screen bg-gray-100 bg-opacity-50">
        <form className="container max-w-2xl mx-auto shadow-md md:w-3/4">
          <div className="p-4 bg-gray-100 border-t-2 border-indigo-400 rounded-lg bg-opacity-5">
            <div className="max-w-sm mx-auto md:w-full md:mx-0">
              <div className="inline-flex items-center space-x-4">
                <h1 className="text-gray-600" style={{ fontSize: "55px" }}>
                  Create a Project
                </h1>
              </div>
            </div>
          </div>
          <div className="space-y-6 bg-white">
            <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
              <h2 className="max-w-sm mx-auto md:w-1/3">Project Title</h2>
              <div className="max-w-sm mx-auto md:w-2/3">
                <div className=" relative ">
                  <input
                    type="text"
                    id="user-info-email"
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Project Name"
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
                    <textarea class="block w-full h-40 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" placeholder="Description"></textarea>
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
                    id="project-info-location"
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
                    type="text"
                    id="project-info-from"
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="From"
                  />
                </div>
              </div>
              <div className="max-w-sm mx-auto space-y-5 md:w-1/3">
                <div className=" relative ">
                  <input
                    type="text"
                    id="project-info-to"
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
                Create
              </button>
            </div>
          </div>
        </form>
      </section>
    );
};

export default NewProject;

    //   <div className="mt-5 md:mt-0 md:col-span-2 form">
    //     <form action="#" method="POST">
    //       <div className="shadow overflow-hidden sm:rounded-md">
    //         <div className="px-4 py-5 bg-white sm:p-6">
    //           <div className="grid grid-cols-6 gap-6">
    //             <div className="col-span-6 sm:col-span-3">
    //               <label
    //                 for="first_name"
    //                 className="block text-sm font-medium text-black-700"
    //               >
    //                 First name
    //               </label>
    //               <input
    //                 type="text"
    //                 name="first_name"
    //                 id="first_name"
    //                 autocomplete="given-name"
    //                 className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
    //               />
    //             </div>

    //             <div className="col-span-6 sm:col-span-3">
    //               <label
    //                 for="last_name"
    //                 className="block text-sm font-medium text-gray-700"
    //               >
    //                 Last name
    //               </label>
    //               <input
    //                 type="text"
    //                 name="last_name"
    //                 id="last_name"
    //                 autocomplete="family-name"
    //                 className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
    //               />
    //             </div>

    //             <div className="col-span-6 sm:col-span-4">
    //               <label
    //                 for="email_address"
    //                 className="block text-sm font-medium text-gray-700"
    //               >
    //                 Email address
    //               </label>
    //               <input
    //                 type="text"
    //                 name="email_address"
    //                 id="email_address"
    //                 autocomplete="email"
    //                 className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
    //               />
    //             </div>

    //             <div className="col-span-6 sm:col-span-3">
    //               <label
    //                 for="country"
    //                 className="block text-sm font-medium text-gray-700"
    //               >
    //                 Country / Region
    //               </label>
    //               <select
    //                 id="country"
    //                 name="country"
    //                 autocomplete="country"
    //                 className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    //               >
    //                 <option>United States</option>
    //                 <option>Canada</option>
    //                 <option>Mexico</option>
    //               </select>
    //             </div>

    //             <div className="col-span-6">
    //               <label
    //                 for="street_address"
    //                 className="block text-sm font-medium text-gray-700"
    //               >
    //                 Street address
    //               </label>
    //               <input
    //                 type="text"
    //                 name="street_address"
    //                 id="street_address"
    //                 autocomplete="street-address"
    //                 className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
    //               />
    //             </div>

    //             <div className="col-span-6 sm:col-span-6 lg:col-span-2">
    //               <label
    //                 for="city"
    //                 className="block text-sm font-medium text-gray-700"
    //               >
    //                 City
    //               </label>
    //               <input
    //                 type="text"
    //                 name="city"
    //                 id="city"
    //                 className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
    //               />
    //             </div>

    //             <div className="col-span-6 sm:col-span-3 lg:col-span-2">
    //               <label
    //                 for="state"
    //                 className="block text-sm font-medium text-gray-700"
    //               >
    //                 State / Province
    //               </label>
    //               <input
    //                 type="text"
    //                 name="state"
    //                 id="state"
    //                 className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
    //               />
    //             </div>

    //             <div className="col-span-6 sm:col-span-3 lg:col-span-2">
    //               <label
    //                 for="postal_code"
    //                 className="block text-sm font-medium text-gray-700"
    //               >
    //                 ZIP / Postal
    //               </label>
    //               <input
    //                 type="text"
    //                 name="postal_code"
    //                 id="postal_code"
    //                 autocomplete="postal-code"
    //                 className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
    //               />
    //             </div>
    //           </div>
    //         </div>
    //         <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
    //           <button
    //             type="submit"
    //             className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    //           >
    //             Save
    //           </button>
    //         </div>
    //       </div>
    //     </form>
    //   </div>