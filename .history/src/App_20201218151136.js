import Card from './components/Card'
import Greeting from './components/Greeting';


function App() {
  return (
    <div className="App">
      <div className="">
        <Greeting />
      </div>
      <div className="flex container m-auto w-full py-5">
        <Card />
      </div>
    </div>
  );
}

export default App;
