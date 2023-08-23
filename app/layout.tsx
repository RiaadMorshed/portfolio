import "./globals.css";
import type { Metadata } from "next";
import Navbar from "../compnents/Navbar";
import Footer from "../compnents/Footer";

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
