import React from "react";
import "./loggedin.css";
import CreateNavbar from "../components/CreateNavbar";
import SavedTabs from "../assets/saved-tabs.png";
import Card from "../components/Card/card";


function LoggedIn({ history }) {
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
					className='jobs py-4 px-6  bg-pink-600 hover:bg-pink-700 focus:ring-pink-500 focus:ring-offset-pink-200 text-black w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  '
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
				<div>
					<img
						src={SavedTabs}
						alt='a screenshot of tabs where you could save events'
					/>
				</div>
			</div>
			<div className='flex flex-wrap -m-4'>
				<div className='lg:w-1/3 sm:w-1/2 p-4'>
					<Card />
				</div>
				<div className='lg:w-1/3 sm:w-1/2 p-4'>
					<Card />
				</div>
				<div className='lg:w-1/3 sm:w-1/2 p-4'>
					<Card />
				</div>
				<div className='lg:w-1/3 sm:w-1/2 p-4'>
					<Card />
				</div>
				<div className='lg:w-1/3 sm:w-1/2 p-4'>
					<Card />
				</div>
				<div className='lg:w-1/3 sm:w-1/2 p-4'>
					<Card />
				</div>
			</div>
		</div>
	);
}

export default LoggedIn;
