import "./tags.css";
export const Tags = ({tags}) => {
  return (
    <div className="Tags">
      {tags.map((tag, index) => (
        <div className={tag} key={index}>
          <p>{tag}</p>
        </div>
      ))}
    </div>
  );
};
