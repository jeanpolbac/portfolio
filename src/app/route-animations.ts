import {
  trigger,
  transition,
  style,
  query,
  group,
  animateChild,
  animate,
  keyframes,
} from '@angular/animations';

export const slideAnimation = trigger('slideAnimation', [
  // Transitioning *to* Home from About
  transition('About => Home', [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' }), {
      optional: true,
    }),

    group([
      query(
        ':enter',
        [
          style({ transform: 'translateX(-100%)', opacity: 0 }), // Initial position and opacity
          animate(
            '1.0s ease-in-out',
            style({ transform: 'translateX(0%)', opacity: 1 }) // Final position and opacity
          ),
        ],
        { optional: true }
      ),
    ]),
  ]),

  // Transitioning *to* Home from Projects
  transition('Projects => Home', [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' }), {
      optional: true,
    }),

    group([
      query(
        ':enter',
        [
          style({ transform: 'translateX(-100%)', opacity: 0 }),
          animate(
            '1.0s ease-in-out',
            style({ transform: 'translateX(0%)', opacity: 1 }) // Final position and opacity
          ),
        ],
        { optional: true }
      ),
    ]),
  ]),

  // Transitioning *to* Home from Contact
  transition('Contact => Home', [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' }), {
      optional: true,
    }),

    group([
      query(
        ':enter',
        [
          style({ transform: 'translateX(-100%)', opacity: 0 }),
          animate(
            '1.0s ease-in-out',
            style({ transform: 'translateX(0%)', opacity: 1 }) // Final position and opacity
          ),
        ],
        { optional: true }
      ),
    ]),
  ]),

  // Transitioning *to* About from Home
  transition('Home => About', [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' }), {
      optional: true,
    }),

    group([
      query(
        ':enter',
        [
          style({ transform: 'translateX(-100%)', opacity: 0 }),
          animate(
            '1.0s ease-in-out',
            style({ transform: 'translateX(0%)', opacity: 1 }) // Final position and opacity
          ),
        ],
        { optional: true }
      ),
    ]),
  ]),

  // Transitioning *to* About from Projects
  transition('Projects => About', [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' }), {
      optional: true,
    }),

    group([
      query(
        ':enter',
        [
          style({ transform: 'translateX(-100%)', opacity: 0 }),
          animate(
            '1.0s ease-in-out',
            style({ transform: 'translateX(0%)', opacity: 1 }) // Final position and opacity
          ),
        ],
        { optional: true }
      ),
    ]),
  ]),

  // Transitioning *to* About from Contact
  transition('Contact => About', [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' }), {
      optional: true,
    }),

    group([
      query(
        ':enter',
        [
          style({ transform: 'translateX(-100%)', opacity: 0 }),
          animate(
            '1.0s ease-in-out',
            style({ transform: 'translateX(0%)', opacity: 1 }) // Final position and opacity
          ),
        ],
        { optional: true }
      ),
    ]),
  ]),

  // Transitioning *to* Projects from Home
  transition('Home => Projects', [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' }), {
      optional: true,
    }),

    group([
      query(
        ':enter',
        [
          style({ transform: 'translateX(-100%)', opacity: 0 }),
          animate(
            '1.0s ease-in-out',
            style({ transform: 'translateX(0%)', opacity: 1 }) // Final position and opacity
          ),
        ],
        { optional: true }
      ),
    ]),
  ]),

  // Transitioning *to* Projects from About
  transition('About => Projects', [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' }), {
      optional: true,
    }),

    group([
      query(
        ':enter',
        [
          style({ transform: 'translateX(-100%)', opacity: 0 }),
          animate(
            '1.0s ease-in-out',
            style({ transform: 'translateX(0%)', opacity: 1 }) // Final position and opacity
          ),
        ],
        { optional: true }
      ),
    ]),
  ]),

  // Transitioning *to* Projects from Contact
  transition('Contact => Projects', [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' }), {
      optional: true,
    }),

    group([
      query(
        ':enter',
        [
          style({ transform: 'translateX(-100%)', opacity: 0 }),
          animate(
            '1.0s ease-in-out',
            style({ transform: 'translateX(0%)', opacity: 1 }) // Final position and opacity
          ),
        ],
        { optional: true }
      ),
    ]),
  ]),

  // Transitioning *to* Contact from any route
  transition('* => Contact', [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' }), {
      optional: true,
    }),

    group([
      query(
        ':enter',
        [
          style({ transform: 'translateX(-100%)', opacity: 0 }),
          animate(
            '1.0s ease-in-out',
            style({ transform: 'translateX(0%)', opacity: 1 }) // Final position and opacity
          ),
        ],
        { optional: true }
      ),
    ]),
  ]),
]);
