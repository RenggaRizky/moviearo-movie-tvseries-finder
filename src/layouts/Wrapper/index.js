import FooterMenu from "layouts/FooterMenu";
import NavbarMenu from "layouts/NavbarMenu";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Wrapper({ children }) {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }, [location.pathname]);

    return (
        <>
            <header className="lg:max-w-5xl lg:mx-auto  xl:max-w-7xl">
                <NavbarMenu />
            </header>
            <main>{children}</main>
            <footer>
                <FooterMenu />
            </footer>
        </>
    );
}
