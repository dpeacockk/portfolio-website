import Image from "next/image";
import React from "react";

export function Github() {
    return (
        <a href="https://github.com/dpeacockk/">
            <Image 
                src="/github.png"
                width={70}
                height={70}
                alt=""
            />
        </a>
    );
}