import type { Metadata } from "next";

export const metadata: Metadata = {
 title: 'Pricing Page',
 description: 'Pricing page of Febreiro Web',
 authors: [{ name: "Samuel Febreiro", url: "https://nextjs.org" }],
 robots: "index, follow"
}

export default function PricingPage() {
    return (
        <>
            <span className="text-7xl">Pricing Page</span>
        </>
    )
}