import person from "../../Images/Person.svg";
import {AssigneeModal} from "./AssigneeModal";
import {ModalService} from "../../../../Services/ModalService";

export const Assignee = () => {
  const {showModal, handleShowModal, handleCloseModal} = ModalService();
  return (
    <div className="Assignee">
      <button
        onClick={showModal ? handleCloseModal : handleShowModal}
        aria-label="Open assignee selection modal"
      >
        <img src={person} alt="person symbol" />
        <p>Assignee</p>
      </button>
      {showModal && <AssigneeModal handleCloseModal={handleCloseModal} />}
    </div>
  );
};
