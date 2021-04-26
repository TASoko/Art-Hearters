import React from "react";
import "./style.css";

function JobCard({ data }) {
	const [showModal, setShowModal] = React.useState(false);
	// const [cardTitle, setCardTitle] = React.useState(false);

	return (
    <div>
      <div>
        <div className="flex relative">
          <img
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={data?.aws_image_url}
          />
          <div
            className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-100 "
            onClick={() => setShowModal(true)}
          >
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              {data?.position}
            </h2>
            <p className="leading-relaxed">
              {data?.description.substr(0, 100)} ...
            </p>
          </div>
        </div>
      </div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="modal border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-dotted border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">{data?.job}</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    Location: {data?.location}
                  </p>
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    From: {data?.from} To: {data?.to}
                  </p>
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    {data?.description}
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  {/* <button
										className='bg-emerald-500 text-black active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
										type='button'
										onClick={() => setShowModal(false)}
									>
										Add
									</button> */}
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
}

export default JobCard;
