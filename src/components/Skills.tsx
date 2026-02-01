const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 95 },
      { name: "React Native", level: 80 },
    ],
    dotColor: "bg-emerald-400",
    barColor: "bg-gradient-to-r from-emerald-500 to-emerald-400"
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Express", level: 85 },
      { name: "FastAPI", level: 75 },
      { name: "REST APIs", level: 90 },
      { name: "Socket.io", level: 80 },
    ],
    dotColor: "bg-violet-400",
    barColor: "bg-gradient-to-r from-violet-500 to-violet-400"
  },
  {
    title: "Database",
    skills: [
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 85 },
      { name: "MySQL", level: 80 },
      { name: "SQLite", level: 75 },
      { name: "Redis", level: 70 },
    ],
    dotColor: "bg-amber-400",
    barColor: "bg-gradient-to-r from-amber-500 to-amber-400"
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 80 },
      { name: "Linux", level: 85 },
      { name: "SEO/GEO", level: 75 },
      { name: "CI/CD", level: 70 },
    ],
    dotColor: "bg-rose-400",
    barColor: "bg-gradient-to-r from-rose-500 to-rose-400"
  }
];

const technologies = [
  "JavaScript", "TypeScript", "Python", "Java", "C++", "SQL",
  "React", "Next.js", "Node.js", "Express", "FastAPI", "Socket.io",
  "PostgreSQL", "MongoDB", "MySQL", "Redis", "SQLite",
  "Docker", "Git", "Linux", "AWS", "Vercel", "Netlify",
  "Tailwind", "Framer Motion", "Three.js", "Prisma", "Sequelize"
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 lg:px-24 bg-neutral-950/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 animate-fade-in-up">
          <span className="text-emerald-400 font-mono text-sm">03.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Skills & Expertise</h2>
        </div>

        {/* Skill Categories Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="bento-card animate-fade-in-up"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-2 h-2 rounded-full ${category.dotColor}`} />
                <h3 className="text-lg font-semibold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-neutral-300">{skill.name}</span>
                      <span className="text-neutral-500 font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-neutral-800 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${category.barColor} animate-grow-width`}
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${categoryIndex * 0.1}s`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technology Cloud */}
        <div className="bento-card animate-fade-in-up">
          <h3 className="text-lg font-semibold text-white mb-6">Technologies I Work With</h3>
          
          <div className="flex flex-wrap gap-3">
            {technologies.map((tech, index) => (
              <span
                key={tech}
                className="px-4 py-2 bg-neutral-800/50 border border-neutral-700/50 rounded-lg text-sm text-neutral-300 hover:text-emerald-400 hover:border-emerald-400/50 hover:bg-emerald-400/10 transition-colors cursor-default animate-fade-in-up"
                style={{ animationDelay: `${index * 0.02}s` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {[
            { number: "2+", label: "Years Experience" },
            { number: "10+", label: "Projects Built" },
            { number: "5+", label: "Technologies" },
            { number: "500+", label: "Hours of Code" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="bento-card text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <span className="text-3xl md:text-4xl font-bold text-white">{stat.number}</span>
              <p className="text-sm text-neutral-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
