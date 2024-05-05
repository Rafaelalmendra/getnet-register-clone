import {
  Inject,
  OnInit,
  Component,
  PLATFORM_ID,
  makeStateKey,
} from '@angular/core';
import { NgFor, NgIf, isPlatformServer } from '@angular/common';
import { TransferState } from '@angular/platform-browser';

import { GetOfferingsService } from '../../services';

import type { Offering, ProductCharacteristic } from '../../types';

@Component({
  selector: 'app-machines',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './machines.component.html',
  styleUrl: './machines.component.scss',
})
export class MachinesComponent implements OnInit {
  getMini: Offering | null = null;
  benefits: ProductCharacteristic[] = [];

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private getOfferings: GetOfferingsService,
    private transferState: TransferState
  ) {
    this.platformId = platformId;
  }

  async ngOnInit(): Promise<void> {
    const offeringsKey = makeStateKey<Offering>('getMini');

    if (isPlatformServer(this.platformId)) {
      this.getOfferings.getOfferings().then((items) => {
        const getMini = items[1];
        this.transferState.set(offeringsKey, getMini);
      });
    }

    setTimeout(() => {
      let recoveredOfferings = this.transferState.get(offeringsKey, null);

      this.getMini = recoveredOfferings;

      const getBenefits =
        recoveredOfferings?.items[2].product.product_characteristics || [];

      this.benefits = getBenefits;
    }, 300);
  }
}
