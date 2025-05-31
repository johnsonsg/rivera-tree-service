"use client"

import React, { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORMSPREE_ENDPOINT", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        const data = (await res.json()) as { error?: string };
        setStatus("error");
        setErrorMsg(data.error || "Unknown error occurred.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again later.");
    }
  };

  return (
    <section id="contact" className="section" style={{ backgroundColor: "#f0f0f0" }}>
      <div className="container" style={{ maxWidth: "600px" }}>
        <h2 className="text-center" style={{ fontSize: "2rem" }}>
          Request a Quote / Ask a Question
        </h2>
        <p className="text-center" style={{ marginBottom: "2rem" }}>
          Fill out the form below and we’ll get back to you as soon as possible. Or call us directly at{" "}
          <a href="tel:8047648555" style={{ color: "#2a7f62" }}>
            804-764-8555
          </a>.
        </p>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <label>
            Name<span style={{ color: "red" }}>*</span>
            <input
              type="text"
              name="name"
              placeholder="Your full name"
              required
              style={inputStyle}
            />
          </label>
          <label>
            Email<span style={{ color: "red" }}>*</span>
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              required
              style={inputStyle}
            />
          </label>
          <label>
            Phone
            <input
              type="tel"
              name="phone"
              placeholder="e.g. 804-764-8555"
              style={inputStyle}
            />
          </label>
          <label>
            Service Interested In<span style={{ color: "red" }}>*</span>
            <select name="service" required style={inputStyle}>
              <option value="">-- Select a Service --</option>
              <option value="Tree Removal">Tree Removal</option>
              <option value="Stump Removal">Stump Removal</option>
              <option value="Mulching">Mulching</option>
              <option value="Lot Cleaning">Lot Cleaning</option>
              <option value="Leaf Removal">Leaf Removal</option>
              <option value="Planting">Planting</option>
              <option value="Power Washing">Power Washing</option>
            </select>
          </label>
          <label>
            Message / Details<span style={{ color: "red" }}>*</span>
            <textarea
              name="message"
              placeholder="Describe your needs, location, or any questions..."
              required
              style={{ ...inputStyle, minHeight: "120px", resize: "vertical" }}
            ></textarea>
          </label>

          <button
            type="submit"
            disabled={status === "sending"}
            style={{
              padding: "0.75rem 1rem",
              backgroundColor: "#2a7f62",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              fontSize: "1rem",
            }}
          >
            {status === "sending" ? "Sending..." : "Submit"}
          </button>

          {status === "success" && (
            <p style={{ color: "green", marginTop: "1rem" }}>
              Thank you! Your message has been sent. We’ll be in touch soon.
            </p>
          )}
          {status === "error" && (
            <p style={{ color: "red", marginTop: "1rem" }}>
              Oops—there was a problem: {errorMsg}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "0.5rem 0.75rem",
  marginTop: "0.25rem",
  borderRadius: "4px",
  border: "1px solid #ccc",
  fontSize: "1rem",
};
