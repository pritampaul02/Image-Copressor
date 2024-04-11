import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Compress from "./pages/Compress";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Download from "./pages/Download";
import Login from "./pages/Login";
import "./style/global.css";
import Error from "./pages/Error";

const App = () => {
    return (
        <Router>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/compress" element={<Compress />} />
                <Route path="/uploaded-images" element={<Download />} />
                <Route path="/*" element={<Error />} />
                <Route path ="/login" element={<Login/>}/>
            </Routes>

            <Footer />
        </Router>
    );
};

export default App;
