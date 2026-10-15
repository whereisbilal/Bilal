import TechItem from "../skills/TechItem";

const techStack = [
  { name: "HTML5", icon: "/images/html-icon.svg" },
  { name: "CSS3", icon: "/images/css-icon.svg" },
  { name: "JavaScript", icon: "/images/javascript-icon.svg" },
  { name: "TypeScript", icon: "/images/typescript-icon.svg" },
  { name: "React", icon: "/images/react-icon.svg" },
  { name: "Next.js", icon: "/images/nextjs-icon.webp" },
  { name: "Tailwind CSS", icon: "/images/tailwind-icon.svg" },
  { name: "Redux", icon: "/images/redux-icon.webp" },
  { name: "Vite", icon: "/images/vite-icon.webp" },
  { name: "Node.js", icon: "/images/nodejs-icon.svg" },
  { name: "Express.js", icon: "/images/expressjs-icon.svg" },
  { name: "MongoDB", icon: "/images/mongodb-icon.svg" },
  { name: "Git", icon: "/images/git-icon.webp" },
  { name: "GitHub", icon: "/images/github-icon.webp" },
  { name: "VS Code", icon: "/images/vscode-icon.webp" },
];

const TechStack = () => {
  return (
    <section id="skills" className="mt-20">
      <h2 className="mb-8 text-2xl font-bold uppercase tracking-wide text-black">
        TECH STACK &amp; TOOLS
      </h2>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {techStack.map((tech) => (
          <TechItem
            key={tech.name}
            name={tech.name}
            icon={tech.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default TechStack;