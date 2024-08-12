import { useEffect, useState } from 'preact/hooks';

export function DateInProgress() {
    const [date, setDate] = useState(new Date().toString());

    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date().toString());
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, [setDate]);

    return date;
}
