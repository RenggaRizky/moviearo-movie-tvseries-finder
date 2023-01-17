import Filter from "components/Filter";
import UpcomingMoviePage from "layouts/UpcomingMoviePage";
import Wrapper from "layouts/Wrapper";
import React from "react";

export default function UpcomingMovie() {
    return (
        <Wrapper>
            <section className="lg:max-w-5xl lg:mx-auto  xl:max-w-7xl">
                <Filter />
                <UpcomingMoviePage />
            </section>
        </Wrapper>
    );
}
