import React from "react"

function Card() {
    return (
        <>
            <div className="max-w-sm bg-grey-50 shadow-lg p-4">
                <img src="" alt="" />
                <div className="text-2xl flex space-between">
                    <div id="collection">Juicy</div>
                    <div id="price"><span id="currency">$</span>5.99</div>
                </div>
                <div className="flex">
                    <span className="shadow bg-grey-300 border mr-2 border-grey px-2 text-black">#yellow</span>
                    <span className="shadow bg-grey-300 border mr-2 border-grey px-2 text-black">#juicy</span>
                    <span className="shadow bg-grey-300  mr-2 border-grey px-2 text-black">#fruits</span>
                </div>

            </div>
        </>
    )
}

export default Card;