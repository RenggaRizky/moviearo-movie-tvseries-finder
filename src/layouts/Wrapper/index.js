import FooterMenu from "layouts/FooterMenu";
import NavbarMenu from "layouts/NavbarMenu";
import React from "react";

export default function Wrapper({ children }) {
    return (
        <>
            <header className="lg:max-w-5xl lg:mx-auto  xl:max-w-7xl">
                <NavbarMenu />
            </header>
            <main className="lg:max-w-5xl lg:mx-auto  xl:max-w-7xl">
                {children}
            </main>
            <footer>
                <FooterMenu />
            </footer>
        </>
    );
}
