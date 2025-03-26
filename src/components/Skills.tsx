
const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'TypeScript', level: 80 },
        { name: 'HTML/CSS', level: 95 },
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 80 },
        { name: 'RESTful APIs', level: 85 },
        { name: 'GraphQL', level: 70 },
      ]
    },
    {
      title: 'Database',
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'Firebase', level: 80 },
        { name: 'SQL', level: 75 },
      ]
    },
    {
      title: 'AI & Tools',
      skills: [
        { name: 'Gemini API', level: 85 },
        { name: 'OpenAI API', level: 80 },
        { name: 'Git/GitHub', level: 90 },
        { name: 'CI/CD', level: 75 },
      ]
    },
    {
      title: 'Content & SEO',
      skills: [
        { name: 'Technical Writing', level: 90 },
        { name: 'SEO Optimization', level: 85 },
        { name: 'WordPress', level: 80 },
        { name: 'Content Strategy', level: 85 },
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-16">
          <p className="text-primary font-medium mb-2">MY EXPERTISE</p>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1.5 bg-primary/30 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="glass p-6 rounded-2xl hover-card">
              <h3 className="text-xl font-bold mb-6 gradient-text">{category.title}</h3>
              
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary rounded-full"
                        style={{ width: `${skill.level}%`, 
                        transition: 'width 1s ease-in-out',
                        animation: `skillProgress-${skillIndex} 1.5s ease-out forwards` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
