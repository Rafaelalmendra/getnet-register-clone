import { Component, Inject, Input, PLATFORM_ID } from '@angular/core';
import { NgFor, NgIf, isPlatformBrowser } from '@angular/common';

import type { Offering } from 'types';

import { DrawerComponent } from '../drawer/drawer.component';

@Component({
  selector: 'app-machines',
  standalone: true,
  imports: [NgIf, NgFor, DrawerComponent],
  templateUrl: './machines.component.html',
  styleUrl: './machines.component.scss',
})
export class MachinesComponent {
  @Input({
    required: true,
  })
  offerings: Offering[] = [];

  openDetails: boolean = false;
  activeOffer: Offering | null = null;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.platformId = platformId;
  }

  handleOpenDetails(offer: Offering): void {
    this.activeOffer = offer;
    this.openDetails = true;

    if (isPlatformBrowser(this.platformId)) {
      document.body.classList.add('no-scroll');
    }
  }

  handleCloseDetails(): void {
    this.openDetails = false;
    this.activeOffer = null;

    if (isPlatformBrowser(this.platformId)) {
      document.body.classList.remove('no-scroll');
    }
  }
}
