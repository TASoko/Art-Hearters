import React from "react";
import "./loggedin.css";
import CreateNavbar from "../components/CreateNavbar";
import SavedTabs from "../assets/saved-tabs.png";
import Modal from "../components/Modal/modal";


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
					Projects
				</button>

				<button
					type='button'
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
				<div>
					<img
						src={SavedTabs}
						alt='a screenshot of tabs where you could save events'
					/>
				</div>
			</div>
			<div className='flex flex-wrap -m-4'>
				<div className='lg:w-1/3 sm:w-1/2 p-4'>
					<div className='flex relative'>
						<img
							alt='gallery'
							className='absolute inset-0 w-full h-full object-cover object-center'
							src={"https://dummyimage.com/600x360"}
						/>
						<div className='px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100'>
							<h2 className='tracking-widest text-sm title-font font-medium text-indigo-500 mb-1'>
								THE SUBTITLE
							</h2>
							<h1 className='title-font text-lg font-medium text-gray-900 mb-3'>
								Shooting Stars
							</h1>
							<p className='leading-relaxed'>
								Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
								microdosing tousled waistcoat.
							</p>
						</div>
					</div>
				</div>
				<div className='lg:w-1/3 sm:w-1/2 p-4'>
					<div className='flex relative'>
						<img
							alt='gallery'
							className='absolute inset-0 w-full h-full object-cover object-center'
							src={"https://dummyimage.com/601x361"}
						/>
						<div className='px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100'>
							<h2 className='tracking-widest text-sm title-font font-medium text-indigo-500 mb-1'>
								THE SUBTITLE
							</h2>
							<h1 className='title-font text-lg font-medium text-gray-900 mb-3'>
								The Catalyzer
							</h1>
							<p className='leading-relaxed'>
								Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
								microdosing tousled waistcoat.
							</p>
						</div>
					</div>
				</div>
				<div className='lg:w-1/3 sm:w-1/2 p-4'>
					<div className='flex relative'>
						<img
							alt='gallery'
							className='absolute inset-0 w-full h-full object-cover object-center'
							src={"https://dummyimage.com/603x363"}
						/>
						<div className='px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100'>
							<h2 className='tracking-widest text-sm title-font font-medium text-indigo-500 mb-1'>
								THE SUBTITLE
							</h2>
							<h1 className='title-font text-lg font-medium text-gray-900 mb-3'>
								The 400 Blows
							</h1>
							<p className='leading-relaxed'>
								Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
								microdosing tousled waistcoat.
							</p>
						</div>
					</div>
				</div>
				<div className='lg:w-1/3 sm:w-1/2 p-4'>
					<div className='flex relative'>
						<img
							alt='gallery'
							className='absolute inset-0 w-full h-full object-cover object-center'
							src={"https://dummyimage.com/602x362"}
						/>
						<div className='px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100'>
							<h2 className='tracking-widest text-sm title-font font-medium text-indigo-500 mb-1'>
								THE SUBTITLE
							</h2>
							<h1 className='title-font text-lg font-medium text-gray-900 mb-3'>
								Neptune
							</h1>
							<p className='leading-relaxed'>
								Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
								microdosing tousled waistcoat.
							</p>
						</div>
					</div>
				</div>
				<div className='lg:w-1/3 sm:w-1/2 p-4'>
					<div className='flex relative'>
						<img
							alt='gallery'
							className='absolute inset-0 w-full h-full object-cover object-center'
							src={"https://dummyimage.com/605x365"}
						/>
						<div className='px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100'>
							<h2 className='tracking-widest text-sm title-font font-medium text-indigo-500 mb-1'>
								THE SUBTITLE
							</h2>
							<h1 className='title-font text-lg font-medium text-gray-900 mb-3'>
								Holden Caulfield
							</h1>
							<p className='leading-relaxed'>
								Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
								microdosing tousled waistcoat.
							</p>
						</div>
					</div>
				</div>
				<div className='lg:w-1/3 sm:w-1/2 p-4'>
					<div className='flex relative'>
						<img
							alt='gallery'
							className='absolute inset-0 w-full h-full object-cover object-center'
							src={"https://dummyimage.com/606x366"}
						/>
						<div className='px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100'>
							<h2 className='tracking-widest text-sm title-font font-medium text-indigo-500 mb-1'>
								THE SUBTITLE
							</h2>
							<h1 className='title-font text-lg font-medium text-gray-900 mb-3'>
								Alper Kamu
							</h1>
							<p className='leading-relaxed'>
								Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
								microdosing tousled waistcoat.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default LoggedIn;
