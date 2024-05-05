import { Component, EventEmitter, Input, Output } from '@angular/core';

import type { Offering } from '../../types';

@Component({
  selector: 'app-drawer',
  standalone: true,
  imports: [],
  templateUrl: './drawer.component.html',
  styleUrl: './drawer.component.scss',
})
export class DrawerComponent {
  @Input({
    required: true,
  })
  offer: Offering = {} as Offering;
  @Output() onClose = new EventEmitter<void>();

  constructor() {}

  onCloseDrawer(): void {
    this.onClose.emit();
  }
}
