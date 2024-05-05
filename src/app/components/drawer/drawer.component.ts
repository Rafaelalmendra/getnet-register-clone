import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NgFor, NgIf } from '@angular/common';

import type { Offering, ProductCharacteristic } from '../../types';

@Component({
  selector: 'app-drawer',
  standalone: true,
  imports: [NgFor, NgIf, MatIconModule],
  templateUrl: './drawer.component.html',
  styleUrl: './drawer.component.scss',
})
export class DrawerComponent implements OnInit {
  @Input({
    required: true,
  })
  offer: Offering = {} as Offering;
  @Output() onClose = new EventEmitter<void>();

  characteristics: ProductCharacteristic[] = [];
  benefits: string[] = [];

  constructor() {}

  ngOnInit(): void {
    if (this.offer.name === 'Get Smart para App Eye Essencial') {
      this.characteristics =
        this.offer.items[1].product.product_characteristics;
      this.benefits = this.offer.items[1].product.product_benefits;

      return;
    }

    this.characteristics = this.offer.items[2].product.product_characteristics;
    this.benefits = this.offer.items[2].product.product_benefits;
  }

  onCloseDrawer(): void {
    this.onClose.emit();
  }
}
