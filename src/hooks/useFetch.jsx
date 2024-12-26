import { useState, useEffect } from "react";

/**
 *
 * @param url
 * @param params {
 *     body: string[object]|null,
 *     cache,
 *     credentials,
 *     headers: object,
 *     integrity: string,
 *     keepalive: boolean,
 *     method: string,
 *     mode: object,
 *     priority,
 *     redirect,
 *     referrer: string,
 *     referrerPolicy,
 *     signal,
 *     window
 * }
 * @return {{unknown, unknown, boolean}}
 */
const useFetch = (url, params = {}) => {
    const [data, setData] = useState(null);

    const [error, setError] = useState(null);

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (!url) return;

        const fetchData = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const response = await fetch(url, params);

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const result = await response.json();
                setData(result);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [url, JSON.stringify(params)]);

    return { data, error, isLoading };
}

export default useFetch;
