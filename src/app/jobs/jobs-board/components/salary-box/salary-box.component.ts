import { Component, Input } from '@angular/core';
import { Salary } from '@core/job/interface/jobDto';
import { Currency } from '@enums/Currency';

@Component({
  selector: 'app-salary-box',
  templateUrl: './salary-box.component.html',
  styleUrls: ['./salary-box.component.scss']
})
export class SalaryBoxComponent {
  @Input() min: Salary['from'];
  @Input() max: Salary['to'];
  @Input() currency: Currency;
}
