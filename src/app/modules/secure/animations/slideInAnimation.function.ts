import { animate, style, transition, trigger } from '@angular/animations';

export const slideInOutAnimation = trigger('slideInOut', [
  transition(':enter', [
    style({ left: '-100%' }),
    animate('0.3s ease-out', style({ left: '0' }))
  ]),
  transition(':leave', [
    style({ left: '0' }),
    animate('0.3s ease-out', style({ left: '-100%' }))
  ])
]);
