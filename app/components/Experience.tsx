const Experience = () => {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Slalom",
      period: "Dec 2024 - Present",
      description: "Developing and maintaining large-scale micro front-end applications using modern technologies.",
    },
    {
      title: "Head of Engineering",
      company: "Hansa",
      period: "Jun 2023 - May 2024",
      description:
        "Led the engineering team in developing innovative solutions for small business information management.",
    },
    {
      title: "Senior Software and Experience Engineer",
      company: "PBS NewsHour",
      period: "Nov 2022 - Jun 2023",
      description: "Designed interactive graphics and maintained the Storymaker platform for journalism education.",
    },
    {
      title: "Software Engineer",
      company: "Graylog",
      period: "Nov 2021 - Nov 2022",
      description: "Developed security content and features for Graylog's log management platform.",
    },
  ]

  return (
    <section id="experience" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">Work Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold text-pink-500">{exp.title}</h3>
              <p className="text-lg font-medium">{exp.company}</p>
              <p className="text-sm text-gray-400 mb-2">{exp.period}</p>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

