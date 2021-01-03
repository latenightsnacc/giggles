import Welcome from "./components/Welcome";
import bgImg from "./assets/Taieri.png"

function App() {
  return (
    <div className="bg-white bg-opacity-25 h-screen flex items-center justify-center bg-cover bg-no-repeat" style={{backgroundImage: `url(${bgImg})`}}>
      <div className=" bg-white bg-opacity-25 border-0  w-5/6 shadow-xl h-auto  rounded-lg">
        <h1 className="text-blue-600 text-6xl capitalize text-center py-10 font-bold">be discovered</h1>
        <Welcome />
        
      </div>
    </div>
  );
}

export default App;
