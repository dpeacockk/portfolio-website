import Image from "next/image";
import Link from "next/link";
import { Instagram }  from "@/components/instagram";
import { Github } from "@/components/github";
import { LinkedIn } from "@/components/linkedin";
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"


export default function Home() {
  return (
    <main>
      <div>
        <Instagram/>
        <Github/>
        <LinkedIn/>
      </div>
    </main>
  );
}
