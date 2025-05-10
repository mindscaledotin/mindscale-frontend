import Navbar from "./assets/componants/navbar";
import StarParallax from "./assets/componants/StarParallax";

function App() {
  return (
    <div className="min-h-screen bg-[linear-gradient(252.82deg,_#000000_0%,_#06257F_120.75%)]">
      <Navbar />
      <StarParallax />
      <div className="pt-20">
        {[...Array(9)].map((_, index) => (
          <div key={index} className="m-4 p-8 bg-white/10 rounded-lg backdrop-blur-sm">
            <h2 className="text-2xl text-white mb-4">Section {index + 1}</h2>
            <p className="text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
