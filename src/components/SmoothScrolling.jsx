'use client';
import { ReactLenis } from 'lenis/react';
import 'lenis/dist/lenis.css'; // <-- This is required in the new version!

export default function SmoothScrolling({ children }) {
    return (
        <ReactLenis
            root
            options={{
                lerp: 0.08, // Lower number = heavier, smoother glide
                duration: 1.5,
                smoothWheel: true,
            }}
        >
            {children}
        </ReactLenis>
    );
}