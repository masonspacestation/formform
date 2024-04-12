import { AppState } from "../AppState.js"
import { FormsController } from "../controllers/FormsController.js"
import { Form } from "../models/Form.js"
import { loadState, saveState } from "../utils/Store.js"


class FormsService {
  createForm(newFormData) {
    // console.log('service newFormData', newFormData);
    const newForm = new Form(newFormData)
    AppState.forms.push(newForm)
    this.saveForm()
    console.log('end result: ', AppState.forms);
  }


  saveForm() {
    saveState('forms', AppState.forms)
    console.log('👋 new form here: ', AppState.forms);
  }


  loadForms() {
    const formsFromLocalStorage = loadState('forms', [Form])
    console.log("load1", formsFromLocalStorage);
    AppState.forms = formsFromLocalStorage
    console.log("we've reached the service");
  }


}


export const formsService = new FormsService()