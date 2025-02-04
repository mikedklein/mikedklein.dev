import { Book, Fish, Gamepad } from "lucide-react"

const Hobbies = () => {
  const hobbies = [
    {
      name: "Reading Sci-Fi & Fantasy",
      icon: Book,
      description: "Exploring new worlds through science fiction and fantasy literature",
    },
    {
      name: "Fishing",
      icon: Fish,
      description: "Spending peaceful days on the water and catching bass",
    },
    {
      name: "Video Games",
      icon: Gamepad,
      description: "Unwinding with interactive entertainment",
    },
  ]

  return (
    <section id="hobbies" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">Hobbies</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {hobbies.map((hobby, index) => (
            <div key={index} className="text-center bg-gray-900 p-6 rounded-lg">
              <hobby.icon className="w-12 h-12 mb-4 text-pink-500 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">{hobby.name}</h3>
              <p className="text-gray-400">{hobby.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hobbies

