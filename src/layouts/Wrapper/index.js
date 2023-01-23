import FooterMenu from "layouts/FooterMenu";
import NavbarMenu from "layouts/NavbarMenu";
import { useLocation } from "react-router-dom";
import React from "react";
import SearchMenu from "layouts/SearchMenu";


export default function Wrapper({ children }) {
    const location = useLocation();
    const path = location.pathname.split('/')[1]
    return (
        <>
            <header className="lg:max-w-5xl lg:mx-auto  xl:max-w-7xl">
                <NavbarMenu />
                { path === 'search' && <SearchMenu/>  }
            </header>
            <main>{children}</main>
            <footer>
                <FooterMenu />
            </footer>
        </>
    );
}
