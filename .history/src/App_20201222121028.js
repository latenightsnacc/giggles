import Welcome from "./components/Welcome";
import bgImg from "./assets/Taieri.png"

function App() {
  return (
    <div className="bg-grey-50 min-h-screen flex flex-col items-center justify-center bg-left bg-cover" style={{backgroundImage: `url(${bgImg})`}}>
      <h1 className="text-blue-500 text-6xl text-center py-10 font-bold uppercase">be discovered</h1>
      <div className=" bg-white  border-0  w-5/6 shadow-xl h-auto  rounded-lg mb-5" style={{backgroundImage: `url(${bgImg})`}}>
        
        <Welcome />
        
      </div>
    </div>
  );
}

export default App;
