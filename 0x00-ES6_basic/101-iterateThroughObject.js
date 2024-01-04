export default function iterateThroughObject(reportWithIterator) {
  let result = '';
  let employee;

  while ((employee = reportWithIterator.next().value) !== undefined) {
    result += `${employee} | `;
  }

  // Remove the trailing ' | ' from the result
  return result.slice(0, -3);
}
