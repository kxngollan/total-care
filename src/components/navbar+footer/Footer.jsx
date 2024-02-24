import "./Footer.css";

const Footer = () => {
  // Recruitment footer links
  const footLinks = [
    "Terms and Conditions",
    "Disclaimer",
    "Modern Slavery",
    "Privacy Policy",
    "Contact us",
    "FAQs",
  ];

  return (
    <footer>
      <ul>
        {footLinks.map((link, index) => {
          return <li key={index}>{link}</li>;
        })}
      </ul>
    </footer>
  );
};

export default Footer;
