import React from "react"

function Card() {
    return (
        <>
            <div className="max-w-sm bg-grey-50 shadow-lg p-4">
                <img src="" alt="" />
                <div className="text-lg font-bold flex space-x-28 my-5">
                    <div id="collection">Juicy</div>
                    <div id="price" className="text-l font-bold"><span id="currency">$</span>5.99</div>
                </div>
                <div className="flex">
                    <span className="shadow bg-grey-300 border mr-2 border-grey px-2 text-black hover:bg-black hover:text-white">#yellow</span>
                    <span className="shadow bg-grey-300 border mr-2 border-grey px-2 text-black hover:bg-black hover:text-white">#juicy</span>
                    <span className="shadow bg-grey-300  mr-2 border-grey px-2 text-black hover:bg-black hover:text-white">#fruits</span>
                </div>

            </div>
        </>
    )
}

export default Card;