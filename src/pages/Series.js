import SimilarTv from "layouts/SimilarTv";
import TvCast from "layouts/TvCast";
import TvDetails from "layouts/TvDetails";
import TvPoster from "layouts/TvPoster";
import TvReview from "layouts/TvReview";
import TvTabLists from "layouts/TvTabLists";
import TvVideoList from "layouts/TvVideoList";
import Wrapper from "layouts/Wrapper";
import React from "react";

export default function Series() {
    return (
        <Wrapper>
            <TvPoster />
            <section className="lg:max-w-5xl lg:mx-auto  xl:max-w-7xl">
                <section className="lg:flex lg:gap-x-12">
                    <section className="lg:basis-[80%]">
                        <TvDetails />
                    </section>
                    {/* <aside className="hidden lg:inline-block lg:basis-[20%]">
                    <TvTabLists />
                </aside> */}
                </section>
                <TvCast />
                <TvVideoList />
                <TvReview />
                <SimilarTv />
            </section>
        </Wrapper>
    );
}
