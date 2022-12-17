import Home from "pages/Home";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
    useEffect(() => {
        document.body.style.background = "#0F0F0F";
    }, []);

    return (
        <div className="App font-inter">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/film/:id" />
                <Route path="/serialtv/:id" />
            </Routes>
        </div>
    );
}

export default App;
