import React from "react"
import Girl from "../assets/girl.png"

function Welcome() {
    return(
        <>
            <div className="flex flex-col items-center w-100">
                <div className="container-sm">
                    <img src={Girl} alt="avatar" style={{height:"500px"}} />
                </div>
                <button 
                    className="bg-green-600 text-white text-base font-semibold my-5 py-3 px-7 uppercase rounded-lg shadow-2xl hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-green-200">
                        Get Started
                </button>
            </div>
            
        </>
    ) 
}

export default Welcome