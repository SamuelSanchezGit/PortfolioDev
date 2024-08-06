import React, { useState } from 'react';

const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/mvgpaeyv', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: JSON.stringify(Object.fromEntries(data.entries())),
      });

      if (response.ok) {
        form.reset();
        setStatus('Merci pour votre message !');
      } else {
        setStatus('Oups ! Une erreur est survenue. Veuillez réessayer.');
      }
    } catch (error) {
      setStatus('Oups ! Une erreur est survenue. Veuillez réessayer.');
    }
  };

  return (
    <div id="contact" className="flex flex-col items-center justify-center min-h-screen bg-gray-200 p-4">
      <h1 className="text-4xl font-bold mb-4">Contactez-moi</h1>
      <p className="text-lg mb-8">Si vous avez des questions ou souhaitez me contacter, n'hésitez pas à m'envoyer un message.</p>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md"
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Nom
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            name="name"
            type="text"
            placeholder="Votre nom"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            name="email"
            type="email"
            placeholder="Votre email"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            name="message"
            placeholder="Votre message"
            rows="4"
            required
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Envoyer
          </button>
        </div>
        {status && <p className="mt-4 text-center text-lg">{status}</p>}
      </form>
    </div>
  );
};

export default Contact;
