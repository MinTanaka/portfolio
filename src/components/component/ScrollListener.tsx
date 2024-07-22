import { useEffect } from "react";

const ScrollListener = () => {
    useEffect(() => {
        const handleScroll = () => {
            console.log(window.scrollY);
        }
        window.addEventListener("scroll", handleScroll);
        
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }    
    }, [])

    return <div>Scroll Listener</div>
}

export default ScrollListener;
