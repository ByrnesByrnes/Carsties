"use client";

import Image from "next/image";
import { useState } from "react";

interface Props {
    src: string;
    alt: string;
}

const CarImage: React.FC<Props> = ({ src, alt }) => {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <Image
            className={`object-cover group-hover:opacity-75 duration-700 ${isLoading ? "grayscale blur-2xl scale-110" : "grayscale-0 blur-0 scale-100"}`}
            src={src}
            alt={alt}
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            onLoad={() => setIsLoading(false)}
        />
    );
};
export default CarImage;