"use client";

import { useRouter } from "next/navigation";
import { animatePageOut } from "../app/animation";

export default function TransitionLink({
    href,
    label,
}) {
    const router = useRouter();

    const handleClick = () => {
        animatePageOut(href, router);
    };

    return (
        <button onClick={handleClick}>
            {label}
        </button>
    );
}