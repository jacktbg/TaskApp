import "./estimate.css";
import estimate from "../../Images/Estimate.svg";
import {GET_POINT_ESTIMATE} from "../../../../Services/Queries/ValuesQueries";
import {useQuery} from "@apollo/client";
import {stringToNumber} from "../../../Dashboard/Panel/Card/Timer/Timer";

export const EstimateModal = ({handleCloseModal, setPointEstimate}) => {
  const {loading, error, data} = useQuery(GET_POINT_ESTIMATE);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  const point = data.__type.enumValues;
  return (
    <div className="EstimateModal">
      <p>Estimate</p>
      <div>
        {point.map(({name}, index) => (
          <button
            key={index}
            onClick={() => {
              setPointEstimate(name);
              handleCloseModal();
            }}
          >
            <img src={estimate} alt="plus and minus" />
            <p>{stringToNumber(name)} Points</p>
          </button>
        ))}
      </div>
    </div>
  );
};
