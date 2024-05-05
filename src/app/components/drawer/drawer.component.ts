import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NgFor, NgIf } from '@angular/common';

import type { Offering } from '../../types';

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

  constructor() {}

  ngOnInit(): void {
    console.log('offer: ', this.offer.items[1].product.product_benefits);
  }

  onCloseDrawer(): void {
    this.onClose.emit();
  }
}
