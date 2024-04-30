"use client";

import Image from "next/image";
import Link from "next/link";

export const LinkRenderer = ({
    href,
    className,
    children,
    ...props
}) => {
    if(!href) {
        
        return false
    };
    return <Link href={href} className={className} {...props}>
        {children}
    </Link>
};

export const ImageRenderer = ({
    src,
    alt,
    height,
    width,
    loading,
    className,
    ...props
}) => {
    const imgProps = {
        loading,
        className,
        src: src || "",
        alt: alt || "",
        width: width === "auto" ? undefined : width,
        height: height === "auto" ? undefined : height,

        // Note: this will fill the image to its parent element container
        // so you'll need to style the parent container with the desired size.
        fill: width === "auto" || height === "auto",
        ...props,
    };

    return <Image {...imgProps} />;
};
