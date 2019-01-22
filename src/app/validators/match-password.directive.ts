import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';

@Directive({
  selector: '[matchPassword][ngModel]',
  providers: [{ provide: NG_VALIDATORS, useExisting: MatchPasswordDirective, multi: true }]
})
export class MatchPasswordDirective implements Validator {
  @Input() password: string;

  validate(control: AbstractControl): ValidationErrors | null {
    const valid = this.password === control.value;
    return valid ? null : {'matchPassword': true};
  }
}
