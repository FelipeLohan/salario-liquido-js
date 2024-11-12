import * as SalaryService from './services/SalaryService.js'
import Employee from './models/Employee.js'

const dados = document.getElementById('grossSalaryInput').innerHTML.split('\n')

const employee = new Employee(dados[0], Number(dados[1]))
console.log(employee)

const netSalary = SalaryService.netSalaty(employee)
console.log(netSalary)

console.log(`Funcionário = ${employee.name}\nSalário Bruto = ${employee.grossSalary.toFixed(2)}\nSalário Liquido = ${netSalary.toFixed(2)}`)

