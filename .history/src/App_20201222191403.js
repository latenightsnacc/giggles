import Welcome from "./components/Welcome";
import bgImg from "./assets/Taieri.png"
import React, {Component} from 'react'

class App extends Component {
  render() {
    return (
      <div className="wrapper" style={{background:`linear-gradient(#e66465 80%, #9198e5 80%)`}}>
          <h1>Hello World!</h1>
      </div>
    )
  }

  
}

export default App;
