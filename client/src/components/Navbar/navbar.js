import React from "react";
import { withRouter } from "react-router-dom";
import "./index.css";

function Navbar({ history }) {
	return (
		<div>
			<nav className='bg-white dark:bg-gray-800  shadow '>
				<div className='max-w-7xl mx-auto px-8'>
					<div className='flex items-center justify-between h-16'>
						<div className='w-full justify-between flex items-center'>
							{/* <a className='flex-shrink-0' href='/'></a>   COMMENTED OUT BC OF REACT WARNINGS (UNUSED) */}
							<div className='hidden md:block'>
								<div className='ml-10 flex items-baseline space-x-4'>
									<button
										type='button'
										className='login py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text- w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg '
										onClick={() => history.push("/login")}
									>
										Login
									</button>

									<button
										type='button'
										className='signup py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg '
										onClick={() => history.push("/signup")}
									>
										Signup
									</button>
								</div>
							</div>
						</div>
						<div className='block'>
							<div className='ml-4 flex items-center md:ml-6'></div>
						</div>
						<div className='-mr-2 flex md:hidden'>
							<button className='text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none'>
								<svg
									width='20'
									height='20'
									fill='currentColor'
									className='h-8 w-8'
									viewBox='0 0 1792 1792'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path d='M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z'></path>
								</svg>
							</button>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default withRouter(Navbar);
