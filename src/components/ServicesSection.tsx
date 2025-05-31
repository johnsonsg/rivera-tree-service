import React from "react";

type Service = {
  title: string;
  imgSrc: string;
  description: string;
};

const services: Service[] = [
  {
    title: "Tree Removal",
    imgSrc: "/images/tree-removal.jpg",
    description:
      "Safe and efficient removal of dead or unwanted trees, using the latest equipment to protect your property.",
  },
  {
    title: "Stump Removal",
    imgSrc: "/images/stump-removal.jpg",
    description:
      "Grind out old stumps cleanly so you can reclaim your yard space—no more tripping hazards.",
  },
  {
    title: "Mulching",
    imgSrc: "/images/mulching.jpg",
    description:
      "Premium wood mulch for flower beds, gardens, and landscaping projects. Improve soil moisture retention and weed control.",
  },
  {
    title: "Lot Cleaning",
    imgSrc: "/images/lot-cleaning.jpg",
    description:
      "Clear overgrown lots, remove debris, and prepare your property for construction or landscaping.",
  },
  {
    title: "Leaf Removal",
    imgSrc: "/images/leaf-removal.jpg",
    description:
      "Fall cleanup services to remove leaves, branches, and yard debris to keep your lawn healthy.",
  },
  {
    title: "Planting",
    imgSrc: "/images/planting.jpg",
    description:
      "Tree and shrub planting services—from site evaluation to installation of high-quality nursery stock.",
  },
  {
    title: "Power Washing",
    imgSrc: "/images/power-washing.jpg",
    description:
      "Restore decks, driveways, sidewalks, and siding with professional power washing—remove grime, mold, and stains.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="section" style={{ backgroundColor: "#fff" }}>
      <div className="container">
        <h2 className="text-center" style={{ fontSize: "2rem" }}>
          Our Services
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
            marginTop: "2rem",
          }}
        >
          {services.map((svc) => (
            <div
              key={svc.title}
              style={{
                backgroundColor: "#fafafa",
                borderRadius: "8px",
                overflow: "hidden",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src={svc.imgSrc}
                alt={svc.title}
                style={{ width: "100%", height: "180px", objectFit: "cover" }}
              />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ margin: 0 }}>{svc.title}</h3>
                <p style={{ marginTop: "0.5rem", fontSize: "0.95rem", lineHeight: 1.4 }}>
                  {svc.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
