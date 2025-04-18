import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Lock, ShieldCheck } from "lucide-react";
import Head from "next/head";

const products = [
  {
    name: "NordVPN",
    description: "Secure your online presence with high-speed VPN encryption.",
    link: "https://go.nordvpn.net/aff_c?offer_id=15&aff_id=YOUR_ID",
    icon: ShieldCheck,
  },
  {
    name: "1Password",
    description: "Keep your passwords and digital life secure in one vault.",
    link: "https://1password.com/affiliate/YOUR_ID",
    icon: Lock,
  },
  {
    name: "HubSpot CRM",
    description: "All-in-one business CRM platform for sales, marketing, and support.",
    link: "https://hubspot.sjv.io/YOUR_ID",
    icon: Mail,
  },
];

const blogPosts = [
  {
    title: "Top 5 VPNs for Entrepreneurs in 2025",
    summary: "We break down the best VPNs to protect your digital hustle this year.",
    link: "/blog/vpns-2025"
  },
  {
    title: "Why Every Freelancer Needs a Password Manager",
    summary: "Spoiler: Because sticky notes aren't secure.",
    link: "/blog/password-managers"
  },
  {
    title: "Top CRM Tools for Freelancers in 2025",
    summary: "Stay organized, close more deals, and streamline your client workflow.",
    link: "/blog/crm-tools"
  }
];

export default function AffiliateHomePage() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <Head>
        <title>Cybersecurity Tools & Business Tech</title>
        <meta
          name="description"
          content="Discover the best cybersecurity and business tools for freelancers, startups, and entrepreneurs. Curated affiliate recommendations that save you time and keep you safe."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script async defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script>
      </Head>

      <h1 className="text-4xl font-bold mb-6 text-center">Cybersecurity & Business Tools</h1>
      <p className="text-lg mb-8 text-center text-gray-600">
        Hand-picked tools to boost your business security, efficiency, and growth. These are
        tools I use, love, and recommend — and yes, I may earn a commission if you decide to purchase through these links!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {products.map(({ name, description, link, icon: Icon }) => (
          <Card key={name} className="hover:shadow-xl transition-shadow">
            <CardContent className="flex flex-col gap-4 p-6">
              <div className="flex items-center gap-4">
                <Icon className="h-8 w-8 text-blue-600" />
                <h2 className="text-2xl font-semibold">{name}</h2>
              </div>
              <p className="text-gray-700">{description}</p>
              <Button asChild className="mt-2 w-fit">
                <a href={link} target="_blank" rel="noopener noreferrer">
                  Learn More
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Latest Blog Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts.map(({ title, summary, link }) => (
            <Card key={title} className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-700 mb-4">{summary}</p>
                <Button asChild>
                  <a href={link}>Read More</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
