import "./reactions.css";
import profile from "../Images/Profile.svg";
import clip from "../Images/Clip.svg";
import chart from "../Images/Chart.svg";
import coment from "../Images/Coment.svg";

export const Reactions = () => {
  return (
    <div className="Reactions">
      <div className="profile">
        <img src={profile} alt="profile" />
      </div>
      <div className="actions">
        <div className="actions-items">
          <div className="clip">
            <img src={clip} alt="clip" />
          </div>
        </div>
        <div className="actions-items">
          <p>5</p>
          <div className="chart">
            <img src={chart} alt="chart" />
          </div>
        </div>
        <div className="actions-items">
          <p>3</p>
          <div className="coment">
            <img src={coment} alt="coment" />
          </div>
        </div>
      </div>
    </div>
  );
};
