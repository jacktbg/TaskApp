import tag from "../../Images/Tag.svg";

export const Tag = () => {
  return (
    <div className="Tag">
      <button>
        <img src={tag} alt="label or tag" />
        <p>Label</p>
      </button>
    </div>
  );
};
