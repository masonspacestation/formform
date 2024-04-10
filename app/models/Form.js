import { generateId } from "../utils/GenerateId.js"




export class Form {

  constructor(data) {
    this.id = generateId,
      this.formTitle = data.formTitle,
      this.fields = data.fields,
      this.tieldTypes = data.fieldTypes,
      this.formStyle = data.formStyle
  }


  get CustomizerDisplay() {
    return `

`
  }

}