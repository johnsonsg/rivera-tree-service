import React from "react";

export default function HeroSection() {
  return (
    <section
      className="section"
      style={{
        backgroundImage: "url(/images/tree-removal.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
      }}
    >
      <div className="container text-center" style={{ padding: "6rem 1rem" }}>
        <h1 style={{ fontSize: "2.5rem" }}>Rivera Tree Service</h1>
        <p style={{ fontSize: "1.25rem", marginTop: "1rem" }}>
          Professional Tree Removal · Stump Removal · Mulching · Lot Cleaning ·
          Leaf Removal · Planting · Power Washing
        </p>
        <p style={{ fontSize: "1.1rem", marginTop: "1.5rem" }}>
          Call us: <a href="tel:8047648555" style={{ color: "#ffe07a" }}>804-764-8555</a>
        </p>
      </div>
    </section>
  );
}
