"use client"
import type { Metadata } from "next";
import "./globals.css";
import Layout from "@/components/layout/Layout";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;  
}>) {
  return (
    <html lang="en">
      <head>
        <title>Siddarth Selvakumar Portfolio</title>
        <meta name="description" content="Siddarth Selvakumar's personal development portfolio showcasing skills, projects, and contact information." />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-gray-950 text-gray-100">
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}