export const runtime = (minute) => {
    return (Number(minute) / 60).toFixed(2).toString().replace(".", "j ") + "m";
};
