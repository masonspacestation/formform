import { ExamplesController } from "./controllers/ExamplesController.js";
import { FormsController } from "./controllers/FormsController.js";
import { HomeController } from "./controllers/HomeController.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [HomeController],
    view: /*html*/
      `
    <div class="bg-white p-3">
      <div class="card-body">
        <p>Welcome to Trivia</p>
      </div>
    </div>
    `
  },
  {
    path: '#/forms',
    controllers: [FormsController],
    view: 'app/views/FormsView.html'

  }])