export const StringToNumber = (str) => {
  const numberMap = {
    ZERO: 0,
    ONE: 1,
    TWO: 2,
    FOUR: 4,
    EIGHT: 8,
  }
  return numberMap[str]
}
