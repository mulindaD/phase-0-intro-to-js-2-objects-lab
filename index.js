// Write your solution in this file!

const employee = {
    name: "John Doe",
    streetAddress: "Kwazulu Natal"
}

// function updateEmployeeWithKeyAndValue(object, key, value) {
//   return {
//     ...object,
//     [key]: value,
//   }
// }
const updateEmployeeWithKeyAndValue = (object, key, value) => {
  return {
    ...object,
    [key]: value,
  }
}

// function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
//     obj[key] = value;
//     return obj
// }

const destructivelyUpdateEmployeeWithKeyAndValue = (obj, key, value) => {
    obj[key] = value;
    return obj 
}

const deleteFromEmployeeByKey = (obj, key) => {
  const newObj = {...obj}
  delete newObj[key]
  return newObj
}
// function deleteFromEmployeeByKey(obj1, key) {
//   const newObj = { ...obj1}
//   delete newObj[key]
//   return newObj
// }

// function destructivelyDeleteFromEmployeeByKey (obj, key) {
//     delete obj[key]
//     return obj
// }

const destructivelyDeleteFromEmployeeByKey = (obj, key) => {
  delete obj[key]
  return obj
}