import React from 'react'

function Who() {
    return (
        <div className="flex flex-col items-center w-1/2">
            <h2>Who are you?</h2>
            <div className="flex space-between w-100">
                <button className="bg-blue-600 text-white text-base text-lg font-semibold my-5 mx-5 py-3 px-7 uppercase rounded-lg shadow-2xl hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-green-200">Freelancer</button>
                <button className="bg-blue-600 text-white text-base text-lg font-semibold my-5 py-3 px-7 uppercase rounded-lg shadow-2xl hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-green-200">Freelancer</button>
            </div>
        </div>
    )
}

export default Who