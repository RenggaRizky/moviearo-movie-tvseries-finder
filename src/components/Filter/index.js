import BtnPrimary from "components/Button/Primary";
import CheckboxItem from "components/CheckboxItem";
import ScoreRange from "components/ScoreRange";
import React, { useState } from "react";

export default function Filter() {
    const [toggle, setToggle] = useState(false);
    const [maxScoreRange, setMaxScoreRange] = useState(100);
    const [minScoreRange, setMinScoreRange] = useState(0);
    return (
        <section className="px-7 mb-16 md:mt-16 lg:pl-7">
            <div id="accordion-collapse" data-accordion="collapse">
                <h2 id="accordion-collapse-heading-1">
                    <button
                        type="button"
                        className={[
                            toggle ? "rounded-t-xl" : "rounded-xl",
                            "flex items-center justify-between w-full p-5 font-medium text-left text-white  bg-lightblack",
                        ].join(" ")}
                        onClick={() => setToggle(!toggle)}
                    >
                        <span className="uppercase">Filter</span>
                        <svg
                            data-accordion-icon
                            className={[
                                toggle ? "rotate-180" : "",
                                "w-6 h-6 shrink-0 transition-all delay-100",
                            ].join(" ")}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </button>
                </h2>

                <div
                    id="accordion-collapse-body-1"
                    className={toggle ? "" : "hidden"}
                >
                    <div className="px-5 pb-5 font-light bg-lightblack rounded-b-xl">
                        <hr className="border-divider mb-8" />

                        <SortDropdown />

                        <hr className="border-divider my-8" />
                        <ScoreRange
                            min={0}
                            max={maxScoreRange}
                            defaultValue={minScoreRange}
                            step={10}
                            id="minScore"
                            label="Nilai Minimum"
                        />
                        <ScoreRange
                            min={0}
                            max={100}
                            defaultValue={maxScoreRange}
                            step={10}
                            id="maxScore"
                            label="Nilai Maksimum"
                        />

                        <hr className="border-divider my-8" />
                        <GenreCheckbox />

                        <hr className="border-divider my-8" />
                        <BtnPrimary value="Terapkan" />
                    </div>
                </div>
            </div>
        </section>
    );
}

function SortDropdown() {
    return (
        <div>
            <label
                htmlFor="sortDropdown"
                className="text-lightgray text-sm mb-4"
            >
                Urut Berdasarkan
            </label>
            <select
                id="sortDropdown"
                className="bg-darkblack border border-divider text-white mb-6 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 "
            >
                <option selected>Choose a country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
            </select>
        </div>
    );
}

function GenreCheckbox() {
    return (
        <div>
            <label
                htmlFor="languageDropdown"
                className="text-lightgray text-sm"
            >
                Pilih Genre
            </label>
            <div className="flex flex-wrap gap-3 mt-2">
                <CheckboxItem genre="Aksi" value="" id="aksi" />
                <CheckboxItem genre="Animasi" value="" id="animasi" />
                <CheckboxItem genre="Barat" value="" id="barat" />
                <CheckboxItem genre="Dokumenter" value="" id="dokumenter" />
                <CheckboxItem genre="Drama" value="" id="drama" />
                <CheckboxItem genre="Fantasi" value="" id="fantasi" />
                <CheckboxItem genre="Film TV" value="" id="filmTv" />
                <CheckboxItem genre="Horror" value="" id="horror" />
                <CheckboxItem genre="Keluarga" value="" id="keluarga" />
                <CheckboxItem genre="Komedi" value="" id="komedi" />
                <CheckboxItem genre="Kriminal" value="" id="kriminal" />
                <CheckboxItem genre="Misteri" value="" id="misteri" />
                <CheckboxItem genre="Musik" value="" id="musik" />
                <CheckboxItem genre="Perang" value="" id="perang" />
                <CheckboxItem genre="Petualangan" value="" id="petualangan" />
                <CheckboxItem genre="Romansa" value="" id="romansa" />
                <CheckboxItem genre="Sci-fi" value="" id="scifi" />
                <CheckboxItem genre="Thriller" value="" id="thriller" />
            </div>
        </div>
    );
}
