import { useEffect, useRef, useState } from "react";
import "./Popup.css";

import post1  from "../../assets/popup/post1.jpg";
import post2  from "../../assets/popup/post2.jpg";
import post3  from "../../assets/popup/post3.jpg";
import post4  from "../../assets/popup/post4.jpg";
import post5  from "../../assets/popup/post5.jpg";
import post6  from "../../assets/popup/post6.jpg";
import post7  from "../../assets/popup/post7.jpg";
import post8  from "../../assets/popup/post8.jpg";
import post9  from "../../assets/popup/post9.jpg";
import post10 from "../../assets/popup/post10.jpg";
import post11 from "../../assets/popup/post11.jpg";
import post12 from "../../assets/popup/post12.jpg";
import post13 from "../../assets/popup/post13.jpg";
import post14 from "../../assets/popup/post14.jpg";
import post15 from "../../assets/popup/post15.jpg";

const postImages = [
  post1, post2, post3, post4, post5,
  post6, post7, post8, post9, post10,
  post11, post12, post13, post14, post15,
];

const Popup = () => {
  const [show, setShow] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const popupRef = useRef(null);

  useEffect(() => {
    // pick a random post every mount
    const randomIndex = Math.floor(Math.random() * postImages.length);
    setSelectedPost(postImages[randomIndex]);

    // show after 2 s
    const timer = setTimeout(() => setShow(true), 2000);

    // close when clicking outside
    const handleClickOutside = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setShow(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (!show || !selectedPost) return null;

  return (
    <div className="fact-popup-overlay">
      <div className="fact-popup" ref={popupRef}>
        <button className="close-btn" onClick={() => setShow(false)}>X</button>
        <img src={selectedPost} alt="Popup Post" className="popup-img" />
      </div>
    </div>
  );
};

export default Popup;
