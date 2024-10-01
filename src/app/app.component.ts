import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div class="example-config">
      <p>
        Only values between {{ min | kendoDate : "d" }} and
        {{ max | kendoDate : "d" }} are valid
      </p>
      <p>Errors: {{ dateModel.errors | json }}</p>
    </div>
    <div class="example-wrapper">
      <p>Select a date:</p>
      <kendo-datepicker
        [min]="min"
        [max]="max"
        [(ngModel)]="value"
        #dateModel="ngModel"
      ></kendo-datepicker>
    </div>
  `,
  styles: [
    `
      kendo-datepicker {
        width: 170px;
      }
    `,
  ],
})
export class AppComponent {
  public min: Date = new Date(0, 2, 10);
  public max: Date = new Date(2002, 2, 10);
  public value: Date = new Date(2001, 2, 10);
}
