import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skills = [
  { skill: "HTML + CSS", level: "advanced", color: "#2662Ea" },
  { skill: "Bootstrap", level: "advanced", color: "#7952B3" },
  { skill: "JS", level: "advanced", color: "#efd81d" },
  { skill: "Web Design", level: "advanced", color: "#c3dcaf" },
  { skill: "Git + Github", level: "intermediate", color: "#e84f33" },
  { skill: "Node.js", level: "advanced", color: "#339933" },
  { skill: "MongoDB", level: "advanced", color: "#47A248" },
  { skill: "Express JS", level: "advanced", color: "#dbdbdb" },
  { skill: "Pug JS", level: "intermediate", color: "#F4A261" },
  { skill: "Gsap", level: "beginner", color: "#88CE02" },
  { skill: "Three JS", level: "beginner", color: "#777777" },
];

const Avatar = () => {
  return <img src="./DSC_7887.JPG" alt="" className="avatar" />;
};

const Intro = () => {
  return (
    <div>
      <h1>Shady Waheed</h1>
      <p>
        Full-stack web developer using the MERN stack. I enjoy building scalable
        apps and sharing knowledge. When I’m not coding, I love playing chess,
        exploring new food spots, or chilling under the Egyptian sun.
      </p>
    </div>
  );
};

const SkillList = () => {
  return (
    <div className="skill-list">
      {/* <Skill color="red" name="React" emo="❤" />
      <Skill color="blue" name="CSS" emo="💥" />
      <Skill color="yellow" name="JS" emo="😎" />
      <Skill color="brown" name="HTML" emo="😍" />
      <Skill color="brown" name="HTML" emo="😍" />
      <Skill color="brown" name="HTML" emo="😍" />
      <Skill color="brown" name="HTML" emo="😍" /> */}
      {skills.map((skill) => (
        <Skill
          color={skill.color}
          name={skill.skill}
          level={skill.level}
          key={skill.skill}
        ></Skill>
      ))}
    </div>
  );
};

const Skill = ({ color, name, level }) => {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{name}</span>
      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </span>
    </div>
  );
};

const App = () => {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
