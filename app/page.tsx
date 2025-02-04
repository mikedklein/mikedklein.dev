import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import Hobbies from "./components/Hobbies"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import { JsonLd } from "react-schemaorg"
import type { Person } from "schema-dts"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Hobbies />
        <Contact />
        <JsonLd<Person>
          item={{
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Mike Klein",
            jobTitle: "Senior Software Engineer & Technology Leader",
            description:
              "Specializing in full-stack development, cloud technologies, and innovative solutions for complex challenges.",
            url: "https://www.mikedklein.dev",
            sameAs: ["https://github.com/mikedklein", "https://www.linkedin.com/in/michael-klein-52104723/"],
          }}
        />
      </main>
      <Footer />
    </div>
  )
}

