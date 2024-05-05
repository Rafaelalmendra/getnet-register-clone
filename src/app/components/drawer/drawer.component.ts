import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import type { Offering } from '../../types';

@Component({
  selector: 'app-drawer',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './drawer.component.html',
  styleUrl: './drawer.component.scss',
})
export class DrawerComponent {
  // @Input({
  //   required: true,
  // })
  // offer: Offering = {} as Offering;

  @Input() offer: Offering | null = null;
  @Output() onClose = new EventEmitter<void>();

  constructor() {}

  onCloseDrawer(): void {
    this.onClose.emit();
  }
}
