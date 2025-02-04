import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p>
          &copy; {new Date().getFullYear()} Mike Klein. All rights reserved.
        </p>
        <div className="mt-4 flex justify-center space-x-4">
          <a
            href="https://github.com/mikedklein"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-pink-400"
          >
            <Github className="w-6 h-6" />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/michael-klein-52104723/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-pink-400"
          >
            <Linkedin className="w-6 h-6" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a
            href="mailto:mdavidkleinjr@gmail.com"
            className="text-pink-500 hover:text-pink-400"
          >
            <Mail className="w-6 h-6" />
            <span className="sr-only">Email</span>
          </a>
        </div>
        <div className="mt-4">
          <a href="/sitemap.xml" className="text-pink-500 hover:text-pink-400">
            Sitemap
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
