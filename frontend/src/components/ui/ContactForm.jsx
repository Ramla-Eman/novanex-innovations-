import React, { useRef } from "react";
const ContactForm = () => {
  const formRef = useRef(null);

  const handleSubmit = () => {
    setTimeout(() => {
      formRef.current.reset(); // Reset after form opens in new tab
    }, 500);
  };
  return (
    <form
      ref={formRef}
      action="https://docs.google.com/forms/d/e/1FAIpQLSfD4aZhQvC9J64vG1GocwpXtmUukBnB084lE_8nuhxZn32lzQ/formResponse"
      method="POST"
      target="_blank"
      onSubmit={handleSubmit}
      className="flex flex-col justify-center items-start gap-2"
    >
      {/* Name */}
      <div className="contact-dev">
        <label htmlFor="name" className="contact-label">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="entry.2005620554"
          required
          placeholder="Enter Your Name"
          className="contact-input"
        />
      </div>
      {/* email */}
      <div className="contact-dev">
        <label htmlFor="" className="contact-label">
          Email
        </label>
        <input
          type="email"
          name="entry.1045781291"
          required
          placeholder="Enter Your Email"
          className="contact-input"
        />
      </div>
      <div className="flex md:flex-row flex-col gap-1 w-full">
        {/* phone number */}
        <div className="contact-dev">
          <label htmlFor="" className="contact-label">
            Phone Number
          </label>
          <input
            type="tel"
            name="entry.1539085696"
            required
            placeholder="Enter Your Email"
            className="contact-input"
          />
        </div>
        {/* date */}
        <div className="contact-dev">
          <label htmlFor="" className="contact-label">
            Date
          </label>
          <input
            type="date"
            name="entry.1570076535"
            required
            placeholder="Select Date"
            className="contact-input"
          />
        </div>
      </div>
      {/* message */}
      <div className="contact-dev">
        <label htmlFor="" className="contact-label">
          Message
        </label>
        <textarea
          name="entry.839337160"
          required
          rows="5"
          placeholder="Write Message..."
          className="contact-input"
        ></textarea>
      </div>
      <button
        type="submit"
        className="button mt-2 text-purple-button hover:text-white active:text-white"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
