import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Aetheris AI Chatbot',
      description: 'An advanced AI chatbot supporting PDF downloads with upcoming features like video calls & live conversation.',
      image: '/lovable-uploads/7a08c244-0655-4df5-ad54-dc359669a766.png',
      tags: ['React', 'Node.js', 'OpenAI API', 'MongoDB'],
      github: 'https://github.com/ashutoshmishra52',
      demo: 'https://www.codewithashutosh.com/',
      author: 'Ashutosh Mishra'
    },
    {
      title: 'CMS-Based Article Website',
      description: 'A custom-built Next.js-powered website for coding-related articles with SEO optimization, futuristic UI, and dynamic admin panel.',
      image: '/placeholder.svg',
      tags: ['Next.js', 'Tailwind CSS', 'CMS', 'SEO'],
      github: 'https://github.com/ashutoshmishra52',
      demo: 'https://example.com',
      author: 'Ashutosh Mishra'
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website with dark/light mode and smooth animations to showcase my skills and projects.',
      image: '/placeholder.svg',
      tags: ['React', 'Tailwind CSS', 'Vite', 'TypeScript'],
      github: 'https://github.com/ashutoshmishra52',
      demo: 'https://example.com',
      author: 'Ashutosh Mishra'
    }
  ];

  return (
    <section id="projects" className="section-padding bg-secondary/50 dark:bg-secondary/20">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-16">
          <p className="text-primary font-medium mb-2">MY WORK</p>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Featured Projects</h2>
          <div className="w-20 h-1.5 bg-primary/30 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass overflow-hidden rounded-2xl hover-card"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-2">{project.description}</p>
                <p className="text-xs text-primary mb-4">By <a href="https://medium.com/@codewithashutosh" target="_blank" rel="noreferrer" className="hover:underline">{project.author}</a></p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs px-3 py-1 bg-primary/10 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-1 text-sm transition-colors hover:text-primary"
                  >
                    <Github className="h-4 w-4" /> Code
                  </a>
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-1 text-sm transition-colors hover:text-primary"
                  >
                    <ExternalLink className="h-4 w-4" /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <a 
            href="https://github.com/ashutoshmishra52" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full transition-all hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-1"
          >
            <Github className="h-5 w-5" />
            See More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
