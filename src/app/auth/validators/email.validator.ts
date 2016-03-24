import { Control } from "angular2/common";

// validation result interface
interface ValidationResult {
    [key: string]: boolean;
}

export class EmailValidator {
    
    // check whether email has proper format
    static validEmail(control: Control): ValidationResult {
        var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

        if (!EMAIL_REGEXP.test(control.value)) {
            return { 'validEmail': true };
        }
    }
    
    // check whether email is already exist into the system
    static emailAlreadyExist(control: Control): Promise<ValidationResult> {
        return new Promise((resolve, reject) => {

            setTimeout(() => {
                if (control.value === "some@gmail.com") {
                    resolve({ "emailAlreadyExist": true })
                } else {
                    resolve(null);
                };

            }, 1000);
        });
    }
}
