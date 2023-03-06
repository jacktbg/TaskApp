import "./label.css";

export const LabelModal = ({handleCloseModal}) => {
  const tags = ["ANDROID", "IOS", "NODE_JS", "RAILS", "REACT"];
  return (
    <div className="LabelModal">
      <p>Tag Title</p>
      {tags.map((tag) => (
        <div key={tag}>
          <input type="checkbox" value={tag} onClick={handleCloseModal} />
          <label htmlFor={tag}>{tag}</label>
        </div>
      ))}
    </div>
  );
};
