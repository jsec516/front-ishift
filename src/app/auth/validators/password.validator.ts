import { Control, ControlGroup } from "angular2/common";

export class PasswordValidator {
    
    // compare password and confirm password field value
    static matchPassword(group): any {
        let password = (<Control>group.controls['password']);
        let confirm = (<Control>group.controls['confirm']);

        // Don't kick in until user touches both fields   
        if (password.pristine || confirm.pristine) {
            return null;
        }

        // Mark group as touched so we can add invalid class easily
        group.markAsTouched();

        if (password.value === confirm.value) {
            return null;
        }

        return {
            isValid: true
        };
    }

}
