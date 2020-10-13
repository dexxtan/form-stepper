// @flow

export const parseStringToNumber = (string: string): number => {
  const result = parseInt(string, 10)
  if (isNaN(result) || !isFinite(result)) {
    return 0
  }

  return result
}

export const stringifyNumber = (num: number): string => num + ''
