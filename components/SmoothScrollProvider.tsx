"use client"

import { ReactLenis } from "lenis/react"
import "lenis/dist/lenis.css"

const SmoothScrolling = ({ children }: { children: React.ReactNode }) => {
    return (
        <ReactLenis
            root
            options={{
                lerp: 0.1, // Lower = smoother/slower (0.05-0.15 is sweet spot)
                duration: 1.5, //How long each scroll gesture takes in seconds
                //syncTouch: true, //Enable smooth scroll on touch devices too
            }}
        >
            {children}
        </ReactLenis>
    )
}

export default SmoothScrolling