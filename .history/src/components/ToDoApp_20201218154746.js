import React from 'react'
import ToDoItem from './ToDoItem'

export default function ToDoApp() {
    return (
        <>
            <div className="container todo-list bg-blue-700">
                <ToDoItem />
            </div>
        </>
    )
}
