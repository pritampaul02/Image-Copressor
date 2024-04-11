import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Compress from "./pages/Compress";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Download from "./pages/Download";

import "./style/global.css";
import Error from "./pages/Error";
import Login from "./pages/Login";

const App = () => {
    return (
        <Router>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/compress" element={<Compress />} />
                <Route path="/uploaded-images" element={<Download />} />
                <Route path="/login" element={<Login />} />
                <Route path="/*" element={<Error />} />
            </Routes>

            <Footer />
        </Router>
    );
};

export default App;
