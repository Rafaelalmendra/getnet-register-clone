import { Component, Input } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

import type { Offering } from '../../types';

@Component({
  selector: 'app-machines',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './machines.component.html',
  styleUrl: './machines.component.scss',
})
export class MachinesComponent {
  @Input({
    required: true,
  })
  offerings: Offering[] = [];

  constructor() {}

  async ngOnInit() {}
}
