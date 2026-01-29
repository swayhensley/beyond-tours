import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Beyond Tours | Kenya Travel Agency",
  description: "Authentic Safaris. Coastal Escapes. Urban Adventures. Explore Kenya with Beyond Tours - your trusted travel partner for unforgettable experiences.",
  keywords: ["Kenya tours", "safari", "Maasai Mara", "Nairobi", "travel agency", "Mombasa", "Naivasha"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

