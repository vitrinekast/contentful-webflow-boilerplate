
import gsap from "gsap";

export const animatePageIn = () => {
    const transitionElement = document.getElementById("transition-element");

    if (transitionElement) {

        gsap.to(transitionElement, {
            yPercent: -100,
            duration: .4,
            ease: "ease-in-out",
        })

    }
};

export const animatePageOut = (href, router) => {
    const animationWrapper = document.getElementById("transition-element");

    if (animationWrapper) {
        gsap.set(animationWrapper, {
            yPercent: 100,
        })
        gsap.to(animationWrapper, {
            yPercent: 0,
            duration: .4,
            ease: "ease-in-out",
            onComplete: () => {
                router.push(href);
            },
        })


    }
};
