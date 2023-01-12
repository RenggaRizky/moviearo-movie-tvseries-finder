import Home from "pages/Home";
import Movie from "pages/Movie";
import PopularMovie from "pages/PopularMovie";
import Series from "pages/Series";
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
                <Route path="/film/:id" element={<Movie />} />
                <Route path="/film/populer" element={<PopularMovie />} />
                <Route path="/serialtv/:id" element={<Series />} />
            </Routes>
        </div>
    );
}

export default App;
