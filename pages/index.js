import Hero from "@/components/hero"
import Link from "next/link"

export default function Home() {
    return(
    <>
    <Hero
        title="CUBE"
        subtitle="アウトプットしていくサイト"
        imageOn
    />
    <Link href="/about">About</Link>
    <p></p>
    <Link href="./blog">Blog</Link>
    </>
    )
}