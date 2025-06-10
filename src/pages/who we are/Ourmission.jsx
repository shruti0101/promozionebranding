import React from "react";
import "./Style.css";
import wave from "../../assets/about/wave.webp"

const cards = [
  {
    title: "Our Mission",
    icon: (
      <svg className="svg-icon" viewBox="0 0 64 64">
        <circle cx="32" cy="32" r="30" fill="#0d6efd" />
        <path d="M32 16 L32 48 M16 32 L48 32" stroke="#fff" strokeWidth="4" />
      </svg>
    ),
    content: (
      <>
        Helping businesses transform their digital presence through:
        <ul>
          <li>SEO Services – Rank #1 on Google in 6 Months</li>
          <li>CGI Ads – Build Realistic and Attention-Grabbing Ads</li>
          <li>Performance Marketing – Scale Your Business with Paid Ads</li>
          <li>Website Development – Build Modern & Conversion‑Based Websites</li>
        </ul>
      </>
    )
  },
  {
    title: "Our Vision",
    icon: (
      <svg className="svg-icon" viewBox="0 0 64 64">
        <circle cx="32" cy="32" r="30" fill="#ffc107" />
        <path
          d="M20 32 A12 12 0 0 1 44 32 A12 12 0 0 1 20 32"
          fill="none"
          stroke="#fff"
          strokeWidth="4"
        />
      </svg>
    ),
    content: (
      <>
        <p>
          <strong>To become India's #1 Growth Partner for SMEs</strong>, delivering digital
          excellence with 100% guaranteed business growth in Delhi NCR,
          Gurugram, Noida, Faridabad, and Ghaziabad.
        </p>
        <p>
          Our vision is not just about offering services – it's about becoming
          a name that SMEs trust for consistent and guaranteed digital success.
        </p>
      </>
    )
  },
  {
    title: "Our Values",
    icon: (
      <svg className="svg-icon" viewBox="0 0 64 64">
        <circle cx="32" cy="32" r="30" fill="#28a745" />
        <path
          d="M20 35 L28 43 L44 27"
          fill="none"
          stroke="#fff"
          strokeWidth="4"
        />
      </svg>
    ),
    content: (
      <ul>
        <li>
          <strong>Integrity:</strong> Transparency & honesty always.
        </li>
        <li>
          <strong>Innovation:</strong> Cutting-edge ideas at every step.
        </li>
        <li>
          <strong>Results:</strong> Your ROI is our KPI.
        </li>
        <li>
          <strong>Collaboration:</strong> We become part of your team.
        </li>
      </ul>
    )
  }
];

const Ourmission = () => (
  <section className="mvv-simple-wrapper position-relative ">
    <img src={wave} alt="wave" className="position-absolute d-none d-lg-block" style={{top:0, right:0, height:"25%"}}/>
    <div className="mvv-heading">
      <h2>What Makes Us Different?</h2>
      <div  data-aos="zoom-in" className="underline-bar"></div>
    </div>

    <div className="mvv-simple">
      {cards.map((card, index) => (
        <div className="mvv-card" key={index}>
          <div className="icon-wrapper">{card.icon}</div>
          <h3>{card.title}</h3>
          <div className="card-content">{card.content}</div>
        </div>
      ))}
    </div>
  </section>
);

export default Ourmission;
