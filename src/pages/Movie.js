import MovieCast from "layouts/MovieCast";
import MovieDetails from "layouts/MovieDetails";
import MoviePoster from "layouts/MoviePoster";
import MovieReview from "layouts/MovieReview";
import MovieTabLists from "layouts/MovieTabLists";
import MovieVideoList from "layouts/MovieVideoList";
import SimilarMovie from "layouts/SimilarMovie";
import Wrapper from "layouts/Wrapper";
import React from "react";

export default function Movie() {
    return (
        <Wrapper>
            <MoviePoster />
            <section className="lg:flex lg:gap-x-12">
                <section className="lg:basis-[80%]">
                    <MovieDetails />
                </section>
                <aside className="hidden lg:inline-block lg:basis-[20%]">
                    <MovieTabLists />
                </aside>
            </section>
            <MovieCast />
            <MovieVideoList />
            <MovieReview />
            <SimilarMovie />
        </Wrapper>
    );
}
