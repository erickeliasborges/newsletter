import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const SenhaValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    if (control.value === '123') {
        return { invalido: 'A senha não pode ser 123' };
    }
    return null;
};
