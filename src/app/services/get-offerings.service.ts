import { Injectable, makeStateKey } from '@angular/core';

import type { Offering } from '../types';
import { TransferState } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class GetOfferingsService {
  readonly apiURL =
    'https://credenciamentodigital.getnet.com.br/server/v1/offerings?country=BR&channel=getnet_ecommerce';

  constructor(private transferState: TransferState) {}

  getOfferings() {
    const offeringsKey = makeStateKey<Offering[]>('offerings');
    let offerings = this.transferState.get(offeringsKey, []);

    if (offerings.length) {
      console.log('Offerings from cache');
      return Promise.resolve(offerings);
    }

    return fetch(this.apiURL)
      .then((response) => response.json())
      .then((data) =>
        data
          .filter(
            (offering: Offering) => offering.campaign_code === '1-HLSIMAM'
          )
          .map((offering: Offering) => ({
            ...offering,
            price: (offering.price / 100).toFixed(2).replace('.', ','),
          }))
      );
  }
}
