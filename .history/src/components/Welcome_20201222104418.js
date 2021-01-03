import React from "react"
import Girl from "../assets/girl.png"

function Welcome() {
    return(
        <>
            <div className="flex flex-col items-center w-100">
                <div className="container-sm">
                    <img src={Girl} alt="avatar" style={{height:"300px"}} />
                </div>
                <button 
                    className="bg-green-900 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50 rounded-lg px-10 py-5 my-5 text-white max-w-sm hover:bg-green-700">
                        Get Started
                </button>
            </div>
            
        </>
    ) 
}

export default Welcome