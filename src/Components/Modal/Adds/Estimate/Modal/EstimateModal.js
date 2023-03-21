import "./estimateModal.css"
import estimate from "../../../Images/Estimate.svg"
import { GET_POINT_ESTIMATE } from "../../../../../Services/ValuesQueries"
import { useQuery } from "@apollo/client"
import { StringToNumber } from "../../../../../Utilities/StringToNumberUtility"

export const EstimateModal = ({
  handleCloseModal,
  setPointEstimate,
  setPointText,
}) => {
  const { loading, error, data } = useQuery(
    GET_POINT_ESTIMATE
  )
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error</p>
  const point = data.__type.enumValues
  return (
    <div className="EstimateModal">
      <p>Estimate</p>
      <div>
        {point.map(({ name }, index) => (
          <button
            key={index}
            onClick={() => {
              setPointEstimate(name)
              setPointText(name)
              handleCloseModal()
            }}
          >
            <img src={estimate} alt="plus and minus" />
            <p>{StringToNumber(name)} Points</p>
          </button>
        ))}
      </div>
    </div>
  )
}
