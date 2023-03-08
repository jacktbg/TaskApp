import "./modal.css";
import {Input} from "./Input/Input";
import {Adds} from "./Adds/Adds";
import {Buttons} from "./Buttons/Buttons";
export const Modal = ({handleCloseModal}) => {
  return (
    <div className="Modal">
      <div className="modal-container">
        <Input />
        <Adds />
        <Buttons handleCloseModal={handleCloseModal} />
      </div>
    </div>
  );
};
