
const Skills = () => {
  const skillCategories = [
    {
      title: 'AI & ML',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'TensorFlow', level: 80 },
        { name: 'OpenAI API', level: 90 },
        { name: 'NLP', level: 85 },
        { name: 'Computer Vision', level: 75 },
      ]
    },
    {
      title: 'Web Development',
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'JavaScript', level: 95 },
        { name: 'WebAssembly', level: 75 },
        { name: 'Node.js', level: 85 },
        { name: 'HTML/CSS', level: 95 },
      ]
    },
    {
      title: 'SEO & Content',
      skills: [
        { name: 'Keyword Research', level: 90 },
        { name: 'Technical SEO', level: 85 },
        { name: 'Content Strategy', level: 90 },
        { name: 'Article Writing', level: 95 },
      ]
    },
    {
      title: 'Tools & Tech',
      skills: [
        { name: 'Git/GitHub', level: 90 },
        { name: 'RESTful APIs', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'IoT Integration', level: 75 },
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

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
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
