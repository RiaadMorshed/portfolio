import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "../compnents/Navbar";
import Footer from "../compnents/Footer";

const inter = Inter({ subsets: ["latin"] });

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export const metadata: Metadata = {
  title: "Morshed Portfolio",
  description: "A software Developer and Machine Learning Research Enthusiatic",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <hr></hr>
        {children}
        <Footer />
      </body>
    </html>
  );
}
