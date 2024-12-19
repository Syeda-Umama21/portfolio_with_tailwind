import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "./components/Helper/Navbar/ResponsiveNv";
import Footer from "./components/Helper/Home/Footer/Footer";

const Font = Sora({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Webdev Portfolio",
  description: "Webdev Portfolio with next js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${Font.className} bg-gray-300`}>
        <ResponsiveNav />
        {children}
        <Footer/>
      </body>
    </html>
  );
}

