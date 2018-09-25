import { RadioOptions } from './radio-options.model';
import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from "@angular/forms";

@Component({
  selector: 'mt-radio',
  templateUrl: './radio.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(()=>RadioComponent),
      multi: true
    }
  ]
})
export class RadioComponent implements OnInit, ControlValueAccessor {

  onChange : any;
  
  @Input() options: RadioOptions[];

  value : any;

  constructor() { }

  ngOnInit() {
  }

  writeValue(obj: any): void {
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    console.log("Method not implemented.");
  }
  setDisabledState?(isDisabled: boolean): void {
    console.log("Method not implemented.");
  }

  setValue(value : any) {
    this.value = value;
    this.onChange(this.value);
  }

  

}
