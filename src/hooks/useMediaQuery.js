import { useSyncExternalStore } from "react";

const getMatches = (query) => {
    if (typeof window === "undefined") {
        return false;
    }

    return window.matchMedia(query).matches;
};

const subscribe = (query, callback) => {
    if (typeof window === "undefined") {
        return () => {};
    }

    const mediaQueryList = window.matchMedia(query);
    const handleChange = () => {
        callback();
    };

    if (mediaQueryList.addEventListener) {
        mediaQueryList.addEventListener("change", handleChange);

        return () => {
            mediaQueryList.removeEventListener("change", handleChange);
        };
    }

    mediaQueryList.addListener(handleChange);

    return () => {
        mediaQueryList.removeListener(handleChange);
    };
};

const useMediaQuery = (query) => {
    return useSyncExternalStore(
        (callback) => subscribe(query, callback),
        () => getMatches(query),
        () => false,
    );
};

export default useMediaQuery;
