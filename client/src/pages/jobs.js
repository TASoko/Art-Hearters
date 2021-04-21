import React from "react";
import axios from "axios";
import "./project.css";
import Navbar from "../components/Navbar/navbar";
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

	React.useEffect(() => {
		getAllJobs();
	}, []);

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const { jobName, team, location, Description, Position, to, from } = state;

			// Validate the inputs
			if (!jobName || !location || !Description || !to || !from || !Position || !team) {
				return alert("Fill up the empty field!");
			}

			const data = { ...state, job: jobName };

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
		setState({ ...job, jobName: job.job });
		setIsUpdateJob(true);
		setShowForm(true);
	};

	const onInputChange = (e) => {
		setState({ ...state, [e.target.name]: e.target.value });
	};

	const displayJobs = () => {
		return jobs.length > 0 ? (
			<table border>
				<tr>
					<th>Job</th>
					<th>Description</th>
					<th>Location</th>
					<th>Team</th>
					<th>Position</th>
					<th>From</th>
					<th>To</th>
					<th>Actions</th>
				</tr>
				{jobs.map((el) => {
					const { _id, job, Position, team, location, Description, to, from } = el;
					return (
						<tr key={_id}>
							<td>{job}</td>
							<td>{Description}</td>
							<td>{location}</td>
							<td>{Position}</td>
							<td>{team}</td>
							<td>
								{new Date(from).toLocaleString("en-us", {
									month: "long",
									year: "numeric",
									day: "numeric",
								})}
							</td>
							<td>
								{new Date(to).toLocaleString("en-us", {
									month: "long",
									year: "numeric",
									day: "numeric",
								})}
							</td>
							<td>
								<button
									onClick={() => handleJobUpdate(el)}
									className='py-2 px-4 m-2  bg-green-600 hover:bg-green-500 focus:ring-green-500 focus:ring-offset-green-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg '
								>
									Edit
								</button>
								<button
									onClick={() => handleJobDelete(_id)}
									className='py-2 px-4 m-2  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg '
								>
									Delete
								</button>
							</td>
						</tr>
					);
				})}
			</table>
		) : (
			<h2>No Jobs available at the moment!</h2>
		);
	};
	const displayJobForm = () => {
		return (
			<div className='flex flex-col w-full max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10'>
				<div className='self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl dark:text-white'>
					{isUpdateJob ? "Update" : "Create New"} Job
				</div>
				<div className='mt-8'>
					<form action='#' autoComplete='off' onSubmit={handleSubmit}>
						<div className='flex flex-col mb-2'>
							<div className='flex relative '>
								<input
									type='text'
									name='jobName'
									value={state.jobName}
									onChange={onInputChange}
									className=' rounded-r-lg  appearance-none border border-gray-300 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
									placeholder='Job Name'
								/>
							</div>
						</div>
						<div className='flex flex-col mb-2'>
							<div className='flex relative '>
								<textarea
									type='text'
									name='description'
									value={state.Description}
									onChange={onInputChange}
									className=' rounded-r-lg  appearance-none border border-gray-300 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
									placeholder='Description'
								></textarea>
							</div>
						</div>
						<div className='flex flex-col mb-2'>
							<div className='flex relative '>
								<input
									type='text'
									name='location'
									value={state.location}
									onChange={onInputChange}
									class=' rounded-r-lg  appearance-none border border-gray-300 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
									placeholder='Location'
								/>
							</div>
						</div>
						<div className='flex flex-col mb-2'>
							<div className='flex relative '>
								<input
									type='text'
									name='Position'
									value={state.Position}
									onChange={onInputChange}
									class=' rounded-r-lg  appearance-none border border-gray-300 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
									placeholder='Position'
								/>
							</div>
						</div>
						<div className='flex flex-col mb-2'>
							<div className='flex relative '>
								<input
									type='text'
									name='team'
									value={state.team}
									onChange={onInputChange}
									class=' rounded-r-lg  appearance-none border border-gray-300 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
									placeholder='Team'
								/>
							</div>
						</div>

						<div className='flex flex-col mb-2'>
							<div className='flex relative '>
								<input
									type='datetime-local'
									name='from'
									value={state.from && new Date(state.from).toISOString().slice(0, 16)}
									onChange={onInputChange}
									class=' rounded-r-lg  appearance-none border border-gray-300 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
									placeholder='From'
								/>
							</div>
						</div>
						<div className='flex flex-col mb-2'>
							<div className='flex relative '>
								<input
									type='datetime-local'
									name='to'
									value={state.to && new Date(state.to).toISOString().slice(0, 16)}									onChange={onInputChange}
									class=' rounded-r-lg  appearance-none border border-gray-300 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
									placeholder='To'
								/>
							</div>
						</div>

						<div class='flex'>
							<button
								type='submit'
								className='py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg '
							>
								{isUpdateJob ? "Update" : "Submit"}
							</button>
						</div>
					</form>
				</div>
			</div>
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
