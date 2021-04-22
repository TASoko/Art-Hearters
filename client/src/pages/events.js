import React from "react";
import axios from "axios";
import "./project.css";
import Navbar from "../components/Navbar/navbar";
const token = localStorage.getItem("token");
function EventSchema() {
	const [events, setEvents] = React.useState([]);
	const [showForm, setShowForm] = React.useState(false);
	const [isUpdateEvent, setIsUpdateEvent] = React.useState(false);
	const [state, setState] = React.useState({});

	const getAllEvents = async () => {
		try {
			const res = await axios.get("/api/events");
			setEvents(res.data.data);
		} catch (err) {
			console.log(err);
		}
	};

	React.useEffect(() => {
		getAllEvents();
	}, []);

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const {  title, location, description, to, from } = state;

			// Validate the inputs
			
			if ( !title||!location || !description || !to || !from ) {
				return alert("Fill up the empty field!");
			}

			const data = { ...state};

			// Remove the id
			delete data._id;

			const method = isUpdateEvent ? "PATCH" : "POST";
			const url = isUpdateEvent
				? `/api/events/${state._id}`
				: "/api/events";

			const res = await axios({
				method,
				url,
				data,
				headers: { "x-auth-token": token },
			});

			if (res.data.status === "success") {
				setIsUpdateEvent(false);

				// Reset the inputs
				setState({});

				// Get all projects
				getAllEvents();

				// Hide the form
				setShowForm(false);
			}
		} catch (err) {
			setIsUpdateEvent(false);
			// Hide the form
			setShowForm(false);
			alert("something went wrong, while creating a new event!");
		}
	};

	const handleJobDelete = async (eventId) => {
		try {
			// eslint-disable-next-line no-restricted-globals
			if (confirm("Are you sure you want to delete this event?")) {
				await axios.delete(`/api/events/${eventId}`, {
					headers: { "x-auth-token": token },
				});
				// Get all projects
				getAllEvents();
			}
		} catch (error) {
			alert("something went wrong, while deleteing an event!");
		}
	};

	const handleEventUpdate = (event) => {
		setState({ ...event });
		setIsUpdateEvent(true);
		setShowForm(true);
	};

	const onInputChange = (e) => {
		setState({ ...state, [e.target.name]: e.target.value });
	};

	const displayEvents = () => {
		return events.length > 0 ? (
			<table border>
				<tr>
					{/* <th>Description</th> */}
					<th>Title</th>
					<th>Location</th>
					<th>Description</th>
					<th>From</th>
					<th>To</th>
					<th>Actions</th>
				</tr>
				{events.map((el) => {
					const { _id, position, team, location, description, to, from } = el;
					return (
						<tr key={_id}>
							
							<td>{description}</td>
							<td>{location}</td>
							<td>{position}</td>
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
								<textarea
									type='text'
									name='description'
									value={state.description}
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
									name='position'
									value={state.position}
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
