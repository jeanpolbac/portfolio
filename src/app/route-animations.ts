import {
  trigger,
  transition,
  style,
  query,
  group,
  animate,

} from '@angular/animations';

export const slideAnimation = trigger('slideAnimation', [
  // Transitioning *to* Home from About
  transition('* => *', [
    query(':enter, :leave', 
    style({ 
      position: 'fixed', 
      top: '50%',       // <-- Keep this for vertical centering
      width: '100%', 
      transform: 'translateX(-100%) translateY(-50%)', // <-- This keeps it at the left, but centered vertically
      opacity: 0 
    }), 
    { optional: true }
  ),

  group([
    query(':enter', [
      animate('500ms ease-in-out', 
        style({ 
          transform: 'translateX(0%) translateY(-50%)',  // <-- This will slide it to the center horizontally but keep it vertically centered
          opacity: 1 
        })
      )
    ], { optional: true }),

    query(':leave', [
      animate('500ms ease-in-out', 
        style({ 
          transform: 'translateX(100%) translateY(-50%)',  // <-- This will slide it out to the right but keep it vertically centered
          opacity: 0 
        })
      )
    ], { optional: true })
  ])
])
]);

