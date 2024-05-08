function handleException(errorMessage: string): never {
  throw Error(errorMessage);
}

function runInfinity(): void {
  var i: number = 0;
  while (i < 10) {
    console.log(i);
    i++;
  }
}
runInfinity();
let a = handleException("just a test error");
console.log(">>> check a=", a);
