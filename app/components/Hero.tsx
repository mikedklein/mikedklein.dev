import Image from 'next/image';

const Hero = () => {
  return (
    <section className="bg-gray-800 py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center md:flex-row md:justify-center md:gap-12 max-w-6xl mx-auto">
          <div className="mb-8 md:mb-0 md:order-2">
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-pink-500">
              <Image
                src="/avatars/me.png"
                alt="Mike Klein with a caught fish"
                fill
                style={{ objectFit: 'cover' }}
                priority
                className="hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          <div className="text-center md:text-left md:order-1">
            <h1 className="text-5xl font-bold mb-4">
              <span itemProp="name">Mike Klein</span>
            </h1>
            <p className="text-2xl mb-4" itemProp="jobTitle">
              Senior Software Engineer & Technology Leader
            </p>
            <p className="text-xl mb-8 max-w-2xl" itemProp="description">
              Specializing in full-stack development, cloud technologies, and
              innovative solutions for complex challenges.
            </p>
            <div className="inline-block relative">
              <div className="absolute inset-0 bg-pink-500 transform skew-y-3 -skew-x-3"></div>
              <a
                href="#projects"
                className="relative px-8 py-3 bg-gray-900 text-white font-semibold hover:bg-gray-800 transition-colors inline-block"
                aria-label="Explore My Work"
              >
                Explore My Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
