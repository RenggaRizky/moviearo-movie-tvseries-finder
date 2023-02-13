import Filter from "components/Filter";
import FilterProvider from "helpers/context/filter";
import PaginationProvider from "helpers/context/pagination";
import PopularTvSeriesPage from "layouts/PopularTvSeriesPage";

import Wrapper from "layouts/Wrapper";
import React from "react";

export default function PopularTvSeries() {
    return (
        <Wrapper>
            <FilterProvider>
                <section className="lg:max-w-5xl lg:mx-auto  xl:max-w-7xl lg:flex lg:justify-between lg:mt-16">
                    <div className="lg:basis-[35%] xl:basis-[30%]">
                        <Filter />
                    </div>

                    <PaginationProvider>
                        <div className="lg:basis-[65%] xl:basis-[70%]">
                            <PopularTvSeriesPage />
                        </div>
                    </PaginationProvider>
                </section>
            </FilterProvider>
        </Wrapper>
    );
}
