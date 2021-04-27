import React from "react";
import axios from "axios";
import "./job.css";
import Uploader from "../components/Uploader/Uploader";

// import Navbar from "../components/Navbar/navbar";    // COMMENTED OUT BC UNUSED...for now...
const token = localStorage.getItem("token");
function Job() {
	const [jobs, setJobs] = React.useState([]);
	const [showForm, setShowForm] = React.useState(false);
	const [isUpdateJob, setIsUpdateJob] = React.useState(false);
	const [state, setState] = React.useState({});

	const getAllJobs = async () => {
		try {
			const res = await axios.get("/api/jobs");
			setJobs(res.data.data);
		} catch (err) {
			console.log(err);
		}
	};

  const getImage = e => {
    e.preventDefault();
    console.log("getting the image")
  //   const files = document.querySelector("#upload-image").files;
  //   console.log("Files Uploaded: " + files)
  //   console.log("First file, which will be uploaded: " + files[0])
  //   const formData = new FormData()
  //   formData.append("image", files[0])
  //   // const filename = files[0].name
  //   if (files && files.length > 0) {
  //     // const file = files[0];
  //     // this.setState({ file });
  //     console.log("got the image")
  //     console.log(formData.get("image"))
  //     console.log('about to fetch...')
  //     fetch("/api/assets/upload", {
  //       method: "POST",
  //       body: formData
  //     })
  //   }
  };

  

	React.useEffect(() => {
		getAllJobs();
	}, []);

	const handleSubmit = async (e) => {
		e.preventDefault();

    

		try {
			const {  team, location, description, position, to, from } = state;

			// Validate the inputs
			
			if ( !location || !description || !to || !from || !position || !team) {
				return alert("Fill up the empty field!");
			}

			const data = { ...state};

			// Remove the id
			delete data._id;

			const method = isUpdateJob ? "PATCH" : "POST";
			const url = isUpdateJob
				? `/api/jobs/${state._id}`
				: "/api/jobs";

			const res = await axios({
				method,
				url,
				data,
				headers: { "x-auth-token": token },
			});

			if (res.data.status === "success") {
				setIsUpdateJob(false);

				// Reset the inputs
				setState({});

				// Get all projects
				getAllJobs();

				// Hide the form
				setShowForm(false);
			}
		} catch (err) {
			setIsUpdateJob(false);
			// Hide the form
			setShowForm(false);
			alert("something went wrong, while creating a new job!");
		}
	};

	const handleJobDelete = async (jobId) => {
		try {
			// eslint-disable-next-line no-restricted-globals
			if (confirm("Are you sure you want to delete this job?")) {
				await axios.delete(`/api/jobs/${jobId}`, {
					headers: { "x-auth-token": token },
				});
				// Get all projects
				getAllJobs();
			}
		} catch (error) {
			alert("something went wrong, while deleteing a job!");
		}
	};

	const handleJobUpdate = (job) => {
		setState({ ...job });
		setIsUpdateJob(true);
		setShowForm(true);
	};

	const onInputChange = (e) => {
		setState({ ...state, [e.target.name]: e.target.value });
	};

	const displayJobs = () => {
    return jobs.length > 0 ? (
        <div style={{ backgroundColor: "white" }}>
          <div className="container mx-auto px-4 sm:px-8 max-w-3x">
            <div className="py-8">
              <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                  <table className="min-w-full leading-normal">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                        >
                          Position
                        </th>
                        <th
                          scope="col"
                          className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                        >
                          Description
                        </th>
                        <th
                          scope="col"
                          className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                        >
                          Team
                        </th>
                        <th
                          scope="col"
                          className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                        >
                          Location
                        </th>
                        <th
                          scope="col"
                          className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                        >
                          From
                        </th>
                        <th
                          scope="col"
                          className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                        >
                          To
                        </th>
                        <th
                          scope="col"
                          className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                        >
                          Actions
                        </th>
                      </tr>
                    </thead>
                    {jobs.map((el) => {
                      const {
                        _id,
                        position,
                        team,
                        location,
                        description,
                        to,
                        from,
                      } = el;
                      return (
                        <tbody>
                          <tr key={_id}>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <div className="flex items-center">
                                <div className="flex-shrink">
                                  <a href="#" className="block relative">
                                    <img
                                      alt="position image"
                                      src={"../images/chalk-rocks.jpeg"}
                                      className="mx-auto object-cover rounded-full h-10 w-10 "
                                    />
                                  </a>
                                </div>
                                <div className="ml-3">
                                  <p className="text-gray-900 whitespace-no-wrap">
                                    {position}
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <p className="text-gray-900 whitespace-no-wrap">
                                {description}
                              </p>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <p className="text-gray-900 whitespace-no-wrap">
                                {team}
                              </p>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <p className="text-gray-900 whitespace-no-wrap">
                                {location}
                              </p>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <p className="text-gray-900 whitespace-no-wrap">
                                {new Date(from).toLocaleString("en-us", {
                                  month: "long",
                                  year: "numeric",
                                  day: "numeric",
                                })}
                              </p>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <p className="text-gray-900 whitespace-no-wrap">
                                {new Date(to).toLocaleString("en-us", {
                                  month: "long",
                                  year: "numeric",
                                  day: "numeric",
                                })}
                              </p>
                            </td>
                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <a
                                href="#"
                                className="text-indigo-600 hover:text-indigo-900"
                                onClick={() => handleJobUpdate(el)}
                              >
                                Edit
                              </a>
                              <br></br>
                              <a
                                href="#"
                                className="text-indigo-600 hover:text-indigo-900"
                                onClick={() => handleJobDelete(_id)}
                              >
                                Delete
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      );
                    })}
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
    ) : (
      <div style={{ backgroundColor: "white" }}>
        <h2>No Jobs available at the moment!</h2>
      </div>
    );
  };

	const displayJobForm = () => {
		return (
      <section className="h-screen bg-gray-100 bg-opacity-50" >
        <form onSubmit={handleSubmit} className="container max-w-2xl mx-auto shadow-md md:w-3/4">
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
                    placeholder="Position"
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
                    placeholder="Team"
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
					onChange={onInputChange}
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="To"
                  />
                </div>
              </div>
            </div>
            <hr />
            <div className="items-center w-full p-8 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
              <h2 className="max-w-sm mx-auto md:w-4/12">
                Upload an Image to be Displayed
              </h2>
              <div className="max-w-sm mx-auto space-y-5 md:w-2/3">
                <div className=" relative ">
                  <Uploader />
                </div>
              </div>
            </div>
            <hr />
            <div className="w-full px-4 pb-4 ml-auto text-gray-500 md:w-1/3">
              <button 
                onClick={getImage}
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
	};
	return (
		<div>
      
			{/* {<Navbar />} */}
			{isUpdateJob ? (
				<button
					type='button'
					className='login py-2 px-4 mb-10  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 '
					onClick={() => {
						setShowForm(false);
						setIsUpdateJob(false);
						setState({})
					}}
				>
					Go back
				</button>
			) : (
        
				<button
					type='button'
					className='login py-2 px-4 mb-10  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 '
					onClick={() => setShowForm(!showForm)}
				>
					Create New Job
				</button>
        
			)}

			<h1>AllJobs</h1>
			<hr />

			{showForm ? displayJobForm() : displayJobs()}
		</div>
	);
}

export default Job;
