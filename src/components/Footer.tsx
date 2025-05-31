import React from "react";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#2a7f62", color: "#fff", padding: "1rem 0" }}>
      <div className="container" style={{ textAlign: "center" }}>
        <p style={{ margin: 0 }}>
          &copy; {new Date().getFullYear()} Rivera Tree Service
        </p>
        <p style={{ margin: "0.25rem 0 0 0" }}>
          804-764-8555 &nbsp;|&nbsp; jriveratree41@gmail.com
        </p>
      </div>
    </footer>
  );
}
