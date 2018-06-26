import { inject } from "aurelia-framework";
import { ValidationController, ValidationControllerFactory } from "aurelia-validation";
import { DialogController } from "aurelia-dialog";

@inject(DialogController, ValidationControllerFactory)
export class DialogModal {
  validationcontroller: ValidationController;
  constructor(private ctrl: DialogController, private controllerFactory) {
    //this.validationcontroller = controllerFactory.createForCurrentScope();
  }

  activate() {
  }
  save() {
  }
}    
