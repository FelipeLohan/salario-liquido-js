import * as taxService from './TaxService.js'
import * as pensionService from './PensionService.js'

export function netSalaty(employee){
  const tax = taxService.tax(employee.grossSalary)
  const pension = pensionService.discount(employee.grossSalary)

  return employee.grossSalary - (tax + pension)
}