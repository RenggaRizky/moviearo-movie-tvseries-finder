import Filter from "components/Filter";
import PopularMoviePage from "layouts/PopularMoviePage";
import Wrapper from "layouts/Wrapper";
import React from "react";

export default function PopularMovie() {
    return (
        <Wrapper>
            <section className="lg:max-w-5xl lg:mx-auto  xl:max-w-7xl">
                <Filter />
                <PopularMoviePage />
            </section>
        </Wrapper>
    );
}
