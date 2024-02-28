import "./ContactForm.css";

const ContactForm = () => {
  return (
    <section className="contact">
      <h1>Join us Today</h1>
      <div className="contact__container">
        <div className="contact_form">
          <form className="contact_form">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" minLength={2} />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" minLength={2} />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
