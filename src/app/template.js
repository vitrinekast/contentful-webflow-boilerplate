// FILE: /app/template.tsx

"use client";

import { useEffect } from "react";
import { animatePageIn } from "./animation";

export default function Template({ children }) {
    useEffect(() => {
        animatePageIn();
    }, []);

    return (
        <div>
            <div
                id="transition-element"
                style={{ width: "100%", top: 0, height: "100%", left: 0, position: "fixed", background: "var(--darkgreen)", zIndex: 1000 }}
                className="w-screen h-screen bg-black z-100 fixed top-0 left-0"
            ></div>
            {children}
        </div>
    );
}
