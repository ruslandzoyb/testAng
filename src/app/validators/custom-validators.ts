import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function alphabeticValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const valid = /^[a-zA-Zа-яА-Я]+$/.test(control.value);
    return valid ? null : { alphabetic: true };
  };
}

export function phoneValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const valid = /^\+380\d{9}$/.test(control.value);
    return valid ? null : { phone: true };
  };
}

export function dateValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0); // Set time to midnight
    const selectedDate = new Date(control.value);
    selectedDate.setHours(0, 0, 0, 0); // Set time to midnight

    return selectedDate >= currentDate ? null : { date: true };
  };
}

export function timeValidator(dateControl: AbstractControl): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) return null;

    const selectedDate = new Date(dateControl.value);
    const currentDate = new Date();

    if (selectedDate.toDateString() === currentDate.toDateString()) {
      const currentTime = new Date();
      const selectedTimeParts = control.value.split(':');
      const selectedTime = new Date();
      selectedTime.setHours(parseInt(selectedTimeParts[0], 10));
      selectedTime.setMinutes(parseInt(selectedTimeParts[1], 10));
      selectedTime.setSeconds(0);

      const twoHoursLater = new Date(currentTime.getTime() + 2 * 60 * 60 * 1000);

      return selectedTime >= twoHoursLater ? null : { invalidTime: true };
    }
    
    return null;
  };
}
