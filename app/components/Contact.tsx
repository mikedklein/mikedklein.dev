'use client';
import { useActionState } from 'react';
import { contactMe } from '../actions/contact-me';

const Contact = () => {
  const [state, formAction, isPending] = useActionState(contactMe, {
    success: false,
    errors: {},
    message: '',
  });

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">Get in Touch</h2>
        <form action={formAction} className="max-w-lg mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-2 bg-gray-800 rounded"
              required
            />
            {state.errors?.name && (
              <p className="text-red-500 text-sm mt-1">
                {state.errors.name[0]}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 bg-gray-800 rounded"
              required
            />
            {state.errors?.email && (
              <p className="text-red-500 text-sm mt-1">
                {state.errors.email[0]}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full px-3 py-2 bg-gray-800 rounded"
              required
            ></textarea>
            {state.errors?.message && (
              <p className="text-red-500 text-sm mt-1">
                {state.errors.message[0]}
              </p>
            )}
          </div>
          <button
            type="submit"
            disabled={isPending}
            className="bg-pink-500 text-white px-6 py-3 rounded hover:bg-pink-600 transition-colors disabled:opacity-50"
          >
            {isPending ? 'Sending...' : 'Send Message'}
          </button>
          {state.message && (
            <p
              className={`mt-4 text-center ${
                state.success ? 'text-green-500' : 'text-red-500'
              }`}
            >
              {state.message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
