const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">Get in Touch</h2>
        <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">
              Name
            </label>
            <input type="text" id="name" className="w-full px-3 py-2 bg-gray-800 rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">
              Email
            </label>
            <input type="email" id="email" className="w-full px-3 py-2 bg-gray-800 rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-2">
              Message
            </label>
            <textarea id="message" rows={4} className="w-full px-3 py-2 bg-gray-800 rounded"></textarea>
          </div>
          <button
            type="submit"
            className="bg-pink-500 text-white px-6 py-3 rounded hover:bg-pink-600 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact

