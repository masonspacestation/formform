import { FormsController } from "../controllers/FormsController.js"



class FormsService {





  connectionTest(test) {
    console.log('service connection test: ', test);
  }
}


export const formsService = new FormsService()