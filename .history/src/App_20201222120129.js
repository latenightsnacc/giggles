import Welcome from "./components/Welcome";
import bgImg from "./assets/Taieri.png"

function App() {
  return (
    <div className="bg-white bg-center  h-screen flex items-center justify-center bg-cover bg-no-repeat" >
      <div className=" bg-white bg-opacity-70 border-0  w-5/6 shadow-xl h-auto  rounded-lg" style={{backgroundImage: `url(${bgImg})`}}>
        <h1 className="text-blue-700 text-6xl capitalize text-center py-10 font-bold">be discovered</h1>
        <Welcome />
        
      </div>
    </div>
  );
}

export default App;
