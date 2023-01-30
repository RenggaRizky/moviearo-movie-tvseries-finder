import Filter from "components/Filter";
import UpcomingMoviePage from "layouts/UpcomingMoviePage";
import Wrapper from "layouts/Wrapper";
import React from "react";

export default function UpcomingMovie() {
    return (
        <Wrapper>
            <section className="lg:max-w-5xl lg:mx-auto  xl:max-w-7xl lg:flex lg:justify-between lg:mt-16">
                {/* <div className="lg:basis-[35%] xl:basis-[30%]">
                    <Filter />
                </div> */}

                {/* <div className="lg:basis-[65%] xl:basis-[70%]">
                    <UpcomingMoviePage />
                </div> */}
                <div className="lg:basis-full">
                    <UpcomingMoviePage />
                </div>
            </section>
        </Wrapper>
    );
}
