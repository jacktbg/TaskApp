export const ShorterName = (str) => {
  const nameArray = str.split(" ")
  if (nameArray.length > 2) {
    return (
      nameArray[0] + " " + nameArray[nameArray.length - 2]
    )
  } else {
    return str
  }
}
