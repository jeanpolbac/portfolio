import {
    trigger,
    transition,
    style,
    query,
    group,
    animateChild,
    animate,
    keyframes
  } from '@angular/animations';
  
  export const slideAnimation = trigger('slideAnimation', [
  
    // Transitioning to Home
    transition('* => Home', [
      query(':enter, :leave', 
        style({ position: 'fixed', width: '100%', transform: 'translateX(100%)' }),
        { optional: true }),
  
      group([
        query(':enter', [
          style({ transform: 'translateX(100%)' }),
          animate('0.5s ease-in-out',
            style({ transform: 'translateX(0%)' }))
        ], { optional: true }),
      ])
    ]),
  
    // Transitioning to About
    transition('* => About', [
      query(':enter, :leave', 
        style({ position: 'fixed', width: '100%', transform: 'translateX(100%)' }),
        { optional: true }),
  
      group([
        query(':enter', [
          style({ transform: 'translateX(100%)' }),
          animate('0.5s ease-in-out',
            style({ transform: 'translateX(0%)' }))
        ], { optional: true }),
      ])
    ]),
  
    // Transitioning to Projects
    transition('* => Projects', [
      query(':enter, :leave', 
        style({ position: 'fixed', width: '100%', transform: 'translateX(100%)' }),
        { optional: true }),
  
      group([
        query(':enter', [
          style({ transform: 'translateX(100%)' }),
          animate('0.5s ease-in-out',
            style({ transform: 'translateX(0%)' }))
        ], { optional: true }),
      ])
    ]),
  
    // Transitioning to Contact
    transition('* => Contact', [
      query(':enter, :leave', 
        style({ position: 'fixed', width: '100%', transform: 'translateX(100%)' }),
        { optional: true }),
  
      group([
        query(':enter', [
          style({ transform: 'translateX(100%)' }),
          animate('0.5s ease-in-out',
            style({ transform: 'translateX(0%)' }))
        ], { optional: true }),
      ])
    ]),
  ]);
  