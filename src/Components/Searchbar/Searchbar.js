import "./searchbar.css";
import lens from "./Images/Lens.svg";
import bell from "./Images/Bell.svg";
import profile from "./Images/Profile.svg";

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
