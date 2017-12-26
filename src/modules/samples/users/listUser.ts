import { PLATFORM } from 'aurelia-pal';
import { User } from 'modules/samples/users/models/user';
import { DialogService } from 'aurelia-dialog';
import { UserDetail } from 'modules/samples/users/dialogs/userDetail';
import { inject } from 'aurelia-framework';

const $ = PLATFORM.global.$

@inject(DialogService)
export class ListUser {

  selectedItem : User; 
  constructor(private dialogService: DialogService) {}

  activate() {
 
  }

  async runCreate() {
    this.selectedItem = new User();
    this.dialogService.open({ viewModel: UserDetail, model: this.selectedItem }).whenClosed((result) => {
        if (!result.wasCancelled) {
            this.selectedItem = result.output;
        } else {
  //          logger.info("Cancel");
        }
    });

//    logger.info("runCreate()", this.selectedItem)
    //this.userSrv.Post(this.selectedItem)
}

  
  attached() {
   
  }
}    
