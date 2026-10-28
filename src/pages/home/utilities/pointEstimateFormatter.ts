export const pointEstimateFormatter = (
  pointEstimate: string
): string => {
  switch (pointEstimate.toLowerCase()) {
    case "eight":
      return "8"
    case "four":
      return "4"
    case "two":
      return "2"
    case "one":
      return "1"
    case "zero":
      return "0"
    default:
      return "undefined"
  }
}
