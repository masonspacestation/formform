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



    // this.makeTitlesArray(newFormData)


    // const inputTitles = document.getElementById('fieldTitles').value;
    // newForm = appState.forms
    // form.fieldTitles = inputTitles


  }


  drawTitles() {
    const displayedTitles = AppState.forms || []
    let titleDisplay = ''
    displayedTitles.forEach(form => titleDisplay += form.formTitle)
    setHTML('customizer-display', titleDisplay)

  }





  // let newFormData = getFormData(event.target)


  // this one was working
  // const newTitlesData = document.getElementById('fieldTitles').value
  // console.log('createForm 1: ', newTitlesData);
  // this.makeTitlesArray(newTitlesData)
  // end the one that was working


  /** good resource on getting form values as strings: https://stackoverflow.com/questions/11563638/how-do-i-get-the-value-of-text-input-field-using-javascript */

  // const newTypesData = document.getElementById('form-input-type').value
  // console.log('createForm 2: ', newTypesData);
  // this.makeTypesArray(newTypesData)


  // makeTitlesArray(newTitlesData) {
  //   const forms = AppState.forms
  //   const titlesArray = newTitlesData.split(', ');
  //   console.log(titlesArray);
  // return titlesArray
  // AppState.forms.fieldTitles = titlesArray
  // console.log('Field Titles in Appstate', AppState.fieldTitles);
  // }


  // makeTypesArray(newTypesData) {
  // const typesArray = newTypesData.split(',')
  //   console.log('Make Types Array: ', newTypesData);
  // }








}