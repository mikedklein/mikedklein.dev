import Link from "next/link"

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-pink-500">
            <span itemProp="name">MK</span>
          </Link>
          <ul className="flex space-x-4" role="navigation" aria-label="Main">
            <li>
              <Link href="#about" className="hover:text-pink-500 transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="#skills" className="hover:text-pink-500 transition-colors">
                Skills
              </Link>
            </li>
            <li>
              <Link href="#projects" className="hover:text-pink-500 transition-colors">
                Projects
              </Link>
            </li>
            <li>
              <Link href="#hobbies" className="hover:text-pink-500 transition-colors">
                Hobbies
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-pink-500 transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header

