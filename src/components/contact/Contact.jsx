import "./Contact.css";

const Contact = () => {
  return (
    <section>
      <div className="contact">
        <div className="contact__title">
          <h1>Contact Us</h1>
        </div>
        <div className="contact__container">
          <div className="contact_form">
            <form>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" minLength={2} />
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" />
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" minLength={2} />
              <button type="submit">Send</button>
            </form>
          </div>
          <div className="contact_alternative">
            <p>
              You can also contact me through the following email address:
              <br />
              <strong>example@gmail.com</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
