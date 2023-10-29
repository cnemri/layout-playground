import React from "react";

type Props = {};

const ContactForm = (props: Props) => {
  return (
    <form action="#" method="post" className="space-y-4 w-full px-10">
      <div>
        <label htmlFor="name" className="block mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          placeholder="John Doe"
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label htmlFor="email" className="block mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="john.doe@example.com"
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label htmlFor="subject" className="block mb-2">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          placeholder="Inquiry about services"
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label htmlFor="message" className="block mb-2">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          placeholder="Your message here..."
          className="w-full p-2 border rounded"
        ></textarea>
      </div>
      <div>
        <button className="mt-4 bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition-all duration-300">
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
