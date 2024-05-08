const sum = (a: number, b: number): number => {
  return a + b;
};
const substract = (a: number, b: number): number => {
  return a - b;
};
const multiplication = (a: number, b: number): number => {
  return a * b;
};
const divide = (a: number, b: number): number => {
  return a / b;
};
const play_information = (name: string, age: number, address: string) => {
  console.log("+ Name = ", name, "\n+ Age = ", age, "\n+ Address = ", address);
};
console.log("Addition : ", sum(2, 3));
console.log("Subtraction : ", substract(7, 4));
console.log("Multiplication : ", multiplication(2, 4));
console.log("Division : ", divide(4, 2));
play_information("Nguyen Bao Huy", 12, "Binh Dinh");
