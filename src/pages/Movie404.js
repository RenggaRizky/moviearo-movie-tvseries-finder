import React from "react";
import { redirect, useLocation } from "react-router-dom";

export default function Movie404() {
    const location = useLocation();
    const path = location.pathname;

    console.log(path);

    if (path === "/film") {
        return redirect("/film/populer");
    }

    return <div className="text-white">test</div>;
}
