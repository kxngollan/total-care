import "./Landing.css";
import hero from "./images/image-hero-desktop.png";

const Landing = () => {
  return (
    <section id="landing">
      <div className="content">
        <h1>
          Find <br />
          Your Next Job
        </h1>
        <p>
          Find the ideal job for you and build your career with{" "}
          <strong>Total Care Recruitment</strong>. We are here to help you
          strive and be all you can be!
        </p>
        <a href="#" className="btn">
          Learn more
        </a>
      </div>
      <img src={hero} alt="hero" className="desk" />
    </section>
  );
};

export default Landing;
