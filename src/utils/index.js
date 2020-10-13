// @flow

export const parseStringToNumber = (string: string):number => {
  const result = parseInt(string, 10)
  if (isNaN(result)) {
    return 0
  }

  return result
}
