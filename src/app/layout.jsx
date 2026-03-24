import { Inter, Oswald } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" });

export const metadata = {
  title: "TofiWeb | Portfolio",
  description: "Digital experiences crafted for ambitious brands.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="snap-y snap-mandatory scroll-smooth md:snap-proximity" style={{ position: 'relative' }}>
      <body className={`${inter.variable} ${oswald.variable} font-sans antialiased bg-background text-offwhite`} >
        {children}
      </body>
    </html>
  );
}
