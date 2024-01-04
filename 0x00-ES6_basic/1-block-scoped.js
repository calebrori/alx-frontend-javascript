export default function taskBlock(trueOrFalse) {
  let task = false;
  const task2 = true;

  if (trueOrFalse) {
    let task = true; // Use let to create a block-scoped variable
    const task2 = false; // Use const for variables that won't be reassigned

    // The inner variables task and task2 won't overwrite the outer ones
  }

  return [task, task2];
}

