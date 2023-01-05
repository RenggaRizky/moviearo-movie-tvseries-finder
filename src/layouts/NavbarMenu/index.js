import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import mobileLogo from "assets/images/logo-small.svg";
import desktopLogo from "assets/images/logo.svg";

export default function NavbarMenu() {
    const [dropdownMovie, setDropdownMovie] = useState(false);
    const [dropdownSeries, setDropdownSeries] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    const handleDropdownMovie = () => {
        setDropdownMovie(!dropdownMovie);
        setDropdownSeries(false);
    };

    const handleDropdownSeries = () => {
        setDropdownSeries(!dropdownSeries);
        setDropdownMovie(false);
    };

    return (
        <nav className="px-2 bg-darkblack border-gray-200 ">
            <div className="container flex flex-wrap items-center justify-between mx-auto p-6">
                <Link to="/" className="flex items-center">
                    <img
                        src={mobileLogo}
                        className="md:hidden h-6"
                        alt="Moviearo Logo"
                    />
                    <img
                        src={desktopLogo}
                        className="hidden md:inline-block h-7"
                        alt="Moviearo Logo"
                    />
                </Link>
                <button
                    data-collapse-toggle="navbar-dropdown"
                    type="button"
                    className="inline-flex items-center p-2 ml-3 text-sm text-primary hover:bg-lightblack hover:text-gray-500 rounded-lg md:hidden  focus:outline-none f"
                    aria-controls="navbar-dropdown"
                    aria-expanded="false"
                    onClick={() => setShowMenu(!showMenu)}
                >
                    <svg
                        className="w-6 h-6"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                </button>
                <div
                    className={[
                        showMenu ? "" : "hidden",
                        "w-full md:block md:w-auto",
                    ].join(" ")}
                    id="navbar-dropdown"
                >
                    <ul className="flex flex-col p-4 mt-4 border border-lightblack rounded-lg bg-lightblack md:bg-transparent md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
                        <li>
                            <NavLink
                                to="/"
                                className={(isActive) =>
                                    isActive
                                        ? "block py-2 pl-3 pr-4 text-primary hover:bg-darkblack md:hover:bg-transparent md:hover:text-primary md:p-0"
                                        : "block py-2 pl-3 pr-4 text-white hover:bg-darkblack md:hover:bg-transparent md:hover:text-primary md:p-0"
                                }
                                aria-current="page"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="relative">
                            <button
                                id="dropdownNavbarLink"
                                data-dropdown-toggle="dropdownNavbar"
                                className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-white hover:bg-darkblack md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0 md:w-auto"
                                onClick={handleDropdownMovie}
                            >
                                Film
                                <svg
                                    className={[
                                        dropdownMovie ? "rotate-180 " : "",
                                        "w-5 h-5 ml-1 transition-all ease-in-out ",
                                    ].join(" ")}
                                    aria-hidden="true"
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
                            {/* <!-- Dropdown menu --> */}
                            <div
                                id="dropdownNavbar"
                                className={[
                                    dropdownMovie ? "" : "hidden",
                                    "md:absolute md:top-10 md:right-0 md:z-10 font-normal md:bg-lightblack divide-y divide-divider md:rounded md:shadow md:w-44",
                                ].join(" ")}
                            >
                                <ul
                                    className="py-1 text-sm text-white "
                                    aria-labelledby="dropdownLargeButton"
                                >
                                    <li>
                                        <NavLink
                                            to="/film/populer"
                                            className={(isActive) =>
                                                isActive
                                                    ? "block px-4 py-2 text-primary hover:bg-darkblack md:hover:text-primary md:hover:bg-transparent"
                                                    : "block px-4 py-2 hover:bg-darkblack md:hover:text-primary md:hover:bg-transparent"
                                            }
                                        >
                                            Populer
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/film/sedang-diputar"
                                            className={(isActive) =>
                                                isActive
                                                    ? "block px-4 py-2 text-primary hover:bg-darkblack md:hover:text-primary md:hover:bg-transparent"
                                                    : "block px-4 py-2 hover:bg-darkblack md:hover:text-primary md:hover:bg-transparent"
                                            }
                                        >
                                            Sedang Diputar
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/film/yang-akan-datang"
                                            className={(isActive) =>
                                                isActive
                                                    ? "block px-4 py-2 text-primary hover:bg-darkblack md:hover:text-primary md:hover:bg-transparent"
                                                    : "block px-4 py-2 hover:bg-darkblack md:hover:text-primary md:hover:bg-transparent"
                                            }
                                        >
                                            Yang Akan Datang
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/film/top-rating"
                                            className={(isActive) =>
                                                isActive
                                                    ? "block px-4 py-2 text-primary hover:bg-darkblack md:hover:text-primary md:hover:bg-transparent"
                                                    : "block px-4 py-2 hover:bg-darkblack md:hover:text-primary md:hover:bg-transparent"
                                            }
                                        >
                                            Top Rating
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="relative ">
                            <button
                                id="dropdownNavbarLink"
                                data-dropdown-toggle="dropdownNavbar"
                                className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-white rounded hover:bg-darkblack md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0 md:w-auto"
                                onClick={handleDropdownSeries}
                            >
                                Serial TV
                                <svg
                                    className={[
                                        dropdownSeries ? "rotate-180 " : "",
                                        "w-5 h-5 ml-1 transition-all ease-in-out ",
                                    ].join(" ")}
                                    aria-hidden="true"
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
                            {/* <!-- Dropdown menu --> */}
                            <div
                                id="dropdownNavbar"
                                className={[
                                    dropdownSeries ? "" : "hidden",
                                    "md:absolute md:top-10 md:right-0 md:z-10 font-normal md:bg-lightblack divide-y divide-divider md:rounded md:shadow w-44",
                                ].join(" ")}
                            >
                                <ul
                                    className="py-1 text-sm text-white"
                                    aria-labelledby="dropdownLargeButton"
                                >
                                    <li>
                                        <NavLink
                                            to="/serialtv/populer"
                                            className={(isActive) =>
                                                isActive
                                                    ? "block px-4 py-2 text-primary hover:bg-darkblack md:hover:text-primary md:hover:bg-transparent"
                                                    : "block px-4 py-2 hover:bg-darkblack md:hover:text-primary md:hover:bg-transparent"
                                            }
                                        >
                                            Populer
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/serialtv/sedang-diputar"
                                            className={(isActive) =>
                                                isActive
                                                    ? "block px-4 py-2 text-primary hover:bg-darkblack md:hover:text-primary md:hover:bg-transparent"
                                                    : "block px-4 py-2 hover:bg-darkblack md:hover:text-primary md:hover:bg-transparent"
                                            }
                                        >
                                            Sedang Diputar
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/serialtv/top-rating"
                                            className={(isActive) =>
                                                isActive
                                                    ? "block px-4 py-2 text-primary hover:bg-darkblack md:hover:text-primary md:hover:bg-transparent"
                                                    : "block px-4 py-2 hover:bg-darkblack md:hover:text-primary md:hover:bg-transparent"
                                            }
                                        >
                                            Top Rating
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
