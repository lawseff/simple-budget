import { IsoDate } from '../service/date-service.ts'

export interface MonetaryValue {
  amount: string
  currency: string
}

export interface Entry {
  id?: string
  money: MonetaryValue
  /** ISO local date (yyyy-MM-dd). */
  date: IsoDate
  categoryCode: string
  comment?: string
}

export interface BudgetSection {
  total: MonetaryValue
  relativeToIncome?: string
  entries: Entry[]
}

export interface MonthlyReport {
  income: BudgetSection
  needs: BudgetSection
  wants: BudgetSection
  savings: BudgetSection
}

export enum CategoryType {
  INCOME = 'INCOME',
  SAVINGS = 'SAVINGS',
  NEEDS = 'NEEDS',
  WANTS = 'WANTS',
}

export interface Category {
  code: string
  type: CategoryType
}
