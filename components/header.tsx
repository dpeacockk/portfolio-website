import Image from "next/image";
import Link from "next/link";
import React from "react";

export function Header() {
    return (
        <div>
           <ul className="flex border-b border-black">
                <li className="-mb-px mr-1">
                    <Link href="/" className="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold">
                        Home
                    </Link>
                </li>
                <li className="mr-1">
                    <Link href="/experience" className="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold">
                        Experience
                    </Link>
                </li>
                <li className="mr-1">
                    <Link href="/education" className="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold">
                        Education
                    </Link>
                </li>
                <li className="mr-1">
                    <Link href="/projects" className="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold">
                        Projects
                    </Link>
                </li>
                <li className="mr-1">
                    <Link href="/about" className="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold">
                        About Me
                    </Link>
                </li>
                <li className="mr-1">
                    <Link href="/contact" className="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold">
                        Contact
                    </Link>
                </li>
            </ul>
        </div>
    );
}