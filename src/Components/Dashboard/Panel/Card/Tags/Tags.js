import "./tags.css";
export const Tags = ({tags}) => {
  return (
    <div className="Tags">
      {tags.map((tag) => (
        <div className={tag}>
          <p>{tag}</p>
        </div>
      ))}
    </div>
  );
};
