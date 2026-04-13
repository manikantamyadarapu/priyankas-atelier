import "./globals.css";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import CursorEffect from "./components/CursorEffect";
import SmoothScroll from "./components/SmoothScroll";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-outfit",
});

export const metadata = {
  title: "Priyanka's Atelier",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${outfit.variable} ${cormorant.className}`}>
        <SmoothScroll />
        <CursorEffect />
        {children}
      </body>
    </html>
  );
}