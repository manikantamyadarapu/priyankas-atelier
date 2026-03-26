import "./globals.css";
import { Cormorant_Garamond } from "next/font/google";
import CursorEffect from "./components/CursorEffect";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Priyanka's Atelier",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cormorant.className}>
        <CursorEffect />
        {children}
      </body>
    </html>
  );
}