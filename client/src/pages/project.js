import React from "react";
import axios from "axios";
import "./project.css";
import Navbar from "../components/Navbar/navbar";

function Project() {
	const [projects, setProjects] = React.useState([]);

	React.useEffect(() => {
		const token = localStorage.getItem("token");

		//Get all the user Projects

		//  IIFE : Immediately Invoke Function Expression
		(async () => {
			try {
				const res = await axios.get("/api/projects");
				setProjects(res.data.data);
			} catch (err) {
				console.log(err);
			}
		})();
	}, []);
	return (
		<div>
			{/* {<Navbar />} */}

			<h1>All Projects</h1>

			{projects.length > 0 ? (
				<table border>
					<tr>
						<th>Project</th>
						<th>Description</th>
						<th>Location</th>
						<th>To</th>
						<th>From</th>
					</tr>
					{projects.map(({ _id, project, location, description, to, from }) => (
						<tr key={_id}>
							<td>{project}</td>
							<td>{description}</td>
							<td>{location}</td>
							<td>
								{new Date(to).toLocaleString("en-us", { month: "long", year: "numeric", day: "numeric" })}
							</td>
							<td>
								{new Date(from).toLocaleString("en-us", {
									month: "long",
									year: "numeric",
                                    day: "numeric"
								})}
							</td>
						</tr>
					))}
				</table>
			) : (
				<h2>No projects available at the moment!</h2>
			)}
		</div>
	);
}

export default Project;
