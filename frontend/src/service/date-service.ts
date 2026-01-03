import { format, parse, isValid } from 'date-fns'

export type IsoDate = `${number}${number}${number}${number}-${number}${number}-${number}${number}`
export type YearMonth = `${number}${number}${number}${number}-${number}${number}`

export const today = () => new Date()

export const isoDate = (date: Date): IsoDate => format(date, 'yyyy-MM-dd') as IsoDate

export const yearMonth = (date: Date): YearMonth => format(date, 'yyyy-MM') as YearMonth

export const isValidYearMonth = (value?: string): value is string => {
  if (!value) {
    return false
  }

  const date = parse(value, 'yyyy-MM', new Date())

  return isValid(date) && value === yearMonth(date)
}
