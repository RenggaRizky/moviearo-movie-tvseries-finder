import { useLocation } from "react-router-dom";

export default function useGetPathId() {
    const location = useLocation();
    const path = location.pathname.split("/")[2];

    return [path];
}
