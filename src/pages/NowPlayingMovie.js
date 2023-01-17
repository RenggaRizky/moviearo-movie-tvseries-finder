import Filter from "components/Filter";
import NowPlayingMoviePage from "layouts/NowPlayingMoviePage";

import Wrapper from "layouts/Wrapper";
import React from "react";

export default function NowPlayingMovie() {
    return (
        <Wrapper>
            <section className="lg:max-w-5xl lg:mx-auto  xl:max-w-7xl">
                <Filter />
                <NowPlayingMoviePage />
            </section>
        </Wrapper>
    );
}
