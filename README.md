# RznAngular
We use this file structure: 
```
Reference:
https://johnpapa.net/angular-2-styles/

 index.html                      // Starting page
  app/                            // Main app folder
    main.ts                       // bootstrap here
    app.component.css
    app.component.html
    app.component.ts              // Root component for the app (e.g. AppComponent)
    heroes/                       // Feature folder
      heroes.ts                   // Barrel module for the feature
      heroes.component.ts         // Router component (e.g. HeroesComponent)
      hero-list.component.css
      hero-list.component.html
      hero-list.component.ts      // list of heroes (e.g. HeroListComponent)
      hero-detail.component.css
      hero-detail.component.html
      hero-detail.component.ts    // hero details  (e.g. HeroDetailComponent)
      hero.service.ts             // A feature specific service  (e.g. HeroService)
    shared/                       // Shared features across the app
      shared.ts                   // Barrel module for shared features
      logger.service.ts           // Example shared service (e.g. LoggerService)
      spinner.component.ts        // Example shared component  (e.g. SpinnerComponent)
      config.ts   
      
      ```

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.19-3.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
