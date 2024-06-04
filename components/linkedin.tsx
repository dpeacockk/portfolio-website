import Image from "next/image";
import React from "react";

export function LinkedIn() {
    return (
        <a href="https://www.linkedin.com/in/danieldpeacock/">
            <Image 
                src="/linkedin.png"
                width={70}
                height={70}
                alt=""
            />
        </a>
    );
}