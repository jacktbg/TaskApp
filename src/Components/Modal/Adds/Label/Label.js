import "./label.css";
import tag from "../../Images/Tag.svg";
import {ModalService} from "../../../../Services/ModalService";
import {LabelModal} from "./Modal/LabelModal";
import {useState} from "react";

export const Label = ({setTags}) => {
  const {showModal, handleCloseModal, handleShowModal} = ModalService();
  const [name, setName] = useState([]);
  return (
    <div className="Label">
      <button onClick={showModal ? handleCloseModal : handleShowModal}>
        {name.length > 0 ? null : <img src={tag} alt="label or tag" />}
        <p>{name.length > 0 ? name.join("/") : "Label"}</p>
      </button>
      {showModal && <LabelModal setTags={setTags} setName={setName} />}
    </div>
  );
};
