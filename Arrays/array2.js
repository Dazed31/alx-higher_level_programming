const task = ['buy groceries'];
task.push('wash the groceries');
task.unshift('wake up');
console.log(task);

const lastgroc = task.pop();
const firstgroc = task.shift();

console.log(lastgroc);
console.log(firstgroc);