'use client'

import { useEffect, useRef, useState } from "react";


export default function BodyContent({children}: any) {

    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const onWindScroll = () => {
            const element = ref.current;
            if (element) {
                const { top } = element.getBoundingClientRect();
                const isVisible = top < window.innerHeight;
                setIsVisible(isVisible);
            }
        };
 
        window.addEventListener("scroll", onWindScroll);
        return () => {
            window.removeEventListener("scroll", onWindScroll);
        };
    }, []);

    const classes = `transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`;
    
    return (
        <div className='py-3 lg:pl-20 pl-5 lg:pr-20 pr-5 bg-gradient-to-r from-steal-500/[.8] to-emerald-800/[.4]'>
            <div ref={ref} className={classes}>
                {children}
            </div>
        </div>
    )
}