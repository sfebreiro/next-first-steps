import type { Metadata } from "next";

export const metadata: Metadata = {
 title: 'About Page',
 description: 'About page of Febreiro Web',
 authors: [{ name: "Samuel Febreiro", url: "https://nextjs.org" }]
}

export default function AboutPage() {
    return (
            <span className="text-7xl">About Page</span>
        )
}