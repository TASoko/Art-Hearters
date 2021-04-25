import React from "react";
import axios from "axios";
import "./loggedin.css";
import CreateNavbar from "../components/CreateNavbar";
import SavedTabs from "../assets/saved-tabs.png";
import Card from "../components/Card/card";
import ProjectCard from "../components/Card/projectcard";
import JobCard from "../components/Card/jobcard";
import EventCard from "../components/Card/eventcard";

function LoggedIn({ history }) {
	const [data, setData] = React.useState({});

	const getAllData = async () => {
		const res = await axios.get("/api/projects/all");

		if (res.data) {
			const data = res.data;
			const maxLength = 6;
			const projects =
				data.projects.length > maxLength
					? data.projects.slice(0, maxLength)
					: data.projects;
			const jobs =
				data.jobs.length > maxLength
					? data.jobs.slice(0, maxLength)
					: data.jobs;
			const events =
				data.events.length > maxLength
					? data.events.slice(0, maxLength)
					: data.events;

			setData({
				projects: [...projects],
				jobs: [...jobs],
				events: [...events],
			});
		}
	};

	React.useEffect(() => {
		getAllData();
	}, []);
	return (
		<div style={{ backgroundColor: "white" }}>
			<CreateNavbar />
			<h1 style={{ fontSize: "60px" }}>Welcome to Back</h1>
			<div className='buttons'>
				<button
					type='button'
					onClick={() => history.push("jobs")}
					className='jobs py-4 px-6  bg-pink-600 hover:bg-pink-700 focus:ring-pink-500 focus:ring-offset-pink-200 text-black w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  '
				>
					Jobs
				</button>

				<button
					type='button'
					onClick={() => history.push("events")}
					className='events py-4 px-6  bg-pink-600 hover:bg-pink-700 focus:ring-pink-500 focus:ring-offset-pink-200 text-black w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  '
				>
					Events
				</button>

				<button
					type='button'
					onClick={() => history.push("project")}
					className='projects py-4 px-6  bg-pink-600 hover:bg-pink-700 focus:ring-pink-500 focus:ring-offset-pink-200 text-black w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  '
				>
					Projects
				</button>
				{/* <div> 
        <img
          src={SavedTabs}
          alt="a screenshot of tabs where you could save events"
        />
         </div> */}
			</div>
			<h1>Projects</h1>
			<div className='flex flex-wrap -m-4'>
				{data.projects &&
					data.projects.map((project, i) => (
						<div key={i} className='lg:w-1/3 sm:w-1/2 p-4'>
							<ProjectCard data={project} />
						</div>
					))}
			</div>
			<h1>Jobs</h1>
			<div className='flex flex-wrap -m-4'>
				{data.jobs &&
					data.jobs.map((job, i) => (
						<div key={i} className='lg:w-1/3 sm:w-1/2 p-4'>
							<JobCard data={job} />
						</div>
					))}
			</div>
			<h1>Events</h1>
			<div className='flex flex-wrap -m-4'>
				{data.events &&
					data.events.map((event, i) => (
						<div key={i} className='lg:w-1/3 sm:w-1/2 p-4'>
							<EventCard data={event} />
						</div>
					))}
			</div>
		</div>
	);
}

export default LoggedIn;
