import { useState } from "react";
import devPhoto from "/dev.jpg";
import { socials } from "../src/data";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaRegCircleCheck } from "react-icons/fa6";
import { skills } from "./data";
import { TbBriefcaseFilled } from "react-icons/tb";
import { MdEmail } from "react-icons/md";
import ContactForm from "./ContactForm";

function App() {
  const [isContactFormVisible, setContactFormVisibility] = useState(false);
  return (
    <>
      <main>
        <div
          className={
            isContactFormVisible
              ? "overlay-transparent-to-semi"
              : "overlay-semi-to-transparent"
          }
        ></div>
        <div>
          <header>
            <li>
              <TbBriefcaseFilled fill="#7ee7ff" />
              <span>Portfolio</span>{" "}
            </li>
            <li
              onClick={() => {
                setContactFormVisibility(true);
              }}
            >
              <MdEmail fill="#7ee7ff" />
              <span>Contact Me</span>
            </li>
          </header>
          <div className="centralize_content">
            <img src={devPhoto} alt="Devs's Photo" className="devPhoto" />
          </div>
          <div className="name_card ">
            <div className="centralize_content">
              <strong>Abiodun Sabitu</strong>{" "}
              <FaRegCircleCheck
                style={{ fontSize: "small", marginTop: "10px" }}
                fill="#7ee7ff"
              />
            </div>

            <div className="link_wrapper ">
              <li>
                <FaGithubSquare
                  style={{ fontSize: "small", marginTop: "7px" }}
                />
                <a href={socials.github.url}>Github </a>
              </li>
              <li>
                <FaLinkedin style={{ fontSize: "small", marginTop: "7px" }} />
                <a href={socials.linkedin.url}>Linkedin</a>
              </li>
              <li>
                <FaSquareXTwitter
                  style={{ fontSize: "small", marginTop: "7px" }}
                />
                <a href={socials.twitter.url}>Twitter</a>
              </li>
            </div>
            <h2 className="centralize_content">
              <strong>Software Engineer</strong>
            </h2>
          </div>

          <div className="skill_wrapper">
            {Object.keys(skills).map((category) => (
              <div key={category}>
                <h4>
                  {category
                    .replace(/([A-Z])/g, " $1")
                    .replace(/^./, (str) => str.toUpperCase())}
                </h4>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                  {skills[category].map((skill) => (
                    <span key={skill} className="skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <ContactForm
          isContactFormVisible={isContactFormVisible}
          setContactFormVisibility={setContactFormVisibility}
        />
      </main>
    </>
  );
}

export default App;
