"use client";

import { motion } from "framer-motion";
import { VscVscode } from "react-icons/vsc";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiVite,
  SiExpress,
  SiMongodb,
  // SiVisualstudiocode,
} from "react-icons/si";

const skills = [
  {
    id: 1,
    name: "HTML5",
    icon: <FaHtml5 />,
    color: "#E34F26",
  },
  {
    id: 2,
    name: "CSS3",
    icon: <FaCss3Alt />,
    color: "#1572B6",
  },
  {
    id: 3,
    name: "JavaScript",
    icon: <FaJs />,
    color: "#F7DF1E",
  },
  {
    id: 4,
    name: "TypeScript",
    icon: <SiTypescript />,
    color: "#3178C6",
  },
  {
    id: 5,
    name: "React",
    icon: <FaReact />,
    color: "#00D8FF",
  },
  {
    id: 6,
    name: "Next.js",
    icon: <SiNextdotjs />,
    color: "#FFFFFF",
  },
  {
    id: 7,
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    color: "#06B6D4",
  },
  {
    id: 8,
    name: "Redux",
    icon: <SiRedux />,
    color: "#764ABC",
  },
  {
    id: 9,
    name: "Vite",
    icon: <SiVite />,
    color: "#A78BFA",
  },
  {
    id: 10,
    name: "Node.js",
    icon: <FaNodeJs />,
    color: "#83CD29",
  },
  {
    id: 11,
    name: "Express.js",
    icon: <SiExpress />,
    color: "#FFFFFF",
  },
  {
    id: 12,
    name: "MongoDB",
    icon: <SiMongodb />,
    color: "#47A248",
  },
  {
    id: 13,
    name: "Git",
    icon: <FaGitAlt />,
    color: "#F05032",
  },
  {
    id: 14,
    name: "GitHub",
    icon: <FaGithub />,
    color: "#FFFFFF",
  },
  {
  id: 15,
  name: "VS Code",
  icon: <VscVscode />,
  color: "#29B6F6",
},
];

const Skills = () => {
  return (
    <section id="skills" className="mt-24">
      <h2 className="mb-8 text-xl font-semibold text-gray-800">
        Tech Stack &amp; Tools
      </h2>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 max-w-md">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.35,
              delay: index * 0.04,
            }}
            viewport={{ once: true }}
            title={skill.name}
            className="group flex flex-col items-center gap-2"
          >
            <div className="flex h-[60px] w-[60px] items-center justify-center rounded-2xl bg-[#242938] transition-all duration-300 hover:-translate-y-1 hover:bg-[#30384a] sm:h-[62px] sm:w-[62px]">
              <span
                className="text-[36px] transition-transform duration-300 group-hover:scale-110"
                style={{ color: skill.color }}
              >
                {skill.icon}
              </span>
            </div>

            <span className="text-center text-xs font-medium text-gray-600">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;