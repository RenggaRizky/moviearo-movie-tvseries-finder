import React from "react";

export default function Hero() {
    return (
        <section className="px-6 xl:mb-32">
            <div className="md:grid md:grid-cols-2 md:justify-around md:items-center">
                <div className="flex justify-center md:order-2 md:justify-end">
                    <img
                        src="images/hero.svg"
                        alt="Hero"
                        className="w-3/4 sm:w-3/5 md:w-4/5"
                    />
                </div>
                <div className="mt-11 md:order-1">
                    <p className="text-primary mb-4 md:text-sm lg:text-base xl:text-lg">
                        Selamat datang
                    </p>
                    <h1 className="text-white font-bold text-[2rem] leading-10 mb-4 md:text-3xl lg:text-5xl lg:mb-5 xl:text-6xl">
                        Kami menyediakan jutaan informasi dunia{" "}
                        <span className="text-primary mr-1 inline-block">
                            perfilman
                        </span>
                        mancanegara
                    </h1>
                    <p className="text-lightgray leading-5 mb-8 md:text-sm lg:text-base xl:text-xl">
                        Segera telusuri informasi akurat yang kamu inginkan
                        terkait film, serial, aktor, aktris, dan yang lain
                        disini
                    </p>
                    <form className="mb-16">
                        <div className="flex gap-x-2">
                            <input
                                type="text"
                                className="basis-4/5  -skew-x-12 bg-lightblack border rounded-b-xl rounded-tl-xl rounded-tr-md border-lightblack  text-lightgray text-sm  focus:ring-primary focus:border-primary block w-full py-2.5 lg:text-base"
                                placeholder="Cari film, serial tv, ..."
                            />
                            <button
                                type="submit"
                                className="basis-1/5 bg-primary  rounded-t-xl rounded-br-xl rounded-bl-md -skew-x-12 flex justify-center items-center hover:bg-secondary group"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    className="text-white w-4 skew-x-12 group-hover:scale-125 ease-in-out transition-all duration-150 delay-150"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />{" "}
                                </svg>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
