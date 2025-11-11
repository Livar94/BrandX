import type { Metadata } from "next";
import "./globals.css";
import Header from '../components/Header'
import Footer from "../components/Footer";



export const metadata: Metadata = {
  title: "Brandex",
  description: "Brandex – din plattform för moderna digitala lösningar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv-SE" suppressHydrationWarning className="h-full overflow-x-hidden">
      <body className="min-h-screen overflow-x-hidden">
        <div>
          <Header />
          
          {children}
          <Footer />
        </div>
        
        
      </body>
    </html>
  );
}
