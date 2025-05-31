import "./globals.css";
import { ReactNode } from "react";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Rivera Tree Service",
  description:
    "Rivera Tree Service – Tree removal, stump removal, mulching, lot cleaning, leaf removal, planting, power washing in your area.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* metadata.title and metadata.description are automatically used */}
      </head>
      <body>
        <header style={headerStyle}>
          <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1rem 0" }}>
            <h1 style={{ margin: 0 }}>Rivera Tree Service</h1>
            <nav>
              <a href="#services" style={navLinkStyle}>
                Services
              </a>
              <a href="#contact" style={navLinkStyle}>
                Contact
              </a>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

const headerStyle: React.CSSProperties = {
  backgroundColor: "#2a7f62",
  color: "#fff",
  position: "sticky",
  top: 0,
  zIndex: 1000,
};

const navLinkStyle: React.CSSProperties = {
  marginLeft: "1rem",
  color: "#fff",
  fontSize: "1rem",
};

