import "./MeetTheTeam.css";
import PropTypes from "prop-types";
import man from "./images/man.jpg";
import woman from "./images/woman.jpg";

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

const TeamMember = ({ name, role, info, image }) => (
  <div className="team-member">
    <img src={image} alt={name} />
    <h3>{name} </h3>
    <p>
      <strong>{role}</strong>
    </p>
    <p>{info}</p>
  </div>
);

TeamMember.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

const MeetTheTeam = () => {
  return (
    <div className="meet-the-team">
      <h2>Meet the Team</h2>
      <div className="team-members">
        {staff.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    </div>
  );
};

export default MeetTheTeam;
