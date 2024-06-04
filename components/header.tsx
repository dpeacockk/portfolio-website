import Image from "next/image";
import Link from "next/link";
import React from "react";

export function Header() {
    return (
        <div>
           <ul className="flex border-b border-black">
                <li className="-mb-px mr-1">
                    <a className="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold" href="#">
                        <Link href="/experience">Home</Link>
                    </a>
                </li>
                <li className="mr-1">
                    <a className="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold" href="#">
                        <Link href="/experience">Experience</Link>
                    </a>
                </li>
                <li className="mr-1">
                    <a className="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold" href="#">
                        <Link href="/experience">Education</Link>
                    </a>
                </li>
                <li className="mr-1">
                    <a className="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold" href="#">
                        <Link href="/experience">About Me</Link>
                    </a>
                </li>
                <li className="mr-1">
                    <a className="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold" href="#">
                        <Link href="/experience">Contact</Link>
                    </a>
                </li>
                </ul>
        </div>
    );
}