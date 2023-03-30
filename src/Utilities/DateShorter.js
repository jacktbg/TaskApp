/* because I receive the all datatime, and just need the yyyy/mm/dd */
export const DateShorter = (val) => {
  const keyWord = "T"
  return val.split(keyWord)[0]
}
