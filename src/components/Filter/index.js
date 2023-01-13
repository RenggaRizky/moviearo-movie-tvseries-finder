import React, { useState } from "react";
import styles from "./style.module.css";

export default function Filter() {
    const [toggle, setToggle] = useState(false);
    return (
        <section className="px-7 mb-16 md:mt-16 lg:pl-7">
            <div id="accordion-collapse" data-accordion="collapse">
                <h2 id="accordion-collapse-heading-1">
                    <button
                        type="button"
                        class={[
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
                                fill-rule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                    </button>
                </h2>

                <div
                    id="accordion-collapse-body-1"
                    class={toggle ? "" : "hidden"}
                >
                    <div className="px-5 pb-5 font-light bg-lightblack rounded-b-xl">
                        <hr className="border-divider mb-8" />

                        <SortDropdown />
                        <LanguageDropdown />
                        <ScoreRange />
                        <GenreCheckbox />
                    </div>
                </div>
            </div>
        </section>
    );
}

function SortDropdown() {
    return (
        <>
            <label for="sortDropdown" className="text-lightgray text-sm mb-4">
                Urut Berdasarkan
            </label>
            <select
                id="sortDropdown"
                class="bg-darkblack border border-divider text-white mb-6 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 "
            >
                <option selected>Choose a country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
            </select>
        </>
    );
}

function LanguageDropdown() {
    return (
        <>
            <label
                for="languageDropdown"
                className="text-lightgray text-sm mb-4"
            >
                Pilih Bahasa
            </label>
            <select
                id="languageDropdown"
                class="bg-darkblack border border-divider text-white mb-6 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 "
            >
                <option selected>Tidak dipilih</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
            </select>
        </>
    );
}

function ScoreRange() {
    return (
        <>
            <label for="ScoreRange" className="text-lightgray text-sm mb-4">
                Nilai
            </label>
            <input
                className={styles}
                id="ScoreRange"
                type="range"
                defaultValue={0}
                min="0"
                max="10"
                // step="3"
            />
        </>
    );
}

function GenreCheckbox() {
    return (
        <>
            <label
                for="languageDropdown"
                className="text-lightgray text-sm mb-4"
            >
                Pilih Genre
            </label>
            <div className="flex">
                <div class="flex items-center pl-4 border border-divider rounded-full bg-divider ">
                    <input
                        id="bordered-checkbox-1"
                        type="checkbox"
                        value=""
                        name="bordered-checkbox"
                        class="w-4 h-4 text-primary bg-gray-100 border-divider rounded-full focus:ring-primary focus:ring-2"
                    />
                    <label
                        for="bordered-checkbox-1"
                        class="w-full py-2.5 mx-4 text-sm font-medium text-white"
                    >
                        Aksi
                    </label>
                </div>

                <div class="flex items-center pl-4 border border-divider rounded-full bg-divider ">
                    <input
                        id="bordered-checkbox-1"
                        type="checkbox"
                        value=""
                        name="bordered-checkbox"
                        class="w-4 h-4 text-primary bg-gray-100 border-divider rounded-full focus:ring-primary focus:ring-2"
                    />
                    <label
                        for="bordered-checkbox-1"
                        class="w-full py-2.5 mx-4 text-sm font-medium text-white"
                    >
                        Animasi
                    </label>
                </div>

                <div class="flex items-center pl-4 border border-divider rounded-full bg-divider ">
                    <input
                        id="bordered-checkbox-1"
                        type="checkbox"
                        value=""
                        name="bordered-checkbox"
                        class="w-4 h-4 text-primary bg-gray-100 border-divider rounded-full focus:ring-primary focus:ring-2"
                    />
                    <label
                        for="bordered-checkbox-1"
                        class="w-full py-2.5 mx-4 text-sm font-medium text-white"
                    >
                        Barat
                    </label>
                </div>
            </div>
        </>
    );
}
