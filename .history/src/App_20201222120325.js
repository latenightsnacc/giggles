import Welcome from "./components/Welcome";
import bgImg from "./assets/Taieri.png"

function App() {
  return (
    <div className="bg-white  h-screen flex items-center justify-center bg-cover bg-no-repeat" >
      <div className=" bg-white  border-0  w-5/6 shadow-xl h-auto  rounded-lg" style={{backgroundImage: `url(${bgImg})`}}>
        <h1 className="text-green-700 text-6xl text-center py-10 font-bold">be discovered</h1>
        <Welcome />
        
      </div>
    </div>
  );
}

export default App;
