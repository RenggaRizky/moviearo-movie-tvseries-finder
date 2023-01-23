import React from "react";
import Wrapper from "layouts/Wrapper";
import TitleSection from "components/TitleSection";
import MovieCardHorizontal from "components/MovieCardHorizontal";

export default function Search() {
    return (
        <Wrapper>
            <section className="lg:max-w-5xl lg:mx-auto  xl:max-w-7xl">
                <div className='px-7'>
                    <div className="mb-8">
                        <TitleSection title='Hasil pencarian'/>
                    </div>

                    <MovieCardHorizontal />
                    <MovieCardHorizontal />
                </div>
            </section>
        </Wrapper>
    );
}
