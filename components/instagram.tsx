import Image from "next/image";
import React from "react";

export function Instagram() {
    return (
        <a href="https://www.instagram.com/danpeacockk/">
            <Image 
                src="/instagram.png"
                width={100}
                height={100}
                alt=""
            />
        </a>
    );
}