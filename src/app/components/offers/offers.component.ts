import { Component } from '@angular/core';

import { SelectFilterComponent } from '../select-filter/select-filter.component';

@Component({
  selector: 'app-offers',
  standalone: true,
  imports: [SelectFilterComponent],
  templateUrl: './offers.component.html',
  styleUrl: './offers.component.scss',
})
export class OffersComponent {}
