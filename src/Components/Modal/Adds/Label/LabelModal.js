import "./label.css";
import {GET_TAGS} from "../../../../Services/Queries/ValuesQueries";
import {useQuery} from "@apollo/client";

export const LabelModal = ({setTags}) => {
  const {data, loading, error} = useQuery(GET_TAGS);

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>{error.message}</p>;

  const tags = data.__type.enumValues;

  const handleTagChange = (event) => {
    const tagName = event.target.value;
    if (event.target.checked) {
      setTags((prevTags) => [...prevTags, tagName]);
    } else {
      setTags((prevTags) => prevTags.filter((tag) => tag !== tagName));
    }
  };
  return (
    <div className="LabelModal">
      <p>Tag Title</p>
      {tags.map(({name}) => (
        <div key={name}>
          <input type="checkbox" value={name} onChange={handleTagChange} />
          <label htmlFor={name}>{name}</label>
        </div>
      ))}
    </div>
  );
};
