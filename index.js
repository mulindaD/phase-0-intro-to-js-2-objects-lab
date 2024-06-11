// Write your solution in this file!

const employee = {
    name: "John Doe",
    streetAddress: "Kwazulu Natal"
}

function updateEmployeeWithKeyAndValue(object, key, value) {
  return {
    ...object,
    [key]: value,
  }
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    const newEmployee = employee
    newEmployee[key] = value;
    return newEmployee
}

function deleteFromEmployeeByKey(obj1, key) {
  const newObj = { ...obj1}
  delete newObj[key]
  return newObj
}

function destructivelyDeleteFromEmployeeByKey (obj, key) {
    delete obj[key]
    return obj
}