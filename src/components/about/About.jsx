import "./About.css";
import man from "./images/man.jpg";
import woman from "./images/woman.jpg";

const About = () => {
  const staff = [
    {
      name: "John Doe",
      role: "Manager",
      image: man,
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisi ut aliquam.",
    },
    {
      name: "Jane Doe",
      role: "Developer",
      image: woman,
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisi ut aliquam.",
    },

    {
      name: "Alice Johnson",
      role: "Tester",
      image: woman,

      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisi ut aliquam.",
    },
    {
      name: "Mike Brown",
      role: "HR",
      image: man,

      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisi ut aliquam.",
    },
  ];

  return (
    <section id="about">
      <h1>About Us</h1>
      <p>
        Welcome to Totally Care Recruitment, your trusted partner in navigating
        the dynamic world of talent acquisition and career advancement. At
        Totally Care Recruitment, we pride ourselves on delivering comprehensive
        solutions that prioritize the needs of both employers and job seekers.
        With a steadfast commitment to excellence, integrity, and personalized
        service, we strive to exceed expectations in every interaction. Whether
        you're a company seeking top-tier talent or an individual pursuing your
        next career opportunity, Totally Care Recruitment is here to provide
        expert guidance and support every step of the way. Together, let's
        unlock the full potential of your workforce and propel your career to
        new heights.
      </p>
      <h2>Meet the team</h2>
      <div className="meetStaff">
        {staff.map((person, index) => (
          <div key={index} className="person">
            <img src={person.image} alt={person.name} />
            <h2>{person.name}</h2>
            <p>{person.role}</p>
            <p>{person.info}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
