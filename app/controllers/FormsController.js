import { AppState } from "../AppState.js";
import { formsService } from "../services/FormsService.js";
import { getFormData } from "../utils/FormHandler.js";



export class FormsController {
  constructor(data) {
    console.log('✅ 📋 🎮');

  }



  createForm() {
    event.preventDefault()
    // let newFormData = getFormData(event.target)

    const newFormData = document.getElementById('field-titles').value
    console.log('createForm 1: ', newFormData);
    this.makeTitlesArray(newFormData)
    /** good resource on getting form values as strings: https://stackoverflow.com/questions/11563638/how-do-i-get-the-value-of-text-input-field-using-javascript */

    const newTypesData = document.getElementById('form-input-type').value
    console.log('createForm 2: ', newTypesData);
    this.makeTypesArray(newTypesData)

  }


  makeTitlesArray(newFormData) {
    const titlesArray = newFormData.split(', ');
    console.log(titlesArray);
    // return titlesArray
    AppState.fieldTitles = titlesArray
    console.log('Field Titles in Appstate', AppState.fieldTitles);
  }


  makeTypesArray(newTypesData) {
    // const typesArray = newTypesData.split(',')
    console.log('Make Types Array: ', newTypesData);
  }



















}