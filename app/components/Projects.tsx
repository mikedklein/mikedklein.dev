const Projects = () => {
  const projects = [
    {
      title: "PBS NewsHour Storymaker",
      description:
        "Modernized deployment strategy using Terraform and implemented CI/CD pipeline with CodePipeline/CodeDeploy and Github Actions.",
      technologies: "Python, Django, Terraform, AWS",
    },
    {
      title: "Micro Front-end Application at Slalom",
      description:
        "Developed and maintained a large-scale micro front-end application using Apollo Federation, Single-Spa-React, and TypeScript.",
      technologies: "TypeScript, Apollo Federation, Single-Spa-React, React, AWS CDK",
    },
    {
      title: "Hansa Small Business Platform",
      description:
        "Led the development of a platform helping small businesses maintain accurate data and access better credit opportunities.",
      technologies: "TypeScript, Prisma, Tailwind, Remix, Fly.io, GitHub Actions",
    },
    {
      title: "Graylog Security Content",
      description:
        "Triaged and prioritized development efforts for Graylog's security content, designing new features and building frontend components.",
      technologies: "React, Java, TypeScript, GitHub Actions",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">Key Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-pink-500">{project.title}</h3>
              <p className="mb-4">{project.description}</p>
              <p className="text-sm text-gray-400">Technologies: {project.technologies}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

