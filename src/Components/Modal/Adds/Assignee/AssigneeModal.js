import PropTypes from "prop-types";
import "./assignee.css";
import profile from "../../Images/Profile.svg";

const AssigneeModalButton = ({name, handleCloseModal}) => {
  return (
    <button onClick={handleCloseModal} aria-label={`Assign task to ${name}`}>
      <img src={profile} alt="profile" />
      <p>{name}</p>
    </button>
  );
};

export const AssigneeModal = ({handleCloseModal}) => {
  const fullName = [
    "Jerome Bell",
    "Robert Fox",
    "Marvin McKinney",
    "Jone Cooper",
    "Ralph Edwards",
    "Wade Warren",
    "Savannah Nguyen",
  ];

  return (
    <div className="AssigneeModal">
      <p>Assign To...</p>
      {fullName.map((name, index) => (
        <AssigneeModalButton
          key={index}
          name={name}
          handleCloseModal={handleCloseModal}
        />
      ))}
    </div>
  );
};
AssigneeModalButton.propTypes = {
  handleCloseModal: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};
