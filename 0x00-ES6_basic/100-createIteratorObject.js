export default function createIteratorObject(report) {
  const departments = report.allEmployees;
  const iterator = {
    currentDepartment: 0,
    currentEmployee: 0,
    next() {
      const departmentNames = Object.keys(departments);
      if (this.currentDepartment < departmentNames.length) {
        const currentDepartmentName = departmentNames[this.currentDepartment];
        const employeesInCurrentDepartment = departments[currentDepartmentName];
        const employee = employeesInCurrentDepartment[this.currentEmployee];

        if (this.currentEmployee < employeesInCurrentDepartment.length) {
          this.currentEmployee++;
        } else {
          this.currentDepartment++;
          this.currentEmployee = 0;
        }

        return {
          value: employee,
          done: false,
        };
      }

      return {
        done: true,
      };
    },
  };

  return iterator;
}
