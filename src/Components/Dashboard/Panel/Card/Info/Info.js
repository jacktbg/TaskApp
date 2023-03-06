import "./info.css";
import menu from "../Images/ThreePoints.svg";

export const Info = ({name}) => {
  return (
    <div className="Info">
      <p>{name}</p>
      <button>
        <img src={menu} alt="three points menu" />
      </button>
    </div>
  );
};
