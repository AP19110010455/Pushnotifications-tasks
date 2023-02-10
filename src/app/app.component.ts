// import { Component } from '@angular/core';
// import { PushNotificationService } from './push-notification.service';
//
// @Component({
//   selector: 'app-root',
//   templateUrl: 'app.component.html'
// })
// export class AppComponent {
//   // isTabOpen = true;
//
//   constructor(private pushNotificationService: PushNotificationService) {
//     window.addEventListener('load', () => {
//       this.pushNotificationService.showNotification('The tab is opened!');
//     });
//     window.addEventListener('beforeunload', () => {
//       // this.isTabOpen = false;
//       this.pushNotificationService.showNotification('The tab is closed!');
//     });
//   }
//
//   requestPermission() {
//     this.pushNotificationService.requestPermission();
//   }
// }

import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { PushNotificationService } from './push-notification.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit, OnDestroy {

  constructor(private pushNotificationService: PushNotificationService) {}

  ngOnInit() {
    this.pushNotificationService.showNotification('The tab is opened!');
  }

  @HostListener('window:beforeunload')
  ngOnDestroy() {
    this.pushNotificationService.showNotification('The tab is closed!');
  }

  requestPermission() {
    this.pushNotificationService.requestPermission();
  }
}


//Before
