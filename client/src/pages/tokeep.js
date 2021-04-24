<div className="flex flex-col w-full max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
  <div className="self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl dark:text-white">
    {isUpdateProject ? "Update" : "Create New"} Project
  </div>
  <div className="mt-8">
    <form action="#" autoComplete="off" onSubmit={handleSubmit}>
      <div className="flex flex-col mb-2">
        <div className="flex relative ">
          <input
            type="text"
            name="projectName"
            value={state.projectName}
            onChange={onInputChange}
            className=" rounded-r-lg  appearance-none border border-gray-300 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            placeholder="Project Name"
          />
        </div>
      </div>
      <div className="flex flex-col mb-2">
        <div className="flex relative ">
          <textarea
            type="text"
            name="description"
            value={state.description}
            onChange={onInputChange}
            className=" rounded-r-lg  appearance-none border border-gray-300 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            placeholder="Description"
          ></textarea>
        </div>
      </div>
      <div className="flex flex-col mb-2">
        <div className="flex relative ">
          <input
            type="text"
            name="location"
            value={state.location}
            onChange={onInputChange}
            class=" rounded-r-lg  appearance-none border border-gray-300 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            placeholder="Location"
          />
        </div>
      </div>
      <div className="flex flex-col mb-2">
        <div className="flex relative ">
          <input
            type="datetime-local"
            name="from"
            value={
              state.from && new Date(state.from).toISOString().slice(0, 16)
            }
            onChange={onInputChange}
            class=" rounded-r-lg  appearance-none border border-gray-300 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            placeholder="From"
          />
        </div>
      </div>
      <div className="flex flex-col mb-2">
        <div className="flex relative ">
          <input
            type="datetime-local"
            name="to"
            value={state.to && new Date(state.to).toISOString().slice(0, 16)}
            onChange={onInputChange}
            class=" rounded-r-lg  appearance-none border border-gray-300 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            placeholder="To"
          />
        </div>
      </div>

      <div class="flex">
        <button
          type="submit"
          className="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
        >
          {isUpdateProject ? "Update" : "Submit"}
        </button>
      </div>
    </form>
  </div>
</div>;






// Jobs
		<div className="flex flex-col w-full max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
      <div className="self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl dark:text-white">
        {isUpdateJob ? "Update" : "Create New"} Job
      </div>
      <div className="mt-8">
        <form action="#" autoComplete="off" onSubmit={handleSubmit}>
          <div className="flex flex-col mb-2">
            <div className="flex relative ">
              <textarea
                type="text"
                name="description"
                value={state.description}
                onChange={onInputChange}
                className=" rounded-r-lg  appearance-none border border-gray-300 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="Description"
              ></textarea>
            </div>
          </div>
          <div className="flex flex-col mb-2">
            <div className="flex relative ">
              <input
                type="text"
                name="location"
                value={state.location}
                onChange={onInputChange}
                class=" rounded-r-lg  appearance-none border border-gray-300 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="Location"
              />
            </div>
          </div>
          <div className="flex flex-col mb-2">
            <div className="flex relative ">
              <input
                type="text"
                name="position"
                value={state.position}
                onChange={onInputChange}
                class=" rounded-r-lg  appearance-none border border-gray-300 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="Position"
              />
            </div>
          </div>
          <div className="flex flex-col mb-2">
            <div className="flex relative ">
              <input
                type="text"
                name="team"
                value={state.team}
                onChange={onInputChange}
                class=" rounded-r-lg  appearance-none border border-gray-300 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="Team"
              />
            </div>
          </div>

          <div className="flex flex-col mb-2">
            <div className="flex relative ">
              <input
                type="datetime-local"
                name="from"
                value={
                  state.from && new Date(state.from).toISOString().slice(0, 16)
                }
                onChange={onInputChange}
                class=" rounded-r-lg  appearance-none border border-gray-300 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="From"
              />
            </div>
          </div>
          <div className="flex flex-col mb-2">
            <div className="flex relative ">
              <input
                type="datetime-local"
                name="to"
                value={
                  state.to && new Date(state.to).toISOString().slice(0, 16)
                }
                onChange={onInputChange}
                class=" rounded-r-lg  appearance-none border border-gray-300 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="To"
              />
            </div>
          </div>

          <div class="flex">
            <button
              type="submit"
              className="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            >
              {isUpdateJob ? "Update" : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>;

    // Events
    	<div className="flex flex-col w-full max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
        <div className="self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl dark:text-white">
          {isUpdateEvent ? "Update" : "Create New"} Event
        </div>
        <div className="mt-8">
          <form action="#" autoComplete="off" onSubmit={handleSubmit}>
            <div className="flex flex-col mb-2">
              <div className="flex relative ">
                <textarea
                  type="text"
                  name="description"
                  value={state.description}
                  onChange={onInputChange}
                  className=" rounded-r-lg  appearance-none border border-gray-300 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Description"
                ></textarea>
              </div>
            </div>
            <div className="flex flex-col mb-2">
              <div className="flex relative ">
                <input
                  type="text"
                  name="location"
                  value={state.location}
                  onChange={onInputChange}
                  class=" rounded-r-lg  appearance-none border border-gray-300 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Location"
                />
              </div>
            </div>
            <div className="flex flex-col mb-2">
              <div className="flex relative ">
                <input
                  type="text"
                  name="title"
                  value={state.title}
                  onChange={onInputChange}
                  class=" rounded-r-lg  appearance-none border border-gray-300 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Position"
                />
              </div>
            </div>

            <div className="flex flex-col mb-2">
              <div className="flex relative ">
                <input
                  type="datetime-local"
                  name="from"
                  value={
                    state.from &&
                    new Date(state.from).toISOString().slice(0, 16)
                  }
                  onChange={onInputChange}
                  class=" rounded-r-lg  appearance-none border border-gray-300 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="From"
                />
              </div>
            </div>
            <div className="flex flex-col mb-2">
              <div className="flex relative ">
                <input
                  type="datetime-local"
                  name="to"
                  value={
                    state.to && new Date(state.to).toISOString().slice(0, 16)
                  }
                  onChange={onInputChange}
                  class=" rounded-r-lg  appearance-none border border-gray-300 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="To"
                />
              </div>
            </div>

            <div class="flex">
              <button
                type="submit"
                className="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                {isUpdateEvent ? "Update" : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>;