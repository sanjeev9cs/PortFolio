import React, { useEffect, useState } from "react";
import ReactTypingEffect from "react-typing-effect";

import devops1 from "../../assets/aboutpic/devops1.png";
import devops2 from "../../assets/aboutpic/devops2.png";
import devops3 from "../../assets/aboutpic/devops3.png";
import devops4 from "../../assets/aboutpic/devops4.png";
import devops5 from "../../assets/aboutpic/devops5.png";
import devops6 from "../../assets/aboutpic/devops6.png";

import web1 from "../../assets/aboutpic/web1.png";
import web2 from "../../assets/aboutpic/web2.png";
import web3 from "../../assets/aboutpic/web3.png";
import web4 from "../../assets/aboutpic/web4.png";
import web5 from "../../assets/aboutpic/web5.png";
import web6 from "../../assets/aboutpic/web6.png";

import network1 from "../../assets/aboutpic/network1.png";
import network2 from "../../assets/aboutpic/network2.png";
import network3 from "../../assets/aboutpic/network3.png";
import network4 from "../../assets/aboutpic/network4.png";
import network5 from "../../assets/aboutpic/network5.png";

import pentest1 from "../../assets/aboutpic/pentest1.png";
import pentest2 from "../../assets/aboutpic/pentest2.png";
import pentest3 from "../../assets/aboutpic/pentest3.png";
import pentest4 from "../../assets/aboutpic/pentest4.png";
import pentest5 from "../../assets/aboutpic/pentest5.png";

const imageSets = {
  DevOps: [
    devops1,
    devops2,
    devops3,
    devops4,
    devops5,
    devops6,
  ],

  "Web Dev": [
    web1,
    web2,
    web3,
    web4,
    web5,
    web6,
  ],

  Networking: [
    network1,
    network2,
    network3,
    network4,
    network5,
  ],

  "Penetration Testing": [
    pentest1,
    pentest2,
    pentest3,
    pentest4,
    pentest5,
  ],
};

const About = () => {
  const titles = Object.keys(imageSets);

  const [currentImages, setCurrentImages] = useState({
    DevOps: imageSets.DevOps[0],
    "Web Dev": imageSets["Web Dev"][0],
    Networking: imageSets.Networking[0],
    "Penetration Testing": imageSets["Penetration Testing"][0],
  });

  // Smooth image transition state
  const [fade, setFade] = useState(true);

  // ✅ New State: Ye borders aur glow text ke layout indexes ko shuffle karegi
  const [colorOrder, setColorOrder] = useState([0, 1, 2, 3]);

  const [cvTextIndex, setCvTextIndex] = useState(0);
  const [updateTextIndex, setUpdateTextIndex] = useState(0);

  const cvTexts = ["Download CV 📄", "Get Resume 🚀"];

  const updateTexts = [
    "View Updates 🆕",
    "See Progress 👁",
    "Latest Work 🔥",
  ];

  const cvLink =
    "https://drive.google.com/file/d/12yMdfWaVVsXBq69zmvqbJpPt5_Dna1LS/view?usp=sharing";

  const updateLink =
    "https://docs.google.com/document/d/1fKa9iWPNw138Rof49XlYVl9GAVsX_y-bT8pSjTHxGwM/edit?usp=sharing";

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setCurrentImages({
          DevOps:
            imageSets.DevOps[
            Math.floor(Math.random() * imageSets.DevOps.length)
            ],

          "Web Dev":
            imageSets["Web Dev"][
            Math.floor(Math.random() * imageSets["Web Dev"].length)
            ],

          Networking:
            imageSets.Networking[
            Math.floor(Math.random() * imageSets.Networking.length)
            ],

          "Penetration Testing":
            imageSets["Penetration Testing"][
            Math.floor(
              Math.random() *
              imageSets["Penetration Testing"].length
            )
            ],
        });

        // ✅ Har 3 second me glow colors aur side borders ko agle box par shift karne ka logic
        setColorOrder((prevOrder) => {
          const nextOrder = [...prevOrder];
          const last = nextOrder.pop();
          nextOrder.unshift(last); // Pure color mapping arrays ko 1 step aage rotate karega
          return nextOrder;
        });

        setFade(true);
      }, 400);

    }, 3000);

    return () => clearInterval(imageInterval);
  }, []);

  useEffect(() => {
    const textInterval = setInterval(() => {
      setCvTextIndex(
        (prev) => (prev + 1) % cvTexts.length
      );

      setUpdateTextIndex(
        (prev) => (prev + 1) % updateTexts.length
      );
    }, 2500);

    return () => clearInterval(textInterval);
  }, []);

  return (
    <section
      id="about"
      className="py-6 px-[7vw] lg:px-[20vw] text-white"
    >
      <div className="flex flex-col md:flex-row gap-8">

        {/* LEFT SIDE */}
        <div className="md:w-1/2">

          <h1 className="text-4xl font-bold">
            Hi, I am
          </h1>

          <h2 className="text-6xl font-bold mb-4">
            <span className="name1">
              Sanjeev{" "}
            </span>

            <span className="name2">
              Kumar
            </span>
          </h2>

          {/* TYPING EFFECT */}
          <h3 className="text-2xl md:text-3xl font-bold mb-4">

            <span className="text-white">
              I am a{" "}
            </span>

            <span className="text-purple-400 font-bold">
              <ReactTypingEffect
                text={[
                  "Cloud & DevOps Engineer",
                  "Full Stack Developer",
                  "Cybersecurity + VAPT",
                  "CCNA Networking Engineer",
                ]}
                speed={100}
                eraseSpeed={50}
                typingDelay={500}
                eraseDelay={2000}
              />
            </span>
          </h3>

          {/* DESCRIPTION */}
          <p className="text-gray-400 mt-4 leading-8 text-justify text-[16px] md:text-[17px]">

            Computer Science Engineering graduate skilled in
            <span className="text-white font-semibold">
              {" "}Cloud
            </span>,
            <span className="text-white font-semibold">
              {" "}DevOps
            </span>,
            <span className="text-white font-semibold">
              {" "}Web Development
            </span>,
            <span className="text-white font-semibold">
              {" "}Networking
            </span>, and
            <span className="text-white font-semibold">
              {" "}Cybersecurity
            </span>.
            {" "}I build scalable and secure applications using modern technologies.

            Hands-on experience with
            <span className="text-[#00f0ff] font-semibold">
              {" "}AWS
            </span>,
            <span className="text-[#00f0ff] font-semibold">
              {" "}Docker
            </span>,
            <span className="text-[#00f0ff] font-semibold">
              {" "}Kubernetes
            </span>,
            <span className="text-[#00f0ff] font-semibold">
              {" "}Jenkins CI/CD
            </span>, and
            <span className="text-[#00f0ff] font-semibold">
              {" "}MERN stack development
            </span>.
            {" "}Knowledge of
            <span className="text-pink-400 font-semibold">
              {" "}VAPT
            </span>
            {" "}using Burp Suite and OWASP ZAP.

            Strong foundation in
            <span className="text-green-400 font-semibold">
              {" "}CCNA networking
            </span>
            {" "}and
            <span className="text-green-400 font-semibold">
              {" "}Linux systems
            </span>,
            {" "}focused on automation, security, and real-world solutions.

          </p>

          {/* BUTTONS */}
          <div className="flex gap-4 mt-6 flex-wrap">

            {/* HIGH-LEVEL CV BUTTON */}
            <a href={cvLink} target="_blank" rel="noopener noreferrer" className="premium-btn btn-cv-container">
              <span className="btn-glow-layer"></span>
              <span className="btn-inner-content">
                <span className="premium-text-cv">
                  {cvTexts[cvTextIndex]}
                </span>
              </span>
            </a>

            {/* HIGH-LEVEL UPDATE BUTTON */}
            <a href={updateLink} target="_blank" rel="noopener noreferrer" className="premium-btn btn-update-container">
              <span className="btn-glow-layer"></span>
              <span className="btn-inner-content">
                <span className="premium-text-update">
                  {updateTexts[updateTextIndex]}
                </span>
              </span>
            </a>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="grid grid-cols-1 gap-1 md:w-1/2">
          {titles.map((title, index) => {
            // Har title box ke mapping order ke hisab se dynamic classes nikali hain
            const dynamicColorIndex = colorOrder[index];
            
            return (
              <div
                key={title}
                className={`box box-${dynamicColorIndex}`}
              >
                <img
                  src={currentImages[title]}
                  alt={title}
                  className={`img ${fade ? "fade-in" : "fade-out"}`}
                />

                <div className="overlay">
                  <h3
                    className={`skill-color skill-${dynamicColorIndex}`}
                    style={{ zIndex: 10 }}
                  >
                    {title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* CSS */}
      <style>{`

/* === PREMIUM BUTTONS BASE ARCHITECTURE === */
.premium-btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 3px; /* Border thickness container */
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  text-decoration: none;
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.premium-btn:hover {
  transform: translateY(-5px) scale(1.05);
}

.btn-inner-content {
  background: #0d0e12; /* Dark core base background */
  padding: 12px 24px;
  border-radius: 14px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  transition: background 0.3s;
}

.premium-btn:hover .btn-inner-content {
  background: rgba(13, 14, 18, 0.85); /* Glassmorphism transparency on hover */
}

/* === BORDER CHASE LIGHT ANIMATIONS === */
@keyframes rotateBorder {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.premium-btn::before {
  content: '';
  position: absolute;
  width: 200%;
  height: 200%;
  animation: rotateBorder 4s linear infinite;
  z-index: 1;
}

/* CV Border Gradient Colors */
.btn-cv-container::before {
  background: conic-gradient(
    from 0deg,
    #6a11cb,
    #2575fc,
    #00f0ff,
    #6a11cb
  );
}

/* Update Border Gradient Colors */
.btn-update-container::before {
  background: conic-gradient(
    from 0deg,
    #ff0080,
    #ff8c00,
    #ffe600,
    #ff0080
  );
}

/* === GLOWING BACKDROP AMBIENCE === */
.btn-glow-layer {
  position: absolute;
  inset: -5px;
  border-radius: 16px;
  z-index: 0;
  filter: blur(15px);
  opacity: 0.65;
  transition: opacity 0.3s, filter 0.3s;
}

.btn-cv-container .btn-glow-layer {
  background: linear-gradient(45deg, #6a11cb, #2575fc, #00f0ff);
}

.btn-update-container .btn-glow-layer {
  background: linear-gradient(45deg, #ff0080, #ff8c00, #ffe600);
}

.premium-btn:hover .btn-glow-layer {
  filter: blur(22px);
  opacity: 1;
}

/* === PREMIUM DYNAMIC TEXT TYPOGRAPHY === */
@keyframes cvTextWave {
  0% { color: #ffffff; text-shadow: 0 0 5px rgba(255,255,255,0.2); }
  33% { color: #00f0ff; text-shadow: 0 0 10px rgba(0,240,255,0.6); }
  66% { color: #bd00ff; text-shadow: 0 0 10px rgba(189,0,255,0.6); }
  100% { color: #ffffff; text-shadow: 0 0 5px rgba(255,255,255,0.2); }
}

@keyframes updateTextWave {
  0% { color: #ffffff; text-shadow: 0 0 5px rgba(255,255,255,0.2); }
  33% { color: #ff0077; text-shadow: 0 0 10px rgba(255,0,119,0.6); }
  66% { color: #ffca00; text-shadow: 0 0 10px rgba(255,202,0,0.6); }
  100% { color: #ffffff; text-shadow: 0 0 5px rgba(255,255,255,0.2); }
}

.premium-text-cv {
  font-weight: 800;
  letter-spacing: 0.5px;
  font-size: 16px;
  animation: cvTextWave 4s ease-in-out infinite;
}

.premium-text-update {
  font-weight: 800;
  letter-spacing: 0.5px;
  font-size: 16px;
  animation: updateTextWave 4s ease-in-out infinite;
}

/* BOX BASE STYLE */
.box{
  position:relative;
  overflow:hidden;
  border-radius:15px;
  height: 160px;
  transition: border 0.5s ease-in-out, box-shadow 0.5s ease-in-out; /* Border glows change ko smooth karega */
}

/* IMAGE TRANSITIONS */
.img {
  width:100%;
  height:100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  transition: opacity 0.4s ease-in-out, transform 0.4s ease-in-out;
}

.fade-in {
  opacity: 1;
  transform: scale(1);
}

.fade-out {
  opacity: 0;
  transform: scale(0.95);
}

.overlay{
  position:absolute;
  inset:0;
  display:flex;
  align-items:end;
  background:linear-gradient(
    to top,
    rgba(0,0,0,0.85),
    transparent
  );
}

.skill-color{
  padding:10px;
  font-weight:bold;
  font-size:18px;
  transition: color 0.5s ease-in-out;
}

/* NAME ANIMATION */
@keyframes name1 {
  0%{ color:#8245ec; }
  50%{ color:#ff00cc; }
  100%{ color:#8245ec; }
}

@keyframes name2 {
  0%{ color:#00f0ff; }
  50%{ color:#00ff9f; }
  100%{ color:#00f0ff; }
}

.name1{ animation:name1 3s infinite; }
.name2{ animation:name2 3s infinite; }

/* SHUFFLING NEON GLOW BORDERS WITH TRANSITIONS */
.box-0{
  border:3px solid #00f0ff;
  box-shadow:0 0 20px #00f0ff;
}
.box-1{
  border:3px solid #ff00cc;
  box-shadow:0 0 20px #ff00cc;
}
.box-2{
  border:3px solid #00ff9f;
  box-shadow:0 0 20px #00ff9f;
}
.box-3{
  border:3px solid #ffe600;
  box-shadow:0 0 20px #ffe600;
}

/* SHUFFLING TEXT COLORS MATCHED TO NEON BORDERS */
.skill-0{ animation:devopsGlow 3s infinite; }
.skill-1{ animation:webGlow 3s infinite; }
.skill-2{ animation:networkGlow 3s infinite; }
.skill-3{ animation:pentestGlow 3s infinite; }

@keyframes devopsGlow{
  0%{ color:#00f0ff; }
  50%{ color:#2575fc; }
  100%{ color:#00f0ff; }
}

@keyframes webGlow{
  0%{ color:#ff00cc; }
  50%{ color:#ff4d6d; }
  100%{ color:#ff00cc; }
}

@keyframes networkGlow{
  0%{ color:#00ff9f; }
  50%{ color:#00c853; }
  100%{ color:#00ff9f; }
}

@keyframes pentestGlow{
  0%{ color:#ffe600; }
  50%{ color:#ff8c00; }
  100%{ color:#ffe600; }
}

      `}</style>
    </section>
  );
};

export default About;