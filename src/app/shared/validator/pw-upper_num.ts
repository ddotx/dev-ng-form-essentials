import { FormControl, ValidationErrors } from '@angular/forms';

export function passwordValidator(control: FormControl): ValidationErrors | undefined {
  if (!containsNumber(control.value) || !containsUppercaseLetter(control.value)) {
    return {
      invalidPassword: true
    };
  }
}

function containsUppercaseLetter(value: string) {
  return value.split('').find(v => v === v.toUpperCase() && !isNumber(v)) !== undefined;
}

function containsNumber(value: string) {
  return value.split('').find(v => isNumber(v)) !== undefined;
}

function isNumber(value: any) {
  return !isNaN(parseInt(value, 10));
}
