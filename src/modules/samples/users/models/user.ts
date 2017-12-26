import { ValidationRules } from "aurelia-validation";



export class User {
    id: number
    username: string;
    password: string;
    emailVerified: boolean;
    email: string;
}    


// export const userValidationRules = ValidationRules
// .ensure((i: User) => i.id).required().withMessage('Trường này là bắt buộc')
// .ensure((i: User) => i.email).required().email().withMessage('Email chưa đúng định dạng')

//  .on(User).rules