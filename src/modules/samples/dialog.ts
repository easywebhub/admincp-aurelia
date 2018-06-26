import { inject } from 'aurelia-framework';
import { DialogModal } from "modules/samples/dialog-modal";
import { DialogService } from "aurelia-dialog";

@inject(DialogService)
export class EwDialog {

    constructor(private dialogService: DialogService){

    }  
    activate() {
    }

    async runCreate() {
      this.dialogService.open({ viewModel: DialogModal }).whenClosed((result) => {
        if (!result.wasCancelled) {
        } else {
        }
      });
    }    
}    
