import { generateId } from "../utils/GenerateId.js"


function splitToArray(fieldTitles) {
  console.log('splittoarray ', typeof fieldTitles);
  const titlesArray = []
  // let titlesToSplit = fieldTitles
  fieldTitles.split(',')
  fieldTitles.push(titlesArray)
  return titlesArray
}


function checkIfString(fieldTitles) {
  if (typeof fieldTitles == "string") {
    console.log('checkifarray', typeof fieldTitles);
    let titlesArray = []
    // let titlesToSplit = fieldTitles
    let splitFieldTitles = fieldTitles.split(',')
    titlesArray = splitFieldTitles
    return titlesArray
  } else {
    return fieldTitles
  }


  // if it's not a string, I want to use it as is. if it IS a string, I want to splitToArray(fieldTitles)
}
//const titlesArray = newFormData.split(', ');
//   // return titlesArray
//   AppState.form.fieldTitles = titlesArray

export class Form {

  constructor(data) {
    this.id = generateId,
      this.formTitle = data.formTitle,
      // this.fieldTitles = splitToArray(data.fieldTitles),  // ? data.fieldTitles.split(',').map(fieldTitles => fieldTitles.trim()) : [],
      // this.fieldTitles = data.fieldTitles ? data.fieldTitles : data.fieldTitles.split(',').map(title => title.trim()),
      this.fieldTitles = checkIfString(data.fieldTitles),
      this.fieldTypes = data.fieldTypes,
      this.formStyle = data.formStyle
  }






  //   get CustomizerDisplay() {
  //     return `

  // `
  //   }

}