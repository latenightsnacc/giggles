import Card from './components/Card'
import Greeting from './components/Greeting';
import ToDoApp from './components/ToDoApp';


function App() {
  return (
    <div className="App">
      {/* <div className="">
        <Greeting />
      </div> */}
      {/* <ToDoApp /> */}
      <div className="flex container m-auto w-full py-5">
        <Card collection="Juicy" price="$5.99" imgUrl="https://i.pinimg.com/564x/32/06/6d/32066d1843772afcf916218563e4a85f.jpg" />
      </div>
    </div>
  );
}

export default App;
