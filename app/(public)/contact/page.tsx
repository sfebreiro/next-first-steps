import type { Metadata } from "next";

export const metadata: Metadata = {
 title: 'Contact Page',
 description: 'Contact page of Febreiro Web',
 authors: [{ name: "Samuel Febreiro", url: "https://nextjs.org" }]
}

export default function ContactPage() {
    return (
        <>
            <span className="text-7xl">Contact Page</span>
        </>
    )
}