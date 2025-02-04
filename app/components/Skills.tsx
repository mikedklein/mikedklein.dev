const Skills = () => {
  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Python",
    "Django",
    "GraphQL",
    "AWS",
    "GCP",
    "Docker",
    "Kubernetes",
    "CI/CD",
    "Terraform",
    "Microservices",
    "Serverless",
    "DevOps",
    "Agile Methodologies",
    "Team Leadership",
  ]

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">Skills & Expertise</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div key={index} className="bg-gray-900 p-4 rounded-lg text-center">
              <span className="text-pink-500 text-2xl mb-2 block">{"</>"}</span>
              <span className="font-semibold">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

