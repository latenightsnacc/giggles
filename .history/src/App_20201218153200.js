import Card from './components/Card'
import Greeting from './components/Greeting';
import ToDoApp from './components/ToDoApp';


function App() {
  return (
    <div className="App">
      <div className="">
        <Greeting />
      </div>
      <ToDoApp />
      <div className="flex container m-auto w-full py-5">
        <Card />
      </div>
    </div>
  );
}

export default App;
