import React from 'react'
export default function SearchMenu() {
    return (
        <form className="mb-16">
            <div className="flex gap-x-2 px-6">
                <input
                    type="text"
                    className="xl:basis-[90%]  bg-lightblack border border-lightblack  text-lightgray text-sm  focus:ring-primary focus:border-primary block w-full py-2.5 lg:text-base"
                    placeholder="Cari film, serial tv, ..."
                />
                    <button
                        type="submit"
                        className="hidden xl:basis-[10%] bg-primary xl:flex justify-center items-center hover:bg-secondary group"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            className="text-white w-4 group-hover:scale-125 ease-in-out transition-all duration-150 delay-150"
                            viewBox="0 0 16 16"
                        >
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />{" "}
                        </svg>
                    </button>
            </div>
        </form>
    )
}
