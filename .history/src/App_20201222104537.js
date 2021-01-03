import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="bg-green-100 h-screen flex items-center justify-center">
      <div className="w-5/6 shadow-xl h-auto  rounded-lg">
        <h1 className="text-green-600 text-6xl uppercase text-center py-10">be the change</h1>
        <Welcome />
        
      </div>
    </div>
  );
}

export default App;
