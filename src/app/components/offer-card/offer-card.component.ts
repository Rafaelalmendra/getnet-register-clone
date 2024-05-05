import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-offer-card',
  standalone: true,
  imports: [],
  templateUrl: './offer-card.component.html',
  styleUrl: './offer-card.component.scss',
})
export class OfferCardComponent {
  @Input() invoiceOver!: string;
  @Input() title!: string;
  @Input() rent!: string;
  @Input() description!: string;
  @Input() getPay!: string;
  @Input() specialCondition!: string;
  @Input() image!: string;
  @Output() clickEvent = new EventEmitter<void>();

  constructor() {}

  onClick() {
    this.clickEvent.emit();
  }
}
