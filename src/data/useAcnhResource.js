import { useState, useEffect } from "react";

export default function useAcnhResource(type, load) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (!!load && data.length === 0 && !isLoading) {
            setIsLoading(true);
            import(`./${type}.json`)
                .then((m) => m.default)
                .then((val) =>
                    val.map((item) => ({
                        ...item,
                        filename: item["file-name"],
                        type: type,
                    }))
                )
                .then((val) => setData(val))
                .finally(() => setIsLoading(false));
        }
    }, [load, data.length, isLoading, type]);

    return [data, isLoading];
}
