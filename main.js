// Write your code below
var exampleObject = {
  "testKey" : "testValue"
}

function getValue(obj,key) {
  return obj[key];
}

console.log(getValue(exampleObject,"testKey"));