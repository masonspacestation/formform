import { generateId } from "../utils/GenerateId.js"


// function splitToArray(fieldTitles) {
//   const titlesArray = []
//   let titlesToSplit = fieldTitles.split(',')
//   return titlesArray
// }

//const titlesArray = newFormData.split(', ');
//   // return titlesArray
//   AppState.form.fieldTitles = titlesArray

export class Form {

  constructor(data) {
    this.id = generateId,
      this.formTitle = data.formTitle,
      // this.fieldTitles = splitToArray(data.fieldTitles)  // ? data.fieldTitles.split(',').map(fieldTitles => fieldTitles.trim()) : [],
      this.fieldTitles = data.fieldTitles,  // ? data.fieldTitles.split(',').map(fieldTitles => fieldTitles.trim()) : [],
      this.fieldTypes = data.fieldTypes,
      this.formStyle = data.formStyle
  }






  get CustomizerDisplay() {
    return `

`
  }

}