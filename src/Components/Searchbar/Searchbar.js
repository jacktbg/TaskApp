import "./searchbar.css";
import lens from "./Lens.svg";
import bell from "./Bell.svg";
import profile from "./Profile.svg";

export const Searchbar = () => {
  return (
    <div className="Searchbar">
      <div className="searchbar-container">
        <img src={lens} alt="lens" className="lens" />
        <input placeholder="Search" className="input"></input>
        <img src={bell} alt="bell" className="bell" />
        <img src={profile} alt="profile" className="profile-img" />
      </div>
    </div>
  );
};
