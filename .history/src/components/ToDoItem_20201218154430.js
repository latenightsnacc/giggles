import React from 'react'


function ToDoItem() {
    return(
        <>
            <div className="bg-gray-100 max-w-sm">
                <input className="bg-grey-700 max-w-sm m-10" type="checkbox" placeholder="To do..." value="Hello world" />
                <p>Hello world</p>
            </div>
        </>
    )
}


export default ToDoItem