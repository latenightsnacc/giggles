import React from 'react'

function Greeting() {
    const date = new Date()
    const hours = date.getHours()

    let timeOfDay 

    if(hours < 12){
        timeOfDay = "Good morning babe!"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "How's it going babe?"
    } else {
        timeOfDay = "You've done a great job today!"
    }

    return (
        <h1> </h1>
    )
}

export default Greeting