import { Injectable } from '@angular/core';

import type { Offering } from '../types';

@Injectable({
  providedIn: 'root',
})
export class GetOfferingsService {
  readonly apiURL =
    'https://credenciamentodigital.getnet.com.br/server/v1/offerings?country=BR&channel=getnet_ecommerce';

  constructor() {}

  getOfferings() {
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
