import "./topbar.css";
import {useEffect, useRef} from "react";
import list from "./Images/List.svg";
import square from "./Images/Square.svg";
import plus from "./Images/Plus.svg";

export const Topbar = ({activeButton, handleShowModal}) => {
  const listButtonRef = useRef(null);
  const squareButtonRef = useRef(null);
  window.onload = function () {
    document.getElementsByClassName("square")[0].focus();
  };
  useEffect(() => {
    if (activeButton === "list") {
      listButtonRef.current.focus();
    } else if (activeButton === "panel") {
      squareButtonRef.current.focus();
    }
  }, [activeButton]);

  return (
    <div className="Topbar">
      <div className="block1">
        <button className="list" ref={listButtonRef}>
          <img src={list} alt="list" />
        </button>
        <button className="square" ref={squareButtonRef}>
          <img src={square} alt="square" />
        </button>
      </div>
      <div className="block2">
        <button className="plus" onClick={handleShowModal}>
          <img src={plus} alt="plus" />
        </button>
      </div>
    </div>
  );
};
