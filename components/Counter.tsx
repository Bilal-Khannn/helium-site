'use client';
import { useState, useEffect, useRef } from 'react';

const Count = ({ value }: { value: number }) => {
    // Number displayed by component
    const [count, setCount] = useState(0);
    const countRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let start = 0;
        const end = value;
        let observer: IntersectionObserver;

        const handleIntersection = (entries: IntersectionObserverEntry[]) => {
            const [entry] = entries;
            if (entry.isIntersecting) {
                if (start === end) return;

                // Determine duration per increment
                const totalMilSecDur = 1000; // Total duration in milliseconds
                const incrementTime = totalMilSecDur / end;

                // Timer increments start counter then updates count
                // Ends if start reaches end
                const timer = setInterval(() => {
                    start += 1;
                    setCount(start);
                    if (start === end) clearInterval(timer);
                }, incrementTime);

                // Cleanup function to clear interval when component unmounts
                return () => clearInterval(timer);
            }
        };

        if (countRef.current) {
            observer = new IntersectionObserver(handleIntersection, {
                threshold: 0.5
            });
            observer.observe(countRef.current);
        }

        return () => {
            if (observer && countRef.current) {
                observer.unobserve(countRef.current);
            }
        };
    }, [value]);

    return (
        <div ref={countRef}>
            <h3>
                <i>{count}</i>
            </h3>
        </div>
    );
};

export default Count;
