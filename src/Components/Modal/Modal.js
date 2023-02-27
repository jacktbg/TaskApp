import "./modal.css";
import {Input} from "./Input/Input";
import {Adds} from "./Adds/Adds";
import {Buttons} from "./Buttons/Buttons";
export const Modal = () => {
  return (
    <div className="Modal">
      <div className="modal-container">
        <Input />
        <Adds />
        <Buttons />
      </div>
    </div>
  );
};
