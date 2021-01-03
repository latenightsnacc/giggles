import Welcome from "./components/Welcome";
import bgImg from "./assets/Taieri.png"

function App() {
  return (
    <div className="bg-grey-100 h-screen flex items-center justify-center " >
      <div className=" bg-white  border-0  w-5/6 shadow-xl h-auto  rounded-lg" style={{backgroundImage: `url(${bgImg})`}}>
        <h1 className="text-blue-500 text-6xl text-center py-10 font-bold uppercase">be discovered</h1>
        <Welcome />
        
      </div>
    </div>
  );
}

export default App;
