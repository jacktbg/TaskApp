import "./assignee.css";
import person from "../../Images/Person.svg";
import {AssigneeModal} from "./Modal/AssigneeModal";
import {ModalService} from "../../../../Services/ModalService";
import {useState} from "react";

function shortName(str) {
  const nameArray = str.split(" ");
  if (nameArray.length > 2) {
    return nameArray[0] + " " + nameArray[nameArray.length - 2];
  } else {
    return str;
  }
}

export const Assignee = ({setAssigneeId}) => {
  const {showModal, handleShowModal, handleCloseModal} = ModalService();
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  return (
    <div className="Assignee">
      <button
        className={name ? "assignee-focused" : "assignee-button"}
        onClick={showModal ? handleCloseModal : handleShowModal}
        aria-label="Open assignee selection modal"
      >
        <img
          className={image ? "assignee-img" : "person-img"}
          src={image ? image : person}
          alt="person symbol"
        />
        <p>{name ? shortName(name) : "Assignee"}</p>
      </button>
      {showModal && (
        <AssigneeModal
          handleCloseModal={handleCloseModal}
          setAssigneeId={setAssigneeId}
          setImage={setImage}
          setName={setName}
        />
      )}
    </div>
  );
};
