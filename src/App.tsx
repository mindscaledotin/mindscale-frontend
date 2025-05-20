import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "@components/navbar";
import Home from "./routes/Home";
import Blogs from "./routes/Blogs";
import Career from "./routes/Career";
import Footer from '@components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen font-lato bg-[linear-gradient(252.82deg,_#000000_0%,_#06257F_120.75%)]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/career" element={<Career />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;