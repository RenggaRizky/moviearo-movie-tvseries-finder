import BestActionMovie from "layouts/BestActionMovie";
import BestComedyMovie from "layouts/BestComedyMovie";
import BestHorrorMovie from "layouts/BestHorrorMovie";
import BestScifiMovie from "layouts/BestScifiMovie";
import Hero from "layouts/Hero";
import LatestMovie from "layouts/LatestMovie";
import LatestTrailer from "layouts/LatestTrailer";
import LatestTvSeries from "layouts/LatestTvSeries";
import PopularMovie from "layouts/PopularMovies";
import PopularTvSeries from "layouts/PopularTvSeries";
import TopRatedMovie from "layouts/TopRatedMovie";
import TopRatedTvSeries from "layouts/TopRatedTvSeries";
import Wrapper from "layouts/Wrapper";
import React from "react";

export default function Home() {
    return (
        <Wrapper>
            <Hero />
            <LatestMovie />
            <LatestTvSeries />
            <div className="bg-lightblack gap-y-6 md:bg-darkblack md:grid md:grid-cols-2 md:gap-x-4 xl:gap-x-8 xl:gap-y-8">
                <PopularMovie />
                <PopularTvSeries />
                <TopRatedMovie />
                <TopRatedTvSeries />
            </div>
            <LatestTrailer />
            <BestHorrorMovie />
            <BestScifiMovie />
            <BestActionMovie />
            <BestComedyMovie />
        </Wrapper>
    );
}
