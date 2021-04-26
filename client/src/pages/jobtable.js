	const displayJobs = () => {

		return jobs.length > 0 ? (

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
					const { _id, position, team, location, description, to, from } = el;	
    return (
          <tbody>
            <tr key={_id}>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <a href="#" className="block relative">
                      <img
                        alt="profil"
                        src={"/images/person/8.jpg"}
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
                <p className="text-gray-900 whitespace-no-wrap">{team}</p>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">{location}</p>
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
              <td>
                <button
                  onClick={() => handleJobUpdate(el)}
                  className="py-2 px-4 m-2  bg-green-600 hover:bg-green-500 focus:ring-green-500 focus:ring-offset-green-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                >
                  Edit
                </button>
                <button
                  onClick={() => handleJobDelete(_id)}
                  className="py-2 px-4 m-2  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
    )})}
        </table>
    </div>
  </div>
</div>
</div>
	) : (
			<h2>No Jobs available at the moment!</h2>
		);
	};
