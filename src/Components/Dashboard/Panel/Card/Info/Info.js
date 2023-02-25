import "./info.css";
import menu from "./ThreePoints.svg";

export const Info = () => {
  return (
    <div className="Info">
      <p>Titulo</p>
      <button>
        <img src={menu} alt="three points menu" />
      </button>
    </div>
  );
};