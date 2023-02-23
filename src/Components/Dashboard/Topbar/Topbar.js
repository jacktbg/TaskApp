import "./topbar.css";
import list from "./List.svg";
import square from "./Square.svg";
import plus from "./Plus.svg";

export const Topbar = (props) => {
  return (
    <div className="Topbar">
      <div className="block1">
        <button
          onClick={() => props.handleButtonClick("list")}
          className="list"
        >
          <img src={list} alt="list" />
        </button>
        <button
          onClick={() => props.handleButtonClick("panel")}
          className="square"
        >
          <img src={square} alt="square" />
        </button>
      </div>
      <div className="block2">
        <button className="plus">
          <img src={plus} alt="plus" />
        </button>
      </div>
    </div>
  );
};
