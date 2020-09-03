import { LoggerFactory } from './services/logger/logger-factory'

/**
 * Application entry point
 *  - Load scss entry point (./scss/main.scss)
 *  - Wait for DOM is loaded before to make a Main instance
 */

import './scss/main.scss';
import { Logger } from './services/logger/logger';

/**
 * Main Class
 */
 class Main {
     constructor() {
         LoggerFactory.getLogger('info').log('Application starts')

         this.appDock = document.querySelector('main')

         // Sets a poor title
         const documentTitle = document.createElement('h1')
         documentTitle.textContent = 'Welcome to ES6 application'

         // Append title to appDock
         this.appDock.appendChild(documentTitle)
     }
 }

 /**
  * Bootstrap the application
  */
document.addEventListener(
    'DOMContentLoaded',
    () => {
        new Main()
    }
)