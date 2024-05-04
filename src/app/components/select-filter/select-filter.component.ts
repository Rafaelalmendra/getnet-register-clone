import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-select-filter',
  standalone: true,
  imports: [],
  templateUrl: './select-filter.component.html',
  styleUrl: './select-filter.component.scss',
})
export class SelectFilterComponent {
  @Input() title!: string;

  constructor() {}
}
