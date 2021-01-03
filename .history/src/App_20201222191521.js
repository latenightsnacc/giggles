import Welcome from "./components/Welcome";
import bgImg from "./assets/Taieri.png"
import React, {Component} from 'react'

class App extends Component {
  render() {
    return (
      <div className="wrapper min-h-screen w-full" style={{background:`linear-gradient(to right, blue 50%, #fff 50%)`}}>
          <h1>Hello World!</h1>
      </div>
    )
  }

  
}

export default App;
