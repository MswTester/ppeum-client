import { useEffect, useState } from "react";

export const useOnce = (callback: () => void) => {
    const [once, setOnce] = useState<boolean>(true);
    useEffect(() => setOnce(true), []);
    useEffect(() => callback, [once]);
}