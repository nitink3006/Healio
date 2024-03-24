import React, { useState } from "react";

const Contact = () => {
  /*const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Implement form submission logic here (e.g., using Axios for API calls or sending emails)
    console.log("Form submitted:", formData); // For demonstration purposes
  };*/

  return (
    <section>
      <div className="px-4 mx-auto max-w-screen-md ">
        <h2 className="heading text-center">Contact Us</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text_para">
          Got a technical issue? Want to send feedback about a beta feature? Let
          us know.
        </p>
        <form /*onSubmit={handleSubmit}*/ className="space-y-8">
          <div>
            <label htmlFor="name" className="form__label">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="form__input mt-1"
              name="name"
              /*value={formData.name}
              onChange={handleInputChange}*/
            />
          </div>
          <div>
            <label htmlFor="email" className="form__label">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="example@gmail.com"
              className="form__input mt-1"
              name="email"
              /*value={formData.email}
              onChange={handleInputChange}*/
            />
          </div>
          <div>
            <label htmlFor="subject" className="form__label">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              placeholder="Let us know how we can help you"
              className="form__input mt-1"
              name="subject"
              /*value={formData.subject}
              onChange={handleInputChange}*/
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="form__label">
              Message
            </label>
            <textarea
              rows="6"
              id="message"
              placeholder="Leave a comment...."
              className="form__input mt-1 "
              name="message"
              /*value={formData.message}
              onChange={handleInputChange}*/
            />
          </div>
          <button type="submit"  className="btn rounded sm:w-fit">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
