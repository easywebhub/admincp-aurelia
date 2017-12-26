import { inject } from "aurelia-framework";
import { ValidationController, ValidationControllerFactory } from "aurelia-validation";
import { DialogController } from "aurelia-dialog";
import { User} from "modules/samples/users/models/user";

@inject(DialogController, ValidationControllerFactory)
export class UserDetail {
    validationcontroller: ValidationController;
    constructor(private ctrl: DialogController, private controllerFactory) {
      this.validationcontroller = controllerFactory.createForCurrentScope();
    }

    item: User;
    activate(dto: User) {
      this.item = dto
    }    

    save() {
        // this.validationcontroller.validate({ object: this.item, rules: userValidationRules }).then((result) => {
        //     if (result.valid) {
        //       this.ctrl.ok(this.item);
        //     }
        // })    
    }
}    