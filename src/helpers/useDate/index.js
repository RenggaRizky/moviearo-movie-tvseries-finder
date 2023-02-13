import { useState } from "react";

export default function useDate() {
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    function addZero(month) {
        return String(month).padStart(2, "0");
    }

    const [currentDate, setCurrentDate] = useState(
        `${year}-${addZero(month)}-${day}`
    );
    const [nextMonth, setNextMonth] = useState(
        month > 12
            ? `${year + 1}-${addZero(1)}-${day}`
            : `${year}-${addZero(month + 1)}-${day}`
    );
    const [prevMonth, setPrevMonth] = useState(
        month === 1
            ? `${year - 1}-${addZero(12)}-${day}`
            : `${year}-${addZero(month - 1)}-${day}`
    );
    const [threeMonthLater, setThreeMonthLater] = useState(
        month > 9
            ? `${year + 1}-${addZero(month + 3 - 12)}-${day}`
            : `${year}-${addZero(month + 3)}-${day}`
    );

    return { currentDate, nextMonth, prevMonth, threeMonthLater };
}
