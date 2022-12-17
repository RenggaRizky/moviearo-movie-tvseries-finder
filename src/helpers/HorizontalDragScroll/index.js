import React, { useRef, useEffect } from "react";

export default function HorizontalDragScroll({ children }) {
    const sliderRef = useRef();

    let isDown = false; //cek apakah slider sudah diklik atau belum

    let startX;

    let scrollLeft;

    useEffect(() => {
        const slider = sliderRef.current.children[0].children[1];

        //onmousedown = ketika kita menekan mouse diatas suatu element
        slider.addEventListener("mousedown", (e) => {
            isDown = true;
            slider.classList.add("cursor-grabbing");
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });

        //onmouseleave = ketika pointer meninggalkan suatu element / pointer berpindah ke elemen lain
        slider.addEventListener("mouseleave", () => {
            isDown = false;
            slider.classList.remove("cursor-grabbing");
        });

        //onmouseup = ketika kita melepas mouse diatas suatu element setelah menekan elemen tersebut
        slider.addEventListener("mouseup", () => {
            isDown = false;
            slider.classList.remove("cursor-grabbing");
        });

        //onmousemove = ketika pointer bergerak diatas suatu elemen
        slider.addEventListener("mousemove", (e) => {
            if (!isDown) {
                return; //stop the function from running
            }
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 2;
            slider.scrollLeft = scrollLeft - walk;
        });
    }, []);

    return <div ref={sliderRef}>{children}</div>;
}
