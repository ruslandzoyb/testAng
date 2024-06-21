import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function alphabeticValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const valid = /^[a-zA-Z]+$/.test(control.value);
    return valid ? null : { alphabetic: true };
  };
}
