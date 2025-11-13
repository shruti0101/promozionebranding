// SEO.js
import { useEffect } from "react";

// SEO.js
const SEO = ({ title, description }) => {
  if (typeof document !== "undefined") {
    document.title = title;
    let descTag = document.querySelector('meta[name="description"]');
    if (!descTag) {
      descTag = document.createElement("meta");
      descTag.setAttribute("name", "description");
      document.head.appendChild(descTag);
    }
    descTag.setAttribute("content", description);
  }

  return null;
};




export default SEO;
