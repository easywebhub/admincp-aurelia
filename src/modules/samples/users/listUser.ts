import { PLATFORM } from 'aurelia-pal';
import { User } from 'modules/samples/users/models/user';
import { DialogService } from 'aurelia-dialog';
import { UserDetail } from 'modules/samples/users/dialogs/userDetail';
import { inject } from 'aurelia-framework';
import { logger } from 'modules/samples/users/logger';

const $ = PLATFORM.global.$

@inject(DialogService)
export class ListUser {

  selectedItem: User;
  constructor(private dialogService: DialogService) { }

  activate() {

  }

  async runCreate() {
    this.selectedItem = new User();
    logger.debug("runCreate()", this.selectedItem);
    this.dialogService.open({ viewModel: UserDetail, model: this.selectedItem }).whenClosed((result) => {
      if (!result.wasCancelled) {
        this.selectedItem = result.output;
      } else {
        logger.debug("runCreate()", this.selectedItem);
        logger.info("Cancel");
      }
    });
  }


  attached() {

  }

  getFakeUsers(): Array<User> {
    let users = new Array<User>(); 
    let user = new User(); 
    user.username = 'User A';
    user.email = 'userA@easywebhub.com';
    users.push(user) ;   

    user.username = 'User B';
    user.email = 'userB@easywebhub.com';
    users.push(user); 
    
    return users;     
  }
}    
