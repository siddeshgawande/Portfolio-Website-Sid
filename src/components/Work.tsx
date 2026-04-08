import { useEffect } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin();

const projects = [
  {
    name: "RainyDay App",
    category: "React Native Social Platform",
    tools:
      "React Native, Auth0, Firebase, Google Maps, GetStream, Amazon CloudFront, Amazon SQS",
    images: ["/images/Rainyday.png"],
  },
  {
    name: "Mocingbird App",
    category: "Healthcare Mobile Application",
    tools:
      "React Native, REST APIs, U.S. state license management, Jest, security upgrades",
    images: ["/images/Mocingbird.png"],
  },
  {
    name: "OppVenuz User & Vendor Apps",
    category: "Marketplace Mobile Apps",
    tools:
      "React Native, Django backend integration, in-app purchases, notifications, admin moderation",
    images: ["/images/OppVenuz.png"],
  },
  {
    name: "FHIR Automation Survey",
    category: "Hackathon Project",
    tools: "FHIR standards, healthcare automation, React Native ecosystem",
    images: ["/images/placeholder.webp"],
  },
];

const Work = () => {
  useEffect(() => {
  let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("work-box");
    const rectLeft = document
      .querySelector(".work-container")!
      .getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
    let padding: number =
      parseInt(window.getComputedStyle(box[0]).padding) / 2;
    translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
  }

  setTranslateX();

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: `+=${translateX}`, // Use actual scroll width
      scrub: true,
      pin: true,
      id: "work",
    },
  });

  timeline.to(".work-flex", {
    x: -translateX,
    ease: "none",
  });

  // Clean up (optional, good practice)
  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
}, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              {project.images.map((image, imageIndex) => (
                <WorkImage
                  key={`${project.name}-${imageIndex}`}
                  image={image}
                  alt={project.name}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
