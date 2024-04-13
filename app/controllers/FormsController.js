import { AppState } from "../AppState.js";
import { formsService } from "../services/FormsService.js";
import { getFormData } from "../utils/FormHandler.js";
import { setHTML } from "../utils/Writer.js";



export class FormsController {
  constructor(data) {
    console.log('✅ 📋 🎮');
    formsService.loadForms()
    this.drawTitles()
    AppState.on('forms', this.drawTitles)
    AppState.on('activeForm', this.drawActiveFormInCustomizer)
  }


  checkButtonTest() {
    const checkedButton = document.getElementById('button-test')
    if (checkedButton)
      console.log();
  }


  createForm() {
    event.preventDefault()

    const form = event.target
    const newFormData = getFormData(form)

    console.log('newformdata ', newFormData);
    formsService.createForm(newFormData)
    // @ts-ignore
    form.reset()
  }



  drawTitles() {
    const displayedTitles = AppState.forms || []
    let titleDisplay = ''
    displayedTitles.forEach(form => titleDisplay += form.formTitle)
    setHTML('customizer-display', titleDisplay)

  }

  drawCustomizer() {
    const allForms = AppState.forms
    let formsContent = ''
    allForms.forEach(form => formsContent += form.CustomizerDisplay)
  }


  drawActiveFormInCustomizer() {
    const activeForm = AppState.activeForm
    let activeFormContent = ''
    activeForm.fieldTitles.forEach(fieldTitle => activeFormContent += fieldTitle.CustomizerDisplay)
    setHTML('field-editor', activeFormContent)
    console.log(activeFormContent);
  }







}