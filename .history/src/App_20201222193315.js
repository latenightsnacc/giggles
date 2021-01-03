import Start from "./components/Start";
import bgImg from "./assets/Taieri.png"
import React, {Component} from 'react'

class App extends Component {
  render() {
    return (
      <div className="wrapper min-h-screen  w-full flex flex-col justify-center items-center" style={{background:`linear-gradient(to right, blue 50%, #fff 50%)`}}>
          <div className="w-5/6">
            <h1 className="text-4xl p-5 text-white font-semi-bold">Be <span className="font-bold">Discovered</span></h1>
          </div>
          
          
          <div className="w-5/6 mx-auto h-auto shadow-2xl" style={{background:`linear-gradient(to right, #fff 50%, blue 50%)`}}>
            <Start />
          </div>
      </div>
    )
  }

  
}

export default App;
