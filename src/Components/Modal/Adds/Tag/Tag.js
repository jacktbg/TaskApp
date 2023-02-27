import tag from "../../Images/Tag.svg";

export const Tag = () => {
  return (
    <button className="Tag">
      <img src={tag} alt="label or tag" />
      <p>Label</p>
    </button>
  );
};
