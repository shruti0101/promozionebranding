import React from 'react'
import { useRef } from 'react';
import email from "../../assets/services/email.png"



const Email = () => {






  return (
  
 
    <div>
      
            <section className="container-fluid section-marketing position-relative overflow-hidden">
                 {/* SVG Background */}
                 <svg
                   className="svg-bg"
                   viewBox="0 0 1458 1362"
                   xmlns="http://www.w3.org/2000/svg"
                   preserveAspectRatio="xMidYMid meet"
                 >
                   <path
                     className="path-animate svg-color"
                     d="M146.963 34C68.8835 119.852 -35.7659 309.427 170.27 380.906C376.305 452.385 577.757 309.427 652.728 229.013L445.056 655.556C680.718 473.621 940.183 270.58 1161.6 433.738C1413.69 619.498 1151.24 937.204 940.183 919.717C738.576 903.012 761.883 668.375 940.183 628.751C1173.6 576.878 1569.6 809.302 1337.57 1160.18C1225.31 1329.94 977.475 1345.09 838.797 1265.85"
                     stroke="#CDE9DE"
                     strokeWidth="100"
                     fill="none"
                     strokeLinejoin="round"
                   />
                 </svg>
         
                 {/* Content */}
                 <div className="container position-relative">
                   <div className="row align-items-center">
                     <div className="col-md-7" data-aos="fade-right">
                       <h1 className="display-5 fw-bold mb-3">
                         {" "}
                         Our Approach to Digital Marketing
                       </h1>
                       <p className="text-black p-2 fs-5">
                         We turn ideas into reality with our multidisciplinary team of
                         specialists. Our approach realizes the importance of listening
                         to and understanding your audience — a process that helps you
                         craft the best possible user experience.
                       </p>
                     </div>
                     <div className="col-md-5 d-none d-md-block" data-aos="fade-left">
                       <img src={email} width="120%" alt="Marketing Visual" />
                     </div>
                   </div>
                 </div>
               </section>
      
    </div>
  )
}

export default Email