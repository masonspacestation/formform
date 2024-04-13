import { generateId } from "../utils/GenerateId.js"


function checkIfString(fieldTitles) {
  if (typeof fieldTitles == "string") {
    console.log('checkifarray', typeof fieldTitles);
    let titlesArray = []
    let splitFieldTitles = fieldTitles.split(',')

    titlesArray = splitFieldTitles
    return titlesArray
  } else {
    return fieldTitles
  }
  // if it's not a string, I want to use it as is. if it IS a string, I want to splitToArray(fieldTitles)
}


export class Form {

  constructor(data) {
    this.id = generateId(),
      this.formTitle = data.formTitle,
      // this.fieldTitles = splitToArray(data.fieldTitles),  // ? data.fieldTitles.split(',').map(fieldTitles => fieldTitles.trim()) : [],
      // this.fieldTitles = data.fieldTitles ? data.fieldTitles : data.fieldTitles.split(',').map(title => title.trim()),
      this.fieldTitles = checkIfString(data.fieldTitles),
      this.fieldTypes = data.fieldTypes,
      this.formStyle = data.formStyle
  }






  get CustomizerDisplay() {
    return `
    <div class="d-flex align-items-end">
    <div class="col-2" id="titles-columns">
      <h5>${this.formTitle}:</h5>
    </div>
    <div class="col-3" id="selectors">
      <label for="${this.fieldTitles}">Select Input Type</label>
      <select class="${this.fieldTitles}" name="${this.fieldTitles}" id="${this.fieldTitles}" required>
        <option value="text">Text</option>
        <option value="dropdown">Dropdown</option>
        <option value="checkbox">Checkbox</option>
        <option value="radio">Radio</option>
      </select>
    </div>

    <div class="col-1" id="form-orderer">
      <label for="form-order">Order</label>
      <input type="text" id="form-order" name="form-order" minlength="2" maxlength="35" class="form-control">
    </div>
</section>
</div>
  `
  }

}