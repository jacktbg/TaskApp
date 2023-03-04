import {GET_USER} from "./Queries";
import {useQuery} from "@apollo/client";

export const Tests = () => {
  const {loading, error, data} = useQuery(GET_USER);

  if (loading) return <p style={{color: "#ffffff"}}>Loading...</p>;
  if (error) return <p style={{color: "#ffffff"}}>Error :(</p>;

  return data.users.map(({id, avatar, email}) => (
    <div key={id}>
      <img src={avatar} alt="avatar" />
      <p>{email}</p>
    </div>
  ));
};
