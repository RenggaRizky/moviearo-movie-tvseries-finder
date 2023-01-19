import TopRatedTvSeries from "pages/TopRatedTvSeries";
import Home from "pages/Home";
import Movie from "pages/Movie";
import NowPlayingMovie from "pages/NowPlayingMovie";
import NowPlayingTvSeries from "pages/NowPlayingTvSeries";
import PopularMovie from "pages/PopularMovie";
import PopularTvSeries from "pages/PopularTvSeries";
import Series from "pages/Series";
import TopRatedMovie from "pages/TopRatedMovie";
import UpcomingMovie from "pages/UpcomingMovie";
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
                <Route
                    path="/film/sedang-diputar"
                    element={<NowPlayingMovie />}
                />
                <Route
                    path="/film/yang-akan-datang"
                    element={<UpcomingMovie />}
                />
                <Route path="/film/top-rating" element={<TopRatedMovie />} />

                <Route path="/serialtv/:id" element={<Series />} />
                <Route path="/serialtv/populer" element={<PopularTvSeries />} />
                <Route
                    path="/serialtv/hari-ini"
                    element={<NowPlayingTvSeries />}
                />
                <Route
                    path="/serialtv/top-rating"
                    element={<TopRatedTvSeries />}
                />
            </Routes>
        </div>
    );
}

export default App;
