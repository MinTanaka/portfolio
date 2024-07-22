import { useState, useEffect } from 'react'

type Props = {
    showAfter: number
    className?: string
}

const ScrollToTopButton = ({ showAfter}: Props) => {
    const [isShown, setIsShown] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= showAfter) {
                setIsShown(true)
            } else {
                setIsShown(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [showAfter])

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    if (!isShown) return null

    return (
        <button onClick={handleClick}>
            ↑
        </button>
    )
}

export default ScrollToTopButton
