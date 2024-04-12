import { Form } from "./models/Form.js"
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /**@type {import('./models/Example.js').Example[]} */
  examples = []

  forms = [
    new Form({
      formTitle: `This`,
      fieldTitles: 'is, my, test, form',
      fieldTypes: ['text, checkbox, radio'],
      formStyle: `bootstrap`
    }),

  ]

  // fieldTitles = []

}

export const AppState = createObservableProxy(new ObservableAppState())