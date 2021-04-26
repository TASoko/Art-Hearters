import React from "react";
import axios from "axios";
import "./project.css";
import Uploader from "../components/Uploader/Uploader";
// import Navbar from "../components/Navbar/navbar";   // COMMENTED OUT BC UNUSED...for now...


const token = localStorage.getItem("token");

function Event() {
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

	const uploadImage = e => {
		// e.preventDefault();
		console.log("hit get image")
		const files = document.querySelector("#upload-image").files;
		console.log("Files Uploaded: " + files)
		console.log("First file, which will be uploaded: " + files[0])
		const formData = new FormData()
		formData.append("image", files[0])
		console.log("form data = " + formData)
		const filename = files[0].name
		if (files && files.length > 0) {
		  // const file = files[0];
		  // this.setState({ file });
		  console.log("got the image")
		  console.log(formData.get("image"))
		  console.log('about to fetch...')
		  fetch("/api/assets/upload", {
			method: "POST",
			body: formData
		  })
		  console.log("after post fetch");
		  getURLofImage(filename)
	  }}

	  const getURLofImage = file => {
		console.log("filename form getURL " + file)
		const filename = file
		const getURL = `https://wjr-bucket-1.s3.us-east-2.amazonaws.com/${filename}`;
		console.log(getURL)
		}
	// 	const options = {
	// 	  params: {
	// 		Key: filename,
	// 		ContentType: 'image/jpeg'
	// 	  }
	// 	};
	// 	axios.get(generateGetUrl, options).then(res => {
	// 	  const { data: getURL } = res;
	// 	  this.setState({ getURL });
	// 	});
	//   };

	//   const bigSubmit = e => {
	// 	e.preventDefault()
	// 	uploadImage()
		// getURLofImage()
	// }

	React.useEffect(() => {
		getAllEvents();
	}, []);

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const { title, location, description, to, from, aws_image_url } = state;

			// Validate the inputs

			if (!title || !location || !description || !to || !from) {
				return alert("Fill up the empty field!");
			}

			// JACK'S ADDITIONS HERE FOR IMAGE
			uploadImage()

			const data = { ...state };

			// Remove the id
			delete data._id;

			const method = isUpdateEvent ? "PATCH" : "POST";
			const url = isUpdateEvent ? `/api/events/${state._id}` : "/api/events";

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

	const handleEventDelete = async (eventId) => {
		try {
			// eslint-disable-next-line no-restricted-globals
			if (confirm("Are you sure you want to delete this event?")) {
				await axios.delete(`/api/events/${eventId}`, {
					headers: { "x-auth-token": token },
				});
				// Get all events
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
					const { _id, title, location, description, to, from, aws_image_url} = el;
					return (
						<tr key={_id}>
							<td>
							<img src={aws_image_url} alt=""></img>
								
								
								</td>
							<td>{description}</td>
							<td>{location}</td>
							<td>{title}</td>
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
									onClick={() => handleEventUpdate(el)}
									className='py-2 px-4 m-2  bg-green-600 hover:bg-green-500 focus:ring-green-500 focus:ring-offset-green-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg '
								>
									Edit
								</button>
								<button
									onClick={() => handleEventDelete(_id)}
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
			<h2>No Events at the moment!</h2>
		);
	};
	const displayEventForm = () => {
		return (
			<section className='h-screen bg-gray-100 bg-opacity-50'>
				<form
					onSubmit={handleSubmit}
					className='container max-w-2xl mx-auto shadow-md md:w-3/4'
				>
					<div className='p-4 bg-gray-100 border-t-2 border-indigo-400 rounded-lg bg-opacity-5'>
						<div className='max-w-sm mx-auto md:w-full md:mx-0'>
							<div className='inline-flex items-center space-x-4'>
								<h1 className='text-gray-600' style={{ fontSize: "55px" }}>
									Create an Event
								</h1>
							</div>
						</div>
					</div>
					<div className='space-y-6 bg-white'>
						<div className='items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0'>
							<h2 className='max-w-sm mx-auto md:w-1/3'>Event Name</h2>
							<div className='max-w-sm mx-auto md:w-2/3'>
								<div className=' relative '>
									<input
										type='text'
										name='title'
										value={state.title}
										onChange={onInputChange}
										className=' rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
										placeholder='Event Name'
									/>
								</div>
							</div>
						</div>
						<hr />
						<div className='items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0'>
							<h2 className='max-w-sm mx-auto md:w-1/3'>Description</h2>
							<div className='max-w-sm mx-auto space-y-5 md:w-2/3'>
								<div>
									<div className=' relative '>
										<textarea
											name='description'
											value={state.description}
											onChange={onInputChange}
											class='block w-full h-40 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
											placeholder='Description'
										></textarea>
									</div>
								</div>
							</div>
						</div>
						<hr />
						<div className='items-center w-full p-8 space-y-4 text-gray-500 md:inline-flex md:space-y-0'>
							<h2 className='max-w-sm mx-auto md:w-4/12'>Location</h2>
							<div className='max-w-sm mx-auto space-y-5 md:w-2/3'>
								<div className=' relative '>
									<input
										type='text'
										name='location'
										value={state.location}
										onChange={onInputChange}
										className=' rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
										placeholder='Location'
									/>
								</div>
							</div>
						</div>
						<hr />
						<div className='items-center w-full p-8 space-y-4 text-gray-500 md:inline-flex md:space-y-0'>
							<h2 className='max-w-sm mx-auto md:w-4/12'>Date</h2>
							<div className='max-w-sm mx-auto space-y-5 md:w-1/3'>
								<div className=' relative '>
									<input
										type='datetime-local'
										name='from'
										value={
											state.from &&
											new Date(state.from).toISOString().slice(0, 16)
										}
										onChange={onInputChange}
										className=' rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
										placeholder='From'
									/>
								</div>
							</div>
							<div className='max-w-sm mx-auto space-y-5 md:w-1/3'>
								<div className=' relative '>
									<input
										type='datetime-local'
										name='to'
										value={
											state.to && new Date(state.to).toISOString().slice(0, 16)
										}
										onChange={onInputChange}
										className=' rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
										placeholder='To'
									/>
								</div>
							</div>
						</div>
						<hr />
						<div className='items-center w-full p-8 space-y-4 text-gray-500 md:inline-flex md:space-y-0'>
							<h2 className='max-w-sm mx-auto md:w-4/12'>
								Upload an Image to be Displayed
							</h2>
							<div className='max-w-sm mx-auto space-y-5 md:w-2/3'>
								<div className=' relative '>
									<Uploader value={state.aws_image_url} />
								</div>
							</div>
						</div>
						<hr />
						<div className='w-full px-4 pb-4 ml-auto text-gray-500 md:w-1/3'>
							<button
								// onClick={bigSubmit}
								type='submit'
								className='py-2 px-4  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg '
							>
								{isUpdateEvent ? "Update" : "Submit"}
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
			{isUpdateEvent ? (
				<button
					type='button'
					className='login py-2 px-4 mb-10  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 '
					onClick={() => {
						setShowForm(false);
						setIsUpdateEvent(false);
						setState({});
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
					Create New Event
				</button>
			)}

			<h1>All Events</h1>
			<hr />

			{showForm ? displayEventForm() : displayEvents()}
		</div>
	);
}

export default Event;
