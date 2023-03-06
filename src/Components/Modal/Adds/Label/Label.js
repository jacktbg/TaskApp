import tag from "../../Images/Tag.svg";
import {ModalService} from "../../../../Services/ModalService";
import {LabelModal} from "./LabelModal";
export const Label = () => {
  const {showModal, handleCloseModal, handleShowModal} = ModalService();
  return (
    <div className="Label">
      <button onClick={handleShowModal}>
        <img src={tag} alt="label or tag" />
        <p>Label</p>
      </button>
      {showModal && <LabelModal handleCloseModal={handleCloseModal} />}
    </div>
  );
};
